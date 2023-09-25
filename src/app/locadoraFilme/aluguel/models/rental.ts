export interface Rental {
    rental_id : number
    rental_date : Date
    inventory_id : number 
    inventory_Film_Title? : string | null
    customer_id : number
    customer_First_Name? : string | null
    customer_Last_Name? : string | null
    return_date? : Date | null
    staff_id : number
    last_update : Date
    forecast_date : Date
    situacao : Situacao
}

enum Situacao{
    alugado = 1,
    devolvido = 2,
    pago = 3
}