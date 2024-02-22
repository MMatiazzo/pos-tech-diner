import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HealthcheckController {
  @Get('')
  check(): void {
    console.log('Aplication is available!');
  }
}
