import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const EvolucoesBox = () => {
    return ( 
    <>
        <TableContainer component={Paper} style={{margin: '0px 5px 0px 0px', width: '20%'}} >
            <Table size="small">
                <TableHead>
                    <TableRow >
                        <TableCell>Funcionário</TableCell>
                        <TableCell>Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableCell>Pablo</TableCell>
                        <TableCell>19/2/22</TableCell>
                </TableBody>
            </Table>
        </TableContainer>
    </>
    )
}

export default EvolucoesBox;