import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Productos } from "./entity/Productos"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    username: "sa",
    password: "matanga.1970",
    database: "pruebaRestApi",
    synchronize: true,
    logging: false,
    entities: [User,Productos],
    migrations: [],
    subscribers: [],
    extra: {
      trustServerCertificate: true,
    }
})
