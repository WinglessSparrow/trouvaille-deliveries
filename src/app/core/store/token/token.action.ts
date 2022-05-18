export class SetToken {
  static readonly type = '[TOKEN] setToken';

  constructor(public payload: string) {}
}

export class RefreshToken {
  static readonly type = '[TOKEN] refreshToken';

  constructor() {}
}

export class ClearToken {
  static readonly type = '[TOKEN] clearToken';

  constructor() {}
}
