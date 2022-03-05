import {Button, MenuItem, Select, TextField } from "@mui/material";
import styledEngine from "@mui/styled-engine";
import styled from "styled-components";

const Form = styled.form`
    background-color:rgba(136, 150, 150, 0.5);
    padding: 5px 5px 10px 5px;
    border-radius: 15px;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 40%;
`

const StyledTextField = styledEngine(TextField)`
    width: 40%;
    margin: 0px 5px 8px 0px;
`

const SubTitle = styled.h2`
    width: 100%;
    color: black;
`

const DivCenterButton = styled.div`
    width: 100%;
`
const GeradorDeFuncionarios = () => {
    return (
        <>
        <Form>
            <SubTitle>Informacoes Pessoais</SubTitle>
            <StyledTextField label="Nome"/>
            <StyledTextField label="Sobrenome"/>
            <StyledTextField label="Registro COREN"/>
            <SubTitle>Informacoes De Conta</SubTitle>
            <Select defaultValue={3} style= {{margin: "0px 5px 8px 0px"}}>
                <MenuItem value={0}>Cuidador(a)</MenuItem>
                <MenuItem value={1}>Tec. Em Enfermagem</MenuItem>
                <MenuItem value={2}>Enfermeiro</MenuItem>
                <MenuItem value={3}>Selecione o cargo</MenuItem>
            </Select>
            <DivCenterButton/> {/* So para deixar o TextField abaixo centralizado no flexbox*/}
            <StyledTextField label="Usuario"/>
            <StyledTextField label="Senha"/>
            <p>Nao compartilhe sua senha com ninguém!</p>
            <DivCenterButton/> {/* So para deixar o botão abaixo centralizado no flexbox*/}
            <Button variant={'contained'} type='submit'>Confirmar</Button>
        </Form>
        </>
    )
}

export default GeradorDeFuncionarios;