import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumnCannotBeNullableError, PrimaryColumn, Unique } from "typeorm"
import * as bcrypt from "bcryptjs"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true }) 
    email: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number


    @Column()
    password: string
    
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }
    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password)
    }
    

}
