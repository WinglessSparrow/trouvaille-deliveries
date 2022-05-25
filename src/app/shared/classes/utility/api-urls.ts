export class APIUrls {
  public static readonly API: string = 'https://td.vvjm.dev/api';
  public static readonly ROUTES_TOKEN: string = this.API + '/routes/token';
  public static readonly AUTH: string = this.API + '/auth';
  public static readonly CHANGE_STATE: string =
    this.API + '/deliveries/changeState';
  public static readonly SEND_TIME: string = this.API + '/v1/real-working-time';
}
