import { Controller, Get, Post, Param, Query, Headers, Body, HttpCode, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private casas = [
    { id: 1, nombre: "Casa 1" },
    { id: 2, nombre: "Casa 2" },
  ];

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
  @HttpCode(200) // Establece el código de estado HTTP a 200 OK
  ejmplo(
    @Param('id') id, //Parametro de ruta llamado 'id'
    @Query('hola') hola, //Parametro de consulta llamado 'hola'
    @Headers('escuela') escuela, //Parametro de cabecera llamado 'escuela'
    @Body('monto') monto //Cuerpo de la peticion llamado 'monto'
  ): string {
    return id + hola + 'Funcionando' + escuela + monto;
    //if() else throw NotFoundException('No encontrado');
  }

  @Get('/casa')
  @HttpCode(200)
  getCasa(@Query('id') id?: string): Object {
    if (!id) {
      return this.casas;
    }

    const found = this.casas.find(c => c.id === Number(id));
    if (!found) {
      throw new NotFoundException('No se encuentra la casa');
    }

    return found;
  }

}
