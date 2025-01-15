import { Router } from "express";

import * as HomeController from "../controllers/homeController";
import * as InfoController from "../controllers/infoController";
import * as UserContoller from "../controllers/userController";

const router = Router();

router.get("/", HomeController.home);

router.get("/contato", InfoController.contato);
router.get("/sobre", InfoController.sobre);

router.get("/nome", UserContoller.nome);
router.get("/idade", UserContoller.idadeForm);
router.post("/idade-resultado", UserContoller.idadeAction);

export default router;
