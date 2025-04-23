export interface Regiao{
    id: number;
    nome: string;
    sigla: string;
}

export interface Uf{
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
}