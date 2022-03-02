import FormularioDeEvolucao from "../Componentes/FormularioDeEvolucao";
import SideBarPacientes from "../Componentes/SideBarPacientes";
import DivControleDePacientes from "../Styled-Components/DivControleDePacientes";
import EvolucoesBox from "../Componentes/EvolucoesBox";
import { EvolucoesBoxContext } from "../Context/EvolucoesBoxContext";

const ControleDePaciente = () => {
  return (
    <DivControleDePacientes>
      <EvolucoesBoxContext.Provider value={{ valores: [true, false] }}>
        <SideBarPacientes />
        <EvolucoesBox />
      </EvolucoesBoxContext.Provider>
      <FormularioDeEvolucao />
    </DivControleDePacientes>
  );
};

export default ControleDePaciente;
