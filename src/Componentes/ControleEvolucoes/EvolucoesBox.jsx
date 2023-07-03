import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import {switcherContext} from '../../Context/switcherContext'
import db from "../../db/db"
import { selectedPatientContext } from "../../Context/selectedPatientContext";
const EvolucoesBox = () => {
  const switcherContxt = useContext(switcherContext);
  const {switcher} = switcherContxt;
  const selectedPatientContxt = useContext(selectedPatientContext)
  const {selectedPatient} = selectedPatientContxt

  return (
        <TableContainer
        hidden={switcher}
        style={{
          borderRadius: "15px",
          backgroundColor: "#B4BCB8",
          margin: "0px 5px 0px 0px",
          width: "16%",
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Funcionário</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              db.evolucoes.map( evolucao => {
                if(evolucao.idPaciente === selectedPatient) {
                  return(
                    <TableRow key={evolucao.ID}>
                      <TableCell key={evolucao.id}>
                        {
                          db.funcionarios.map( funcionario => {
                            let nome = ""
                            if(funcionario.id === evolucao.idAutor) {
                              nome = funcionario.nome;
                            }
                            return nome;
                          })
                        }
                      </TableCell>
                      <TableCell>
                        {evolucao.data}
                      </TableCell>
                    </TableRow>
                  )
                }
              })
            } 
          </TableBody>
        </Table>
      </TableContainer>
    
  );
};

export default EvolucoesBox;
