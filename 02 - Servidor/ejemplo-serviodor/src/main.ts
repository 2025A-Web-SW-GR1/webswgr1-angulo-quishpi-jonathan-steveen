import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as sessionFileStore from 'session-file-store';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
