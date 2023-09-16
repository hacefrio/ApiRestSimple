import { Router } from "express";
import productos from "./productos";


const routes = Router();

routes.use('/productos',productos)


export default routes;