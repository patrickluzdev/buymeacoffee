import { MercadoPagoConfig, Preference } from 'mercadopago';
import type { PreferenceData, PaymentPreferenceResponse } from '~/app/types/mercadopago';

export class MercadoPagoGateway {
    private static instance: MercadoPagoGateway | null = null;
    private client: MercadoPagoConfig;

    private constructor() {
        const config = useRuntimeConfig();
        this.client = new MercadoPagoConfig({
            accessToken: config.mercadoPagoAccessToken
        });
    }

    public static getInstance(): MercadoPagoGateway {
        if (!MercadoPagoGateway.instance) {
            MercadoPagoGateway.instance = new MercadoPagoGateway();
        }
        return MercadoPagoGateway.instance;
    }

    async createPaymentPreference(preferenceData: PreferenceData): Promise<PaymentPreferenceResponse> {
        const preference = new Preference(this.client);

        const response = await preference.create({
            body: preferenceData
        });

        return {
            id: response.id || "",
            initPoint: response.init_point,
            sandboxInitPoint: response.sandbox_init_point
        };
    }
}
