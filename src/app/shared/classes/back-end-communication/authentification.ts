export class Authentification {
  private _password: string;
  private _username: string;

  constructor(username: string, password: string) {
    this._password = password;
    this._username = username;
  }

  public get password(): string {
    return this._password;
  }
  public set password(v: string) {
    this._password = v;
  }
  public get username(): string {
    return this._username;
  }
  public set username(v: string) {
    this._username = v;
  }
}