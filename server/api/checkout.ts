import { z } from "zod";
import { MercadoPagoGateway } from "~/server/utils/gateways/mercadopago";
import { ProductService } from "~/server/utils/services/product.service";
import type { PreferenceData } from "~/app/types/mercadopago";

const checkoutSchema = z.object({
    productId: z.string().catch('coffee'),
    quantity: z.coerce.number().catch(1)
});

export default defineEventHandler(async (event) => {
    const rawBody = await readBody(event);
    const { productId, quantity } = checkoutSchema.parse(rawBody);

    const productService = ProductService.getInstance();
    const product = productService.getProduct(productId);

    if (!product) {
        throw createError({
            statusCode: 404,
            message: 'Product not found'
        });
    }

    if (quantity < 1 || quantity > 100) {
        throw createError({
            statusCode: 400,
            message: 'Invalid quantity'
        });
    }

    const config = useRuntimeConfig();
    const baseUrl = getRequestURL(event).origin || config.public.baseUrl || 'http://localhost:3000';
    const isLocalhost = baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1');

    const totalPrice = productService.calculateTotal(productId, quantity);
    const itemTitle = quantity === 1 ? product.name : `${quantity} ${product.name}s`;
    const itemDescription = quantity === 1
        ? product.description
        : `${product.description} (${quantity}x)`;

    const preferenceData: PreferenceData = {
        items: [
            {
                id: product.id,
                title: itemTitle,
                description: itemDescription,
                picture_url: `${baseUrl}${product.imageUrl}`,
                category_id: product.category,
                quantity: 1,
                unit_price: totalPrice,
                currency_id: product.currency
            }
        ],
        back_urls: {
            success: `${baseUrl}/success`,
            failure: `${baseUrl}/failure`,
            pending: `${baseUrl}/pending`
        }
    };

    if (!isLocalhost) {
        preferenceData.auto_return = 'approved';
    }

    const mercadoPago = MercadoPagoGateway.getInstance();
    const response = await mercadoPago.createPaymentPreference(preferenceData);

    const redirectUrl = response.initPoint || response.sandboxInitPoint;

    if (!redirectUrl) {
        throw createError({
            statusCode: 500,
            message: 'Payment redirect URL not available'
        });
    }

    return sendRedirect(event, redirectUrl, 302);
})
