import { MenuItem, Select } from "@mui/material"

const ListaDePacientes = () => {
    return(
    <>
    <Select
    style={{margin: "0px 0px 5px 0px"}}
    name='listaDePacientes'
    defaultValue={10}
    >
        <MenuItem value={0}>Antonio</MenuItem>
        <MenuItem value={10}>Roberto</MenuItem>
        <MenuItem value={20}>Oliveira</MenuItem>
        <MenuItem value={30}>Pablo</MenuItem>
    </Select>
    </>
        )

}

export default ListaDePacientes