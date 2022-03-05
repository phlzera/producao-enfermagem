import ListaDePacientes from "./ListaDePacientes";
import SideBarDiv from "../Styled-Components/SideBarDiv";
import ControlesEvolucoes from "./ControlesEvolucoes";

const SideBarPacientes = () => {

  return (
    <SideBarDiv>
      <ListaDePacientes />
      <ControlesEvolucoes />
    </SideBarDiv>
  );
};

export default SideBarPacientes;
