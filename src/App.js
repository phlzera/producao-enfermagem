import { BrowserRouter, Routes, Route } from "react-router-dom";
import ControleEvolucoes from "./Paginas/ControleEvolucoes";
import ControleFuncionarios from "./Paginas/ControleFuncionarios";
import ControlePacientes from "./Paginas/ControlePacientes";
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
        <Route path="/pacientes" element={<ControlePacientes/>} />
        <Route path="/funcionarios" element={<ControleFuncionarios/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
