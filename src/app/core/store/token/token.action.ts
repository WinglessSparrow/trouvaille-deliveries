export class SetToken {
  static readonly type = '[TOKEN] setToken';

  constructor(public payload: string) {}
}

export class ClearToken {
  static readonly type = '[TOKEN] clearToken';

  constructor() {}
}
