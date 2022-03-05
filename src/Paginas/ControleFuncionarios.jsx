import styled from "styled-components";
import GeradorDeFuncionarios from "../Componentes/ControleFuncionarios/GeradorDeFuncionarios";
import SideBarFuncionarios from "../Componentes/ControleFuncionarios/SideBarFuncionarios";

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
`
const ControleFuncionarios = () => { 
    return (
        <FlexBox>
            <SideBarFuncionarios/>
            <GeradorDeFuncionarios/>
        </FlexBox>
    )
}

export default ControleFuncionarios;