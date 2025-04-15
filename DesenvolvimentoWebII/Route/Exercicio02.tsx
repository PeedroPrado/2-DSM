import { createContext, useContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
export default function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Menu />
        <Rotas />
      </BrowserRouter>
    </LoginProvider>
  );
}
function Rotas() {
  const { logado } = useLogado();
  return logado ? <RotasNLogadas /> : <RotasLogadas />
}

// rotas acessiveis para usuarios logados
function RotasLogadas() {
  return (
    <Routes>
      <Route path="/Carro" element={<Carro />} />
      <Route path="/Moto" element={<Moto />} />
    </Routes>
  )
}
// rotas acessiveis para usuarios nao logado
function RotasNLogadas() {
  return (
    <Routes>
      <Route path="*" element={<Erro />} />
      <Route path="/Fruta" element={<Fruta />} />
      <Route path="/Legume" element={<Legume />} />
      <Route path="/Verdura" element={<Verdura />} />

    </Routes>
  );
}

function Menu() {
  const { logado, setLogado } = useLogado();
  return (
    <div>
        <button onClick={() => setLogado(!logado)}>
          {logado ? "Logout" : "Login"}
        </button>
        <Link to="/Fruta">Frutas</Link>
        <Link to="/Legume">Legumes</Link>
        <Link to="/Verdura">Verduras</Link>
        <Link to="/Carro">Carro</Link>
        <Link to="/Moto">Moto</Link>


      </div>
      );
}

      function Legume() {
  return (
      <div style={{ backgroundColor: "PeachPuff" }}>
        <div>Beterraba</div>
        <div>Cenoura</div>
      </div>
      );
}
      function Verdura() {
  return (
      <div style={{ backgroundColor: "palegreen" }}>
        <div>Alface</div>
        <div>Couve</div>
      </div>
      );
}
      function Fruta() {
  return (
      <div style={{ backgroundColor: "LemonChiffon" }}>
        <div>Laranja</div>
        <div>Manga</div>
      </div>
      );
}
      function Carro() {
  return (
      <div style={{ backgroundColor: "LightSkyBlue" }}>
        <div>Gol</div>
        <div>Uno</div>
      </div>
      );
  }
      function Moto() {
  return (
      <div style={{ backgroundColor: "Wheat" }}>
        <div>CG160</div>
        <div>DT180</div>
      </div>
      );
  }
      function Erro() {
  return <h3>Rota inexistente</h3>;
}
      interface ContextProps {
        logado: boolean;
setLogado: (value: boolean) => void;
}
      interface ChildrenProps {
        children: React.ReactNode;
}
      const LoginContext = createContext<ContextProps | null>(null);
      function LoginProvider({children}: ChildrenProps) {
const [logado, setLogado] = useState(false);
      return (<LoginContext.Provider value={{ logado, setLogado }}>
        {children}
      </LoginContext.Provider>
      );
  }
      function useLogado() {
  const context = useContext(LoginContext);
      if (!context) {
  throw new Error("useLogado deve ser usado dentro de um LoginProvider");
  }
      return context;
  }
