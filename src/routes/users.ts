import { Router } from "express";
import { UserController } from "../controller/UserController";
import { checkJwt } from "../middleware/jwt";




const router = Router();

router.post("/", UserController.add);
router.get("/:id", checkJwt, UserController.getById);
router.get("/", checkJwt, UserController.get);
router.put("/:id", checkJwt, UserController.edit);
router.delete("/:id", checkJwt, UserController.delete);

export default router;
