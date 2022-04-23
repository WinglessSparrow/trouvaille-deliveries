export class Person {
  private _name: string;
  private _address: string;

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter address
   * @return {string}
   */
  public get address(): string {
    return this._address;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter address
   * @param {string} value
   */
  public set address(value: string) {
    this._address = value;
  }
}
