import { Injectable } from '@angular/core';
import { TokenRefresherModel } from 'src/app/shared/models/token-refresher-model';

@Injectable({
  providedIn: 'root',
})
export class TokenRefresherMockService extends TokenRefresherModel {
  constructor() {
    super();
  }

  refreshToken() {
    console.log("Blip-Blop I'm a mock, I refreshed the Token");
  }
}
