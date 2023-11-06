import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Opiniones } from "../entity/Opiniones";
import { validate } from "class-validator";

export class OpinionesController {
    static create = async (req: Request, res: Response) => {
        try {
            const { id_pelicula, id_usuario, opinion, clasicacion, fecha } = req.body;
            const opiniones = new Opiniones();
            opiniones.id_pelicula = id_pelicula;
            opiniones.id_usuario = id_usuario;
            opiniones.opinion = opinion;
            opiniones.clasicacion = clasicacion;
            opiniones.fecha = fecha;
            const errors = await validate(opiniones, { validationError: { target: false } });
            if (errors.length > 0) {
                return res.status(400).json({ message: errors });
            }
            await AppDataSource.getRepository(Opiniones).save(opiniones);
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }
    static getAll = async (req: Request, res: Response) => {
        try {
            const opiniones = await AppDataSource.getRepository(Opiniones).find();
            if (opiniones.length > 0) {
                return res.send(opiniones);
            } else {
                return res.status(400).json({ message: 'Not result' });
            }
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }
    static getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const opiniones = await AppDataSource.getRepository(Opiniones).findOneOrFail(id);
            return res.send(opiniones);
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }
    static edit = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { id_pelicula, id_usuario, opinion, clasicacion, fecha } = req.body;
            const opiniones = await AppDataSource.getRepository(Opiniones).findOneOrFail(id);
            opiniones.id_pelicula = id_pelicula;
            opiniones.id_usuario = id_usuario;
            opiniones.opinion = opinion;
            opiniones.clasicacion = clasicacion;
            opiniones.fecha = fecha;
            const errors = await validate(opiniones, { validationError: { target: false } });
            if (errors.length > 0) {
                return res.status(400).json({ message: errors });
            }
            await AppDataSource.getRepository(Opiniones).save(opiniones);
            return res.status(200).json({ message: 'Opinion update' });
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }
    static delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await AppDataSource.getRepository(Opiniones).delete(id);
            return res.status(200).json({ message: 'Opinion delete' });
        } catch (error) { return res.status(400).json({ message: error.message }) };
    }

}