export enum DeliveryStates {
  IN_CENTRAL = 'In Central',
  REQUESTED_PICKUP = 'Pickup Requested',

  IN_CAR = 'In Car',

  PICKED_UP = 'Picked Up',
  DELIVERED = 'Delivered',

  DELIVERY_FAILED = 'Delivery Not Possible',
  PICKUP_FAILED = 'Pickup Not Possible',
  ADDRESS_NOT_FOUND = 'Address Not Identifiable',
}
