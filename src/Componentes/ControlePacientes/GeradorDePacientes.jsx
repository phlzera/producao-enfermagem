import {Button, TextField } from "@mui/material";
import styledEngine from "@mui/styled-engine";
import styled from "styled-components";

const Form = styled.form`
    background-color:rgba(136, 150, 150, 0.5);
    border-radius: 15px;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 40%;
`

const StyledTextField = styledEngine(TextField)`
    margin: 0px 5px 8px 0px;
`

const SubTitle = styled.h2`
    width: 100%;
    color: black;
`

const DivCenterButton = styled.div`
    width: 100%;
`
const GeradorDePacientes = () => {
    return (
        <>
        <Form>
            <SubTitle>Informações Do Paciente</SubTitle>
                <StyledTextField label={'Nome'}/>
                <StyledTextField label={'Sobrenome'}/>
                <StyledTextField label={'Data de Nascimento'}/>
                <StyledTextField label={'RG/CPF'}/>
            <SubTitle>Informações Do Responsável</SubTitle>
                <StyledTextField label={'Nome'}/>
                <StyledTextField label={'Sobrenome'}/>
                <StyledTextField label={'Data de Nascimento'}/>
                <StyledTextField label={'RG/CPF'}/>
            <SubTitle>Endereço do Responsável</SubTitle>
                <StyledTextField label={'Cidade'}/>
                <StyledTextField label={'Bairro'}/>
                <StyledTextField label={'Rua'}/>
                <StyledTextField label={'Número'}/>
            <SubTitle>Número do Responsável</SubTitle>
                <StyledTextField style={{width: '10%'}} label={'DD'}/>
                <StyledTextField label={'Número'}/>
            <DivCenterButton/> {/* So para deixar o botão abaixo centralizado no flexbox*/}
            <Button variant={'contained'} type='submit'>Confirmar</Button>
        </Form>
        </>
    )
}

export default GeradorDePacientes;