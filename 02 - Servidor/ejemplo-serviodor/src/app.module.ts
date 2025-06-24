import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { Casa } from './casa/casa.entity';
import { CasaModule } from './casa/casa.module';

@Module({
  imports: [
    DatabaseModule, // Importa el módulo de la base de datos
    CasaModule, // Importa el módulo de Casa
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
