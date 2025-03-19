import { useState } from "react";
import styled from "styled-components";
import Ball from "./Ball";

const Container = styled.div`
  background: #444;
  padding: 10px;
  border-radius: 10px;
`;

const Title = styled.h3`
  color: red;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const Exercise2: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addNumber = (value: string) => {
    const num = Number(value);
    if (!isNaN(num) && num >= 0) {
      setNumbers((prev) => {
        const newNumbers = [...prev, num];
        return newNumbers.length > 12 ? newNumbers.slice(1) : newNumbers;
      });
      setInputValue(""); // Limpa o input após adicionar
    }
  };

  const handleRightClick = (index: number) => {
    setNumbers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>Exercício 2</Title>
      <Input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addNumber(inputValue);
          }
        }}
        placeholder="Digite um número"
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {numbers.map((num, index) => (
          <Ball key={index} number={num} color="red" onRightClick={() => handleRightClick(index)} />
        ))}
      </div>
    </Container>
  );
};

export default Exercise2;
