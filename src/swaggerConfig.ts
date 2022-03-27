import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

function addSwaggerConfig(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Pani example')
    .setDescription('The Pain API description')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);
}

export { addSwaggerConfig };
