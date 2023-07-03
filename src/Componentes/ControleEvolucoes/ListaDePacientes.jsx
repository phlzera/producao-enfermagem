import { MenuItem, Select } from "@mui/material";
import db from "../../db/db"
import { selectedPatientContext } from "../../Context/selectedPatientContext";
import { useContext } from "react";

const ListaDePacientes = () => {
  const selectedPatientContxt = useContext(selectedPatientContext)
  const {setSelectedPatient} = selectedPatientContxt
  return (
    <>
      <Select
        style={{ margin: "0px 0px 5px 0px" }}
        onChange={(event) => {
          setSelectedPatient(event.target.value)
        }}
        name="listaDePacientes"
        defaultValue={db.pacientes[0].id}
      >
        {db.pacientes.map( paciente => {
          return (<MenuItem value={paciente.id} key={paciente.id}>{paciente.nome}</MenuItem>)
        })}
      </Select>
    </>
  );
};

export default ListaDePacientes;
