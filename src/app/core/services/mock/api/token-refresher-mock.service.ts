import { Injectable } from '@angular/core';
import { ITokenRefresher } from 'src/app/shared/interfaces/services-interfaces/i-token-refresher';

@Injectable({
  providedIn: 'root',
})
export class TokenRefresherMockService extends ITokenRefresher {
  constructor() {
    super();
  }

  refreshToken() {
    console.log("Blip-Blop I'm a mock, I refreshed the Token");
  }
}
