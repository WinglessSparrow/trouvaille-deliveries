export class APIUrls {
  public static readonly API: string = 'https://td.vvjm.dev/api';

  public static readonly ROUTES_TOKEN: string = this.API + '/routes/token';
  //FIXME 500 on calling server, wtf? ask Mister Y
  public static readonly REFRESH_TOKEN: string = this.API + '/auth/refresh';

  public static readonly AUTH: string = this.API + '/auth';
  public static readonly CHANGE_STATE: string =
    this.API + '/deliveries/changeState';

  public static readonly SEND_TIME: string = this.API + '/v1/real-working-time';
  public static readonly VERIFY_VEHICLE: string = this.API + '/vehicle';

  public static readonly EMPLOYEE: string = this.API + '/v1/employee';
}
