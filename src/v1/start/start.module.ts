import { Module } from '@nestjs/common';
import { StartService } from './start.service';
import { ConfigModule } from '@nestjs/config';
import { StartController } from './start.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
  ],
  controllers: [StartController],
  providers: [StartService],
  exports: [StartService]
})
export class StartModule {}
