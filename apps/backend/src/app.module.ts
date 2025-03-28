import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HealthModule } from './HealthCheck/health-check.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'health',
        module: HealthModule,
      },
    ]),
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
