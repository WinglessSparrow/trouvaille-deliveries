export class Authentification {
  private _password: string;
  private _email: string;

  constructor(password: string, email: string) {
    this._password = password;
    this._email = email;
  }

  public get password(): string {
    return this._password;
  }
  public set password(v: string) {
    this._password = v;
  }
  public get email(): string {
    return this._email;
  }
  public set email(v: string) {
    this._email = v;
  }
}
