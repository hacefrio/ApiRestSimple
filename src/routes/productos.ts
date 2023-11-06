import { Router } from "express";
import { productosController } from "../controller/productosController";
import { checkJwt } from "../middleware/jwt";



const router = Router();
checkJwt
router.post("/" ,checkJwt,productosController.new);
router.get("/" ,checkJwt,productosController.get);
router.get("/:id", checkJwt ,productosController.getFilterId);
router.put("/:id", checkJwt ,productosController.edit);
router.delete("/:id",checkJwt , productosController.delete);

export default router;
