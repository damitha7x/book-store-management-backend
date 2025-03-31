import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  
  // Add this line to handle root path
  app.getHttpAdapter().get('/', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
  });
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
