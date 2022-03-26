import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

function addSwaggerConfig(args) {
  const config = new DocumentBuilder()
    .setTitle('Pani example')
    .setDescription('The Pain API description')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(args, config);

  SwaggerModule.setup('swagger', args, document);
}

export { addSwaggerConfig };
