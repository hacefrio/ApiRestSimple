import { Column, Entity, ObjectId, ObjectIdColumn,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Productos {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    precio: number;
    @Column()
    fechaCreacion: Date;
    @Column()
    fechaEdicion: Date;
}