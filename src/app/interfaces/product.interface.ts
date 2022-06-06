export interface Product {
    
    id: string,
    name: string,
    price: number,
    stock: number,
    status: string,
    superHero: {
        id: string,
        name: string,
        editorial: string
    }
}