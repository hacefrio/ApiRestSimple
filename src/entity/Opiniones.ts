import { Column, Entity, ObjectId, ObjectIdColumn,PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

export class Opiniones {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    @IsNotEmpty()
    id_pelicula: number;
    @Column()
    @IsNotEmpty()
    id_usuario: number;
    @Column()
    @IsNotEmpty()
    opinion: string;
    @Column()
    @IsNotEmpty()
    clasicacion: number;
    @Column()
    @IsNotEmpty()
    fecha: Date;
}