import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Styled-Components/LoginForm";
import LoginTextField from "../Styled-Components/LoginTextField";
const FormularioLogin = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({ usuario: "", senha: "" });

  function handleSubmit(event) {
    event.preventDefault();
    if (form.usuario === "admin" && form.senha === "admin") {
      console.log("true");
      return navigate("/dashboard");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "usuario": {
        setForm({ ...form, [name]: value });
        break;
      }
      case "senha": {
        setForm({ ...form, [name]: value });
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <h1>Login</h1>
      <LoginTextField
        value={form.usuario}
        name="usuario"
        type="text"
        onChange={handleChange}
      />
      <LoginTextField
        value={form.senha}
        name="senha"
        type="text"
        onChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Enviar
      </Button>
    </LoginForm>
  );
};

export default FormularioLogin;
