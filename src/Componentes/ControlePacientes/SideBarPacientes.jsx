import { MenuItem, Select } from "@mui/material";
import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  background-color:rgba(136, 150, 150, 0.5);
  border-radius: 15px;
  width: 10%;
  height: 100%;
  margin: 0px 5px 0px 0px;

`;

const SideBarPacientes = () => {
  return (
    <>
      <FlexBox>
        <Select name="ListaDePacientes" defaultValue={10}>
          <MenuItem value={0}>Novo Paciente...</MenuItem>
          <MenuItem value={10}>Roberto</MenuItem>
          <MenuItem value={20}>Oliveira</MenuItem>
          <MenuItem value={30}>Pablo</MenuItem>
        </Select>
      </FlexBox>
    </>
  );
};

export default SideBarPacientes;
