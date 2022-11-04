import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Im new in Dev Ops. Please dont confuse me in Deployments';
  }
}
