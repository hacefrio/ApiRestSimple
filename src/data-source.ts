import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Productos } from "./entity/Productos"
import { Peliculas } from "./entity/Peliculas"
import { Opiniones } from "./entity/Opiniones"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    username: "sa",
    password: "matanga.1970",
    database: "pruebaRestApi",
    synchronize: true,
    logging: false,
    entities: [Users,Productos,Peliculas,Opiniones],
    migrations: [],
    subscribers: [],
    extra: {
      trustServerCertificate: true,
    }
})
