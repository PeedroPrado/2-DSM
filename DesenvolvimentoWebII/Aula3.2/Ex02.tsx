import { CSSProperties, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <h4>Valor: {count}</h4>
      <div style={{ display: "flex" }}>
        <Button action={increment}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
            alt="Incrementar"
            style={iconStyle}
          />
          <span>Incrementar</span>
        </Button>
        <Button action={decrement}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            alt="Decrementar"
            style={iconStyle} />
          <span>Decrementar</span>
        </Button>
      </div>
    </>
  );
}
// Exercicio 02
function Button({action, children}: Props) {
  return <button onClick={action} style = {buttonStyle}>{children}</button>;
}

interface Props {
  action: () => void;
  children: React.ReactNode;
} // até aqui

const buttonStyle: CSSProperties = {
  backgroundColor: "#567196",
  color: "white",
  padding: "10px 20px",
  marginRight: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  display: "flex", // flexbox para alinhamento
  alignItems: "center", // alinha ícone e texto verticalmente
  gap: "8px", // espaçamento entre ícone e texto
  };
  const iconStyle: CSSProperties = {
  width: "20px",
  height: "20px",
  };
  
