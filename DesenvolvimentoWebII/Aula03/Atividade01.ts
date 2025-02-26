// Importando a função 'useState' da biblioteca React para gerenciar o estado no componente.
import { useState } from "react";   

// Definindo a interface Person que descreve o tipo dos dados de uma pessoa, incluindo nome (string) e idade (string).
interface Person {    
    nome: string;  
    idade: string; 
}  

// O componente funcional principal da aplicação.
export default function App() {   
    // Definindo o estado para o nome e associando o valor inicial a uma string vazia.
    const [nome, setNome] = useState<string>("");   

    // Definindo o estado para a idade e associando o valor inicial a uma string vazia.
    const [idade, setIdade] = useState<string>("");

    // Definindo o estado para a lista de pessoas (um array de objetos do tipo Person).
    const [lista, setLista] = useState<Person[]>([]);

    // Função para salvar o nome e a idade na lista e limpar os campos de entrada.
    function handleSave() {     
        // Adiciona um novo item (nome, idade) à lista usando o spread operator e atualiza o estado da lista.
        setLista([...lista, { nome, idade }]);     
        
        // Limpa os campos de entrada após salvar os dados.
        setNome("");     
        setIdade("");   
    }

    // JSX que define a estrutura do componente, retornando os elementos HTML.
    return (     
        <div>       
            {/* Campo para inserir o nome */}
            <div>         
                <label htmlFor="name">Nome</label>    
                {/* Campo de entrada para o nome, com valor vinculado ao estado 'nome' */}
                <input id="name" value={nome} onChange={(e) => setNome(e.target.value)} />       
            </div>       

            {/* Campo para inserir a idade */}
            <div>         
                <label htmlFor="age">Idade</label>   
                {/* Campo de entrada para a idade, com valor vinculado ao estado 'idade' */}
                <input id="age" value={idade} onChange={(e) => setIdade(e.target.value)} />       
            </div>       

            {/* Botão para salvar o nome e a idade */}
            <button onClick={handleSave}>Salvar</button>        

            {/* Lista ordenada que exibe as pessoas cadastradas */}
            <ol>                    
                {/* Percorrendo a lista de pessoas e criando um item de lista para cada uma */}
                {lista.map((item, indice) => (             
                    <li key={indice}>{item.nome} - {item.idade}</li>  
                    // Cada item contém o nome e a idade da pessoa
                ))}                
            </ol>     
        </div>   
    ); 
}
