
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Casa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nombre: string;

  @Column({ length: 500 })
  username: string;

  @Column({ length: 20 })
  password: string;

  @Column()
  valor: number;

  @Column()
  imagenURL: string;
}