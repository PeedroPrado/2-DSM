import { Regiao, Uf } from "../types";
import api from "./api";


export async function getRegioes(): Promise <Regiao[]>{
    const {data} = await api.get<Regiao[]>("/regioes");
    return data;
}

export async function getUf(id:number): Promise<Uf[]>{
    const {data} = await api.get<Uf[]>(`/regioes/${id}/estados`);
    return data;
}