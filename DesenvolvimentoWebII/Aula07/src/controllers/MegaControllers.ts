import { Request, Response } from "express";
import db from "./db";

export async function last(req:Request, res:Response){
    try{
        const result = await db.query("SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1");
        res.json(result.rows[0]);
    } catch(e: any){
        res.json({message: e.message});
    }
}