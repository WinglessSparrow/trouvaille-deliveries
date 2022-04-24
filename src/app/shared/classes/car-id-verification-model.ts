export abstract class CarIdVerificationModel {
  abstract verifyCarId(id: string): Promise<boolean>;
}
