import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { EvolucoesBoxContext } from "../Context/EvolucoesBoxContext";
const EvolucoesBox = () => {
  return (
    <TableContainer
      hidden={EvolucoesBox}
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
          <TableRow>
            <TableCell>Pablo</TableCell>
            <TableCell>19/2/22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pablo</TableCell>
            <TableCell>19/2/22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pablo</TableCell>
            <TableCell>19/2/22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pablo</TableCell>
            <TableCell>19/2/22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pablo</TableCell>
            <TableCell>19/2/22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pablo</TableCell>
            <TableCell>19/2/22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pablo</TableCell>
            <TableCell>19/2/22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pablo</TableCell>
            <TableCell>19/2/22</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EvolucoesBox;
