import { useState } from "react";
import styled from "styled-components";
import Ball from "./Ball";

const Container = styled.div`
  background: #333;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  color: blue;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const Exercise1: React.FC = () => {
  const [count, setCount] = useState<number | "">("");
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateNumbers = (num: number) => {
    if (num > 0) {
      const randomNumbers = Array.from({ length: Math.min(num, 12) }, () =>
        Math.floor(Math.random() * 100)
      );
      setNumbers(randomNumbers.sort((a, b) => a - b));
    } else {
      setNumbers([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Verifica se o valor é um número válido e chama a função de geração
      const num = Number(count);
      if (!isNaN(num) && num > 0) {
        generateNumbers(num);
      }
    }
  };

  return (
    <Container>
      <Title>Exercício 1</Title>
      <Input
        type="number"
        value={count}
        onChange={(e) => {
          const value = e.target.value ? Number(e.target.value) : "";
          setCount(value);
        }}
        onKeyDown={handleKeyPress} // Evento que detecta o pressionamento de tecla
        placeholder="Quantidade de números"
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {numbers.map((num, index) => (
          <Ball key={index} number={num} color="blue" />
        ))}
      </div>
    </Container>
  );
};

export default Exercise1;
