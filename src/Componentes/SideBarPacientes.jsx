import ListaDePacientes from "./ListaDePacientes";
import SideBarDiv from "../Styled-Components/SideBarDiv";
import ControlesPaciente from "./ControlesPaciente";
const SideBarPacientes = () => {
  return (
    <SideBarDiv>
      <ListaDePacientes />
      <ControlesPaciente />
    </SideBarDiv>
  );
};

export default SideBarPacientes;
