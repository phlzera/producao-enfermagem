import { TextField } from "@mui/material"
import { useState } from "react"

const FormularioDeEvolucao = () => {
    const [form, setForm] = useState({
        sistolica: "",
        diastolica: "",
        pulso: "",
        saturacao: "",
        temperatura: "",
        evolucao: ""
    })
    
    function handleChange(event) {
        const {name,value} = event.target;
        switch(name) {
            case 'sistolica': {
                setForm({...form, [name]:value})
                break;
            }
            case 'diastolica': {
                setForm({...form, [name]:value})
                break;
            }
            case 'pulso': {
                setForm({...form, [name]:value})
                break;
            }
            case 'saturacao': {
                setForm({...form, [name]:value})
                break;
            }
            case 'temperatura': {
                setForm({...form, [name]:value})
                break;
            }
            case 'evolucao': {
                setForm({...form, [name]:value})
                break;
            }

            default: { break;}
        }
    }
    return(
        <form>
            <TextField 
            placeholder="Sistolica"
            name="sistolica"
            value={form.sistolica}
            onChange={handleChange}
            />
            <TextField 
            placeholder="Diastolica"
            name="diastolica" 
            value={form.diastolica}
            onChange={handleChange}
            />
            <TextField 
            placeholder="Pulso"
            name="pulso"
            value={form.pulso}
            onChange={handleChange}
            />
            
            <TextField 
            placeholder="Saturacao"
            name="saturacao" 
            value={form.saturacao}
            onChange={handleChange}
            />
            <TextField 
            placeholder="Temperatura"
            name="temperatura"
            value={form.temperatura}
            onChange={handleChange}
            />
            <TextField 
            placeholder="Evolua aqui"
            name="evolucao"
            value={form.evolucao}
            onChange={handleChange}
            />
        </form>

    )
}

export default FormularioDeEvolucao