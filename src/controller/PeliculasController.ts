import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Peliculas } from "../entity/Peliculas";
import { validate } from "class-validator";


export class PeliculasController {

    static create = async (req: Request, res: Response) => {
        try {
            const { nombre, director, duracion, fecha_estreno } = req.body;
            const pelicula = new Peliculas();
            console.log(nombre, duracion, director);
            pelicula.nombre = nombre;
            pelicula.director = director;
            pelicula.duracion = duracion;
            pelicula.fecha_estreno = fecha_estreno;

            const errors = await validate(pelicula, { validationError: { target: false } });
            if (errors.length > 0) {
                return res.status(400).json({ message: errors });
            }
            await AppDataSource.getRepository(Peliculas).save(pelicula);
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }

    static getAll = async (req: Request, res: Response) => {
        
        try {
            const peliculas = await AppDataSource.getRepository(Peliculas).find();
            return res.send(peliculas);
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }
    
    static getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const peliculas = await AppDataSource.getRepository(Peliculas).findOneOrFail(id);
            return res.send(peliculas);
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }

    static edit = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nombre, director, duracion, fecha_estreno } = req.body;
            const peliculas = await AppDataSource.getRepository(Peliculas).findOneOrFail(id);
            peliculas.nombre = nombre;
            peliculas.director = director;
            peliculas.duracion = duracion;
            peliculas.fecha_estreno = fecha_estreno;
            const errors = await validate(peliculas, { validationError: { target: false } });
            if (errors.length > 0) {
                return res.status(400).json({ message: errors });
            }
            await AppDataSource.getRepository(Peliculas).save(peliculas);
            return res.status(200).json({ message: 'Pelicula update' });
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }
    static delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await AppDataSource.getRepository(Peliculas).delete(id);
            return res.status(200).json({ message: 'Pelicula delete' });
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }




}