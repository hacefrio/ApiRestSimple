import { Router } from "express";
import { productosController } from "../controller/productosController";



const router = Router();

router.post("/", productosController.new);
router.get("/", productosController.get);
router.get("/:id", productosController.getFilterId);
router.put("/:id", productosController.edit);
router.delete("/:id", productosController.delete);

export default router;
