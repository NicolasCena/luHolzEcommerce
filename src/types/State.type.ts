import { Product } from "./Product.type";

export type State = {
    products: Product[];
    user: {
        name: string;
        admin: boolean;
        photo: string;
        email: string;
        isAuthenticated: boolean;
    }
}