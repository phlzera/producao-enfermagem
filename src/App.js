import { BrowserRouter, Routes, Route } from "react-router-dom";
import ControleEvolucoes from "./Paginas/ControleEvolucoes";
import Dashboard from "./Paginas/Dashboard";
import TelaLogin from "./Paginas/TelaLogin";
import GlobalStyle from "./Styled-Components/GlobalStyle";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/evolucoes" element={<ControleEvolucoes />} />
        <Route path="/pacientes" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
