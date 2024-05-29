import { getValue, setValue } from 'express-ctx';
import { Accountant } from 'src/mudules/employee/entities/employee.entity';
import * as cls from 'cls-hooked';

const namespace = cls.createNamespace('request');
export class ContextProvider {
  private static readonly nameSpace = 'request';

  private static readonly authUserKey = 'user_key';

  private static get<T>(key: string): T | undefined {
    return getValue<T>(ContextProvider.getKeyWithNamespace(key));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static set(key: string, value: any): void {
    // console.log('set');
    setValue(ContextProvider.getKeyWithNamespace(key), value);
    // console.log('set');
  }

  private static getKeyWithNamespace(key: string): string {
    // console.log('getKeyWithNamespace');
    return `${ContextProvider.nameSpace}.${key}`;
  }
  static setAuthUser(user: Accountant): void {
    // console.log('setAuthUser');
    // ContextProvider.set(ContextProvider.authUserKey, user);
    namespace.run(() => {
      namespace.set(
        ContextProvider.getKeyWithNamespace(ContextProvider.authUserKey),
        user,
      );
    });
  }

  static getAuthUser(): Accountant | undefined {
    return ContextProvider.get<Accountant>(ContextProvider.authUserKey);
  }
}
