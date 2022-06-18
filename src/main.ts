import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConflictInterceptor } from './common/errors/interceptors/conflict.interceptor';
import { DataBaseInterceptor } from './common/errors/interceptors/database.interceptor';
import { NotFoundErrorInterceptor } from './common/errors/interceptors/notfound.interceptor';
import { UnauthorizedErrorInterceptor } from './common/errors/interceptors/unauthorized.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new DataBaseInterceptor());
  app.useGlobalInterceptors(new UnauthorizedErrorInterceptor());
  app.useGlobalInterceptors(new NotFoundErrorInterceptor());
  await app.listen(process.env.PORT || 3100);
}
bootstrap();
