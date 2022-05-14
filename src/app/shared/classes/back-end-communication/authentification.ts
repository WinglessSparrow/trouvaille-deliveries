export class Authentification {
  public password: string;
  public username: string;

  constructor(username: string, password: string) {
    this.password = password;
    this.username = username;
  }
}
