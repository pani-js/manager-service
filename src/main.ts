import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { addSwaggerConfig } from './swaggerConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await console.log(app);
  addSwaggerConfig(app);

  await app.listen(3000);
}

bootstrap();
