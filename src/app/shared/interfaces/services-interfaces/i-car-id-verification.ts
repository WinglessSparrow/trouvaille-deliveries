export abstract class ICarIdVerification {
  abstract verifyCarId(id: string): Promise<boolean>;
}
