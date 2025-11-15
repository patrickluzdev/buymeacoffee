import { ProductService } from '~server/services/product.service';

export default defineEventHandler(() => {
    const productService = ProductService.getInstance();
    const product = productService.getProduct('coffee');

    if (!product) {
        throw createError({
            statusCode: 404,
            message: 'Product not found'
        });
    }

    return product;
});
