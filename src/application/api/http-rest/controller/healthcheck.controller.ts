import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HealthcheckController {
  @Get('')
  check(): String {
    console.info('Aplication is available');
    return "Aplication is available";

  }
}
