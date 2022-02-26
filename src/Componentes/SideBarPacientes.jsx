import ListaDePacientes from "./ListaDePacientes";
import SideBarDiv from "../Styled-Components/SideBarDiv";
import ControlesPaciente from "./ControlesPaciente";
const SideBarPacientes = () => {
    return(
        <SideBarDiv style={{backgroundColor: "rgba(136,150,150,0.5)", padding: "15px", borderRadius: "15px"}}>
            <ListaDePacientes/>
            <ControlesPaciente/>
        </SideBarDiv>
    )
}

export default SideBarPacientes;