import styled from "styled-components";
import GeradorDePacientes from "../Componentes/ControlePacientes/GeradorDePacientes";
import SideBarPacientes from "../Componentes/ControlePacientes/SideBarPacientes";

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
`
const ControlePacientes = () => { 
    return (
        <FlexBox>
            <SideBarPacientes/>
            <GeradorDePacientes/>
        </FlexBox>
    )
}

export default ControlePacientes;