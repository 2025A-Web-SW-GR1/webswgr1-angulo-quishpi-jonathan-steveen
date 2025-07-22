import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class CasaService {
    constructor(
        @Inject('CASA_REPOSITORY')
        private casaRepository: Repository<Casa>,
    ){

    }
    obtenerTodos(
        options?: FindManyOptions<Casa> | undefined
    ){
        return this.casaRepository.find(options);
    }
    buscarUnoPorUsername(username: string){
        return this.casaRepository.findOneByOrFail({ username });
    }
    crearUno(nombre: string, valor: number, imagenUrl: string){
        const nuevaInstancia = this.casaRepository.create();
        nuevaInstancia.nombre = nombre;
        nuevaInstancia.valor = valor; 
        nuevaInstancia.imagenURL = imagenUrl;
        return this.casaRepository.save(nuevaInstancia);
    }
}
 