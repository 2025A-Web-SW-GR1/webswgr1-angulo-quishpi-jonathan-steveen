import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as sessionFileStore from 'session-file-store';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
    const FileStore = sessionFileStore(session); // Initialize FileStore
  app.use(
    session({
      secret: 'secreto-seguro',
      resave: false, 
      saveUninitialized: false, 
      store: new FileStore({
        path: './sessions', 
        ttl: 3600, 
      }),
      cookie: {
        maxAge: 3600000,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      },
    }),
  );
  // Setear el motor de renderizado del servidor
  app.set('view engine', 'ejs');
  // Donde van a estar los archivos de vista
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  // Donde van a estar los archivos publicos
  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  // Iniciar el servidor
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
