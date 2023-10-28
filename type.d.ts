
export type Product = {
    id: number;
    image: string;
    price: string;
    time: string;
    desc: string;
    type: string;
    prevPrice?: string;
}
export type CartItem = {
    id: number;
    image: string;
    price: string;
    desc: string;
    quantity: number;
}