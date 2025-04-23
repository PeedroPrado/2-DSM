import { useEffect, useState } from "react";
import { getRegioes, getUf } from "./services/ibge";
import { Regiao, Uf } from "./types";

export default function App() {
  const [regioes, setRegioes] = useState<Regiao[]>([])
  const [uf, setUf] = useState<Uf[]>([])


  useEffect(() => {
    obterRegioes();
  }, []);
  async function obterRegioes() {
    const res = await getRegioes();
    setRegioes(res);
  }

  async function obterUf(id: number) {
    const res = await getUf(id);
    setUf(res);
  }

  return <div><h1>Regiões: </h1><ol>
    {
      regioes.map((item, index) =>
        <li key={index} onClick={() => obterUf(item.id)}>{item.nome}</li>)
    }
  </ol>
  <h2>Estados: </h2>
    <ol>
      {
        uf.map((item, index) =>
          <li key={index} onClick={() => obterUf(item.id)}>{item.nome}</li>)
      }
    </ol>
  </div>
}
