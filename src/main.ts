import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Corporation Rest Api')
    .setDescription('Corporation Rest Api')
    .setVersion('1.0')
    .addTag('Corporation')
    .build();
  const documentInterests = SwaggerModule.createDocument(app, options
   );
  SwaggerModule.setup('api', app, documentInterests); 
  await app.listen(3000);
}
bootstrap();
