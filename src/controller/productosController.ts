import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Productos } from "../entity/Productos";


export class productosController{
    static new = async(req:Request, res:Response) => {
        try{
            const {nombre,precio} = req.body;
            const producto= new Productos();
            //console.log(nombre,precio);
            if(nombre!=""){
                return res.status(400).json({message:"El nombre no puede estar vacio"});
            }else 
            if(precio<=0){
                return res.status(400).json({message:"El precio debe ser mayor a 0"});
            }else{
                producto.nombre=nombre;
                producto.precio=precio;
                producto.fechaCreacion=new Date();
                await AppDataSource.getRepository(Productos).save(producto);
                return res.status(200).json({message:producto});
            }
        }catch(error){return res.status(400).json({message:error.message})};
    }

    static get = async(req:Request, res:Response) => {
        // get productos from database
        const productos = await AppDataSource.getRepository(Productos).find();
        // send the productos object
        res.send(productos);

    }
    static getFilterId = async(req:Request, res:Response) => {
        // get productos from database
        const { id } = req.params;
        const producto = await AppDataSource.getRepository(Productos).findOneBy({id: parseInt(id)});
        // send the productos object
        if(producto){
            res.send(producto);
        }else{
            res.status(404).json({ message: 'Producto Not Found' });
        }
    }
    static edit = async(req:Request, res:Response) => {
        // update producto from database
        const { id } = req.params;
        const { nombre, precio } = req.body;
        const producto = await AppDataSource.getRepository(Productos).findOneBy({id: parseInt(id)});
        if (producto) {
            producto.nombre = nombre || producto.nombre;
            producto.precio = precio || producto.precio;
            producto.fechaEdicion = new Date();
            const updatedProducto = await AppDataSource.getRepository(Productos).save(producto);
            return res.status(200).json({message:updatedProducto});
        }
        return res.status(404).json({ message: 'Producto Not Found' });
    }

    static delete = async(req:Request, res:Response) => {
        // delete producto from database
        const { id } = req.params;
        const producto = await AppDataSource.getRepository(Productos).findOneBy({id: parseInt(id)});
        if (producto) {
            await AppDataSource.getRepository(Productos).remove(producto);
            return res.status(200).json({message:producto});
        }
        return res.status(404).json({ message: 'Producto Not Found' });
    }
    
}
