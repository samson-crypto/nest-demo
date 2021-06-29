import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { unauthorized } from 'src/filters/http-exception.filter';
import { Logger } from 'src/libs/logger';


@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    try {
      // not implement for now
      return true;
    } catch (error) {
      Logger.error(error);
      throw unauthorized(error.message);
    }
    throw unauthorized('authorize failed.');
  }
}
