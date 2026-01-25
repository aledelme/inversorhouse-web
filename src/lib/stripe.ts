import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export function getCustomer(customerId: string) {
    return stripe.customers.retrieve(customerId)
}