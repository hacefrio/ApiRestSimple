import { Router } from "express";
import { OpinionesController } from "../controller/OpinionesController";
import { checkJwt } from "../middleware/jwt";



const router = Router();
checkJwt
router.post("/" ,checkJwt,OpinionesController.create);
router.get("/", checkJwt, OpinionesController.getAll);
router.get("/:id", checkJwt, OpinionesController.getById);
router.put("/:id", checkJwt, OpinionesController.edit);
router.delete("/:id", checkJwt, OpinionesController.delete);


export default router;
