import { BrowserRouter, Link, Route, Routes } from "react-router";
export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Rotas />
    </BrowserRouter>
  );
}
function Rotas() {
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
  return (
    <div>
      <Link to="/Fruta">Frutas</Link>
      <Link to="/Legume">Legumes</Link>
      <Link to="/Verdura">Verduras</Link>
      
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
function Erro() {
  return <h3>Rota inexistente</h3>;
}
  
