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
    @Column({ nullable: true }) // Esto hace que la columna sea opcional en la base de datos.
    @IsOptional() // Esto le dice a class-validator que el campo es opcional en la validación.
    fecha_estreno?: Date; // El signo de interrogación indica que la propiedad es opcional en TypeScript.
    
}