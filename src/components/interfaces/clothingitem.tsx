export interface IClothingItem {
    name: string,
    description: string,
    quantity: string,
    price: number,
    imageLink?: string,
    size: string[],
    currentDimensions: string[],
    active: boolean,

}