import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const SwaggerConfig = function (app) {
  const config = new DocumentBuilder()
    .setTitle('Paim example')
    .setDescription('The Pain API description')
    .setVersion('1.0')
    .addTag('Pain')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);
};

export { SwaggerConfig };
