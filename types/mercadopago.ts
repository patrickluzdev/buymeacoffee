export interface PreferenceItem {
    id: string;
    title: string;
    description?: string;
    picture_url?: string;
    category_id?: string;
    quantity: number;
    unit_price: number;
    currency_id: string;
}

export interface BackUrls {
    success: string;
    failure: string;
    pending: string;
}

export interface PreferenceData {
    items: PreferenceItem[];
    back_urls: BackUrls;
    auto_return?: 'approved' | 'all';
}

export interface PaymentPreferenceResponse {
    id: string;
    initPoint: string | undefined;
    sandboxInitPoint: string | undefined;
}
