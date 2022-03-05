import { Link } from "react-router-dom";
import CardDashBoard from "../../Styled-Components/CardDashBoard";
import DashBoardIcons from "../../Styled-Components/DashBoardIcons";
const iconePacientes = require("../../icons/medical-history.png");

const BotoesDashboard = () => {
  return (
    <>
      <Link to={"/evolucoes"} style={{ textDecoration: "none" }}>
        <CardDashBoard>
          <DashBoardIcons src={iconePacientes} alt="Prancheta" />
          <h2>Controle de Evolucoes</h2>
        </CardDashBoard>
      </Link>
      <Link to={"/pacientes"} style={{ textDecoration: "none" }}>
        <CardDashBoard>
          <DashBoardIcons src={iconePacientes} alt="Prancheta" />
          <h2>Controle de Pacientes</h2>
        </CardDashBoard>
      </Link>
    </>
  );
};

export default BotoesDashboard;
