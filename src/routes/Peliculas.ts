import { Router } from "express";
import { PeliculasController } from "../controller/PeliculasController";
import { checkJwt } from "../middleware/jwt";



const router = Router();
checkJwt
router.post("/" ,PeliculasController.create);
router.get("/", checkJwt, PeliculasController.getAll);
router.get("/:id", checkJwt, PeliculasController.getById);
router.put("/:id", checkJwt, PeliculasController.edit);
router.delete("/:id", checkJwt, PeliculasController.delete);


export default router;
