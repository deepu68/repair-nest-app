import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StartModule } from './v1/start/start.module';
import { UsersModule } from './v1/users/users.module';
import { GetCustomerIpMiddleWare } from './utils/helpers/GetCustomerIpMiddleware';
import { StartController } from './v1/start/start.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    StartModule,
    UsersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetCustomerIpMiddleWare).forRoutes(StartController);
  }
}
