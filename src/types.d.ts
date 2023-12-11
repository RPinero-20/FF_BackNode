
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
    isOffer: boolean;
    discount: number;
    categoryID: string;
    sectionID: string;
    price: parseFloat;
}


export type ClientURLS = '/home'
| '/productDetail/:id'
| '/categories'
| '/productsList'
| '/productsList/:name';

export type AdminURLS = '/home'
| '/products'
| '/productDetail/:id'
| '/products/:code'
| '/deleteProduct/:id';