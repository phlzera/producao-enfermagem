import { Link } from 'react-router-dom'
import CardDashBoard from '../Styled-Components/CardDashBoard'
import DashBoardIcons from '../Styled-Components/DashBoardIcons'
const iconePacientes = require('../icons/medical-history.png')

const BotoesDashboard = () => {
    return (
        <>
            <Link to={'/evolucoes'}>
                <CardDashBoard>
                    <DashBoardIcons src={iconePacientes} alt='Prancheta'/>
                    <h2>Controle de Pacientes</h2>
                </CardDashBoard>
            </Link>
            <Link to={'/evolucoes'}>
                <CardDashBoard>
                    <DashBoardIcons src={iconePacientes} alt='Prancheta'/>
                    <h2>Controle de Funcionarios</h2>
                </CardDashBoard>
            </Link>
        </>
    )
}

export default BotoesDashboard
