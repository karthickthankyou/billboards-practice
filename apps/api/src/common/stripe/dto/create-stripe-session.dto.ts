export class CreateStripeDto {
  uid: string
  items: { id: number; name: string; price: number }[]
}
