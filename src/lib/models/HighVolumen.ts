export type IHighVolumen = {
    _id: string,
    property_type: string,
    province: string,
    city: string,
    ask_price: number,
    numberOfAssets: number,
    numberOfAssetsSelled: number,
    min_idealista?: number,
    max_idealista?: number,
    starred: boolean,
    type: string
}