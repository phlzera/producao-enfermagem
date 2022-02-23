import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const FormularioLogin = () => {
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function handleChange(event) {
        const {name, value} = event.target
        switch(name) {
            case 'usuario': {
                setUsuario(value)
                break;
            }
            case 'senha': {
                setSenha(value);
                break;
            }
        }
        
    }

    return (
        <form>
            <TextField
            value={usuario}
            name="usuario"
            type="text"
            onChange={handleChange}
            />    
            <TextField
            value={senha}
            name="senha"
            type="password"
            onChange={handleChange}
            />
            <Button variant='contained'>Enviar</Button>
        </form>
    )
}

export default FormularioLogin