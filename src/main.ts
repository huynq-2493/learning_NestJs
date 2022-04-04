import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
process.env['NEST_DEBUG'] = 'true'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug']
  });
  await app.listen(3000);
}
bootstrap();
