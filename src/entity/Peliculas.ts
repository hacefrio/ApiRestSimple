import { Column, Entity, ObjectId, ObjectIdColumn,PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsOptional } from "class-validator";

@Entity()
export class Peliculas {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    @IsNotEmpty()
    nombre: string;
    @Column()
    @IsNotEmpty()
    duracion: number;
    @Column()
    @IsNotEmpty()
    director: string;
    @Column()
    @IsOptional()
    fecha_estreno: Date;
}