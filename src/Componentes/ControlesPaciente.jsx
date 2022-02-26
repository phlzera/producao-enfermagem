import ButtonControlePaciente from "../Styled-Components/ButtonControlePaciente";

const ControlesPaciente = () => {
    return(
        <>
            <ButtonControlePaciente type={"button"} variant={'contained'}>Evolucoes</ButtonControlePaciente>
            <ButtonControlePaciente type={"button"} variant={'contained'}>Inserir</ButtonControlePaciente>
            <ButtonControlePaciente type={"button"} variant={'contained'}>Deletar</ButtonControlePaciente>
        </>

        )
}

export default ControlesPaciente;