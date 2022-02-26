import FormularioDeEvolucao from '../Componentes/FormularioDeEvolucao'
import SideBarPacientes from '../Componentes/SideBarPacientes'
import DivControleDePacientes from '../Styled-Components/DivControleDePacientes'

const ControleDePaciente = () => {
    return (
        <DivControleDePacientes>
            <SideBarPacientes/>
            <FormularioDeEvolucao/>
        </DivControleDePacientes>
    )
}

export default ControleDePaciente;