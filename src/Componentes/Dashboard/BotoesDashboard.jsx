import { Link } from "react-router-dom";
import CardDashBoard from "../../Styled-Components/CardDashBoard";
import DashBoardIcons from "../../Styled-Components/DashBoardIcons";
const iconeEvolucoes = require("../../icons/medical-history.png");
const iconePacientes = require("../../icons/paciente.png")
const iconeFuncionarios = require("../../icons/funcionarios.png")
const BotoesDashboard = () => {
  return (
    <>
      <Link to={"/evolucoes"} style={{ textDecoration: "none" }}>
        <CardDashBoard>
          <DashBoardIcons src={iconeEvolucoes} alt="Prancheta" />
          <h2>Controle de Evolucoes</h2>
        </CardDashBoard>
      </Link>
      <Link to={"/pacientes"} style={{ textDecoration: "none" }}>
        <CardDashBoard>
          <DashBoardIcons src={iconePacientes} alt="Prancheta" />
          <h2>Controle de Pacientes</h2>
        </CardDashBoard>
      </Link>
      <Link to={"/funcionarios"} style={{ textDecoration: "none" }}>
        <CardDashBoard>
          <DashBoardIcons src={iconeFuncionarios} alt="Prancheta" />
          <h2>Controle de Funcionarios</h2>
        </CardDashBoard>
      </Link>
    </>
  );
};

export default BotoesDashboard;
