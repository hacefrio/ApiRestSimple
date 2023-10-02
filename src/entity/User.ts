import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import * as bcrypt from "bcryptjs"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    email: string

    @Column()
    password: string
    
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }
    checkPassword(password: string, passwordHash: string): boolean {
        return bcrypt.compareSync(password, passwordHash)
    }
    

}
