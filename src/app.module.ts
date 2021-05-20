import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   'cats/(.*)',
      // )
      .forRoutes(CatsController);
  }
}
