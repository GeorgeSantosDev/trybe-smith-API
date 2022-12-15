export interface NewOrder {
  productsIds: number[],
  userId: number,
}

export interface Order extends NewOrder {
  id: number,
}