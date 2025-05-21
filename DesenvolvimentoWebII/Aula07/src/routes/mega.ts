import { Router } from "express";
import {last} from "../controllers/MegaControllers";


const routes = Router();
routes.get("/", last);

export default routes;