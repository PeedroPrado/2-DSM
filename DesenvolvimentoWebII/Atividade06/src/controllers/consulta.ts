import { Request, Response } from "express";
import  pool  from "../controllers/db";

export async function cidade(req: Request, res: Response) {
    try {
        const result = await pool.query(
            "SELECT * FROM cidades"
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Erro ao buscar as cidades:", error);
        res.status(500).json({ error: "Erro ao buscar as cidades" });
    }
}

export async function incidencia(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const result = await pool.query(
           "SELECT * FROM cidades WHERE id = $1",[id]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao buscar as incidências:", error);
        res.status(500).json({ error: "Erro ao buscar as incidências:" });
    }
}