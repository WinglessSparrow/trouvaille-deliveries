import { Package } from 'src/app/shared/classes/package';

export class ChangePackage {
  static readonly type = '[PACKAGE] ChangePackage';

  constructor(public payload: Package) {}
}
