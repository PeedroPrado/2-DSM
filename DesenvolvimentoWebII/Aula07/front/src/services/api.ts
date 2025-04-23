import axios from "axios";

export default axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
    headers:{
        "Content-Type": "Application/json"
    }
});