class Veiculo {
    id: number;
    marca: string;
    modelo: string;
    ano: number = new Date().getFullYear();;

    constructor(id:number, marca: string, modelo: string, ano?: number){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        if(ano!=undefined){
            this.ano = ano; 
        }
    }
}

export default Veiculo
