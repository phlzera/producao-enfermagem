import FormularioDeEvolucao from '../Componentes/FormularioDeEvolucao'
import SideBarPacientes from '../Componentes/SideBarPacientes'
import DivControleDePacientes from '../Styled-Components/DivControleDePacientes'
import EvolucoesBox from '../Componentes/EvolucoesBox'

const ControleDePaciente = () => {
    return (
        <DivControleDePacientes>
            <SideBarPacientes/>
            <EvolucoesBox/>
            <FormularioDeEvolucao/>
        </DivControleDePacientes>
    )
}

export default ControleDePaciente;