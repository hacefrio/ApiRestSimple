import { Router } from "express";
import productos from "./productos";
import users from "./users";
import auth from "./aut";
import peliculas from "./Peliculas";
import  opiniones  from "./Opiniones";
const routes = Router();

routes.use('/productos',productos)
routes.use('/users',users)
routes.use('/auth',auth)
routes.use('/peliculas',peliculas)
routes.use('/opiniones',opiniones)


export default routes;