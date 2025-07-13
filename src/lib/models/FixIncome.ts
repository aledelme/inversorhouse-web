
export type IFixIncome = {
    _id: string
    property_type: string // e.g. "Piso", "Chalet", "Residencial"
    procedure_type: "CRV" | "CCV"
    state: string
    province: string
    city: string
    address: string
    zip_code: string
    ref_code: string
    required_capital: number
    raised_capital: number
    ticket: number
    ticket_explanation?: string
    duration: number
    yield: string // Anual yield percentage
    starred: boolean
    status: "OPEN" | "COMPLETED" | "IN_PROGRESS"
}