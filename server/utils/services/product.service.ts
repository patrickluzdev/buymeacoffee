import type { Product } from '~/app/types/product';

export class ProductService {
    private static instance: ProductService | null = null;
    private products: Map<string, Product> = new Map();

    private constructor() {
        const config = useRuntimeConfig();

        this.products.set('coffee', {
            id: 'coffee',
            name: 'Café',
            description: 'Apoie com um café',
            price: config.public.coffeePrice,
            currency: 'BRL',
            imageUrl: '/coffee.svg',
            category: 'others'
        });
    }

    public static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }

    public getProduct(productId: string): Product | undefined {
        return this.products.get(productId);
    }

    public calculateTotal(productId: string, quantity: number): number {
        const product = this.getProduct(productId);
        if (!product) {
            throw new Error(`Product ${productId} not found`);
        }
        return product.price * quantity;
    }
}
