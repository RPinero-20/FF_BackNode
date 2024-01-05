
export interface sectionsFromDBProps {
    id: string
    name: string
    imageUrl: string
    // productList: string[]
}

export interface ProductProps {
    id: string;
    imageUrl: string;
    name: string;
    code: string;
    description: string;
    isOffer: number;
    // discount: number;
    categoryID: string;
    sectionID: string;
    price: parseFloat;
}

export interface ProductDetail {
    id: string;
    imageUrl: string;
    imageUrl1: string;
    imageUrl2: string;
    imageUrl3: string;
    imageUrl4: string;
    imageUrl5: string;
    imageUrl6: string;
    imageUrl7: string;
    name: string;
    code: string;
    description: string;
    longDescription: string;
    isOffer: number;
    // discount: number;
    categoryID: string;
    sectionID: string;
    price: parseFloat;
}

export interface urlParams {
    category?: string;
    search?: string;
    id?: string;
    code?: string;
}

export type ClientURLS = '/home'
| '/productDetail'
| '/categories'
| '/productsList';

export type AdminURLS = '/home'
| '/products'
| '/productDetail/:id'
| '/products/:code'
| '/deleteProduct/:id';