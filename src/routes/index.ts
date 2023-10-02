import { Router } from "express";
import productos from "./productos";
import user from "./user";
import aut from "./aut";

const routes = Router();

routes.use('/productos',productos)
routes.use('/user',user)
routes.use('/aut',aut)


export default routes;