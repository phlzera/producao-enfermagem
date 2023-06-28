import { Button } from "@mui/material";
import { useState } from "react";
import DivButtonFormulario from "../../Styled-Components/DivButtonFormulario";
import FormSinaisVitais from "../../Styled-Components/FormSinaisVitais";
import TextFieldSinaisVitais from "../../Styled-Components/TextFieldSinaisVitais";

const FormularioDeEvolucao = () => {
  const [form, setForm] = useState({
    sistolica: "",
    diastolica: "",
    pulso: "",
    saturacao: "",
    temperatura: "",
    evolucao: "",
  });
  
  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "sistolica": {
        setForm({ ...form, [name]: value });
        break;
      }
      case "diastolica": {
        setForm({ ...form, [name]: value });
        break;
      }
      case "pulso": {
        setForm({ ...form, [name]: value });
        break;
      }
      case "saturacao": {
        setForm({ ...form, [name]: value });
        break;
      }
      case "temperatura": {
        setForm({ ...form, [name]: value });
        break;
      }
      case "evolucao": {
        setForm({ ...form, [name]: value });
        break;
      }

      default: {
        break;
      }
    }
  }
  return (
    <FormSinaisVitais>
      <TextFieldSinaisVitais
        placeholder="Sistolica"
        name="sistolica"
        value={form.sistolica}
        onChange={handleChange}
      />
      <TextFieldSinaisVitais
        placeholder="Diastolica"
        name="diastolica"
        value={form.diastolica}
        onChange={handleChange}
      />
      <TextFieldSinaisVitais
        placeholder="Pulso"
        name="pulso"
        value={form.pulso}
        onChange={handleChange}
      />

      <TextFieldSinaisVitais
        placeholder="Saturacao"
        name="saturacao"
        value={form.saturacao}
        onChange={handleChange}
      />
      <TextFieldSinaisVitais
        placeholder="Temperatura"
        name="temperatura"
        value={form.temperatura}
        onChange={handleChange}
      />
      <TextFieldSinaisVitais
        placeholder="Evolua aqui"
        name="evolucao"
        multiline={true}
        minRows={10}
        fullWidth
        value={form.evolucao}
        onChange={handleChange}
      />
      <DivButtonFormulario>
        <Button type="submit" variant={"contained"} onSubmit={handleSubmit}>
          Enviar
        </Button>
      </DivButtonFormulario>
    </FormSinaisVitais>
  );
};

export default FormularioDeEvolucao;
