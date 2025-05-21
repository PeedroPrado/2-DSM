import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import mega from "./routes/mega";

dotenv.config();

const app = express();

app.use(cors());

const Port = process.env.PORT;

app.listen(Port, function(){
    console.log(`Rodando em http://localhost:${Port}`);
});
app.use(mega);