import { MenuItem, Select } from "@mui/material";
import styled from 'styled-components'

const FlexBox = styled.div`
  padding: 7px;
  background-color:rgba(136, 150, 150, 0.5);
  border-radius: 15px;
  width: 10%;
  margin: 0px 5px 0px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SideBarFuncionarios = () => {
  return (
    <>
      <FlexBox>
        <Select name="ListaDeFuncionarios" defaultValue={0}>
          <MenuItem value={0}>Novo Funcionario...</MenuItem>
          <MenuItem value={10}>Leonardo</MenuItem>
          <MenuItem value={20}>Joao</MenuItem>
          <MenuItem value={30}>Gustavo</MenuItem>
        </Select>
      </FlexBox>
    </>
  );
};

export default SideBarFuncionarios;
