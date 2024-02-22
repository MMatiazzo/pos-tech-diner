import { Module } from '@nestjs/common';
import { HealthcheckController } from '../api/http-rest/controller/healthcheck.controller';

@Module({
  controllers: [HealthcheckController],
})
export class HealthcheckModule { }
