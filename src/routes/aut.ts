import { Router } from "express";
import AutController from "../controller/AutController";


const routes = Router();

routes.post('/login',AutController.login)


export default routes;