'use server'

import { IHighVolumen } from "./models/HighVolumen";

const oportunidades: IHighVolumen[] = [
    {
        _id: "cartera-reo-1",
        procedure_type: "venta",
        property_type: "Viviendas",
        province: "Madrid, Malaga, Alicante, Valencia y Barcelona",
        city: "Cartera REO 1",
        ask_price: 2128500,
        numberOfAssets: 26,
        numberOfAssetsSelled: 7,
        min_idealista: 4086000,
        max_idealista: 4970003,
        starred: true,
    },
    {
        _id: "cartera-reo-2",
        procedure_type: "venta",
        property_type: "Viviendas",
        province: "Madrid, Malaga, Alicante, Valencia y Barcelona",
        city: "Cartera REO 2",
        ask_price: 3343600,
        numberOfAssets: 33,
        numberOfAssetsSelled: 0,
        min_idealista: 5852000,
        max_idealista: 7052000,
        starred: true,
    },
    // {
    //     _id: "cartera-reo-3",
    //     procedure_type: "venta",
    //     property_type: "Hotel",
    //     province: "Madrid",
    //     city: "Cartera REO 3",
    //     ask_price: 11000000,
    //     numberOfAssets: 66,
    //     min_idealista: 4086000,
    //     max_idealista: 4970003,
    //     starred: true,
    // }
]

export async function getHighVolumens() {
    // Simulate fetching high volume opportunities
    return oportunidades;
}