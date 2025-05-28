import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {cidade, incidencia} from "./controllers/consulta"
import router from "./routes/rotas";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(router);

app.get('/cidade', cidade);
app.get(`/cidade/:id`, incidencia)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});