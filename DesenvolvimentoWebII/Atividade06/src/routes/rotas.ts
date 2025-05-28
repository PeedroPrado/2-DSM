import {Router} from 'express'
import {cidade, incidencia} from "../controllers/consulta"

const router = Router();

router.get("/cidade", cidade);
router.get("/cidade/:id", incidencia);

export default router