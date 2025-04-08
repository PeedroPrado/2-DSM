// Exercício 1

import { useState, useEffect } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(
    function(){
      const tempName = localStorage.getItem("name");
      if( tempName ){
        setName(tempName);
      }
      const tempAge = localStorage.getItem("age");
      if( tempAge ){
        setAge(tempAge);
      }
    },
    [] // montagem do componente App
  );

  useEffect(
    function(){
      localStorage.setItem("name", name);
      localStorage.setItem("age", age);
    },
    [name,age]
  );

  return (
    <>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Idade</label>
        <input id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>Nome: {name}</div>
      <div>Idade: {age}</div>
    </>
  );
}

