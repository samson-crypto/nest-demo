import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): string {
    // return JSON.stringify(process.env);
    return 'Chain explorer is up and running!';
  }
}
