import FormularioDeEvolucao from "../Componentes/ControleEvolucoes/FormularioDeEvolucao";
import SideBarEvolucoes from "../Componentes/ControleEvolucoes/SideBarEvolucoes";
import EvolucoesBox from "../Componentes/ControleEvolucoes/EvolucoesBox";
import { switcherContext } from "../Context/switcherContext";
import { selectedPatientContext } from "../Context/selectedPatientContext";
import { useState } from "react";
import DivControleDeEvolucoes from "../Styled-Components/DivControleDeEvolucoes";
import db from "../db/db";

const ControleEvolucoes = () => {
  const [switcher, setSwitcher] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState(db.pacientes[0].id)
  return (
    <DivControleDeEvolucoes>
      <selectedPatientContext.Provider value={{selectedPatient: selectedPatient,  setSelectedPatient: setSelectedPatient}}>
      <switcherContext.Provider value={{switcher: switcher, setSwitcher: setSwitcher}}>
        <SideBarEvolucoes />
        <EvolucoesBox />
      </switcherContext.Provider>
      <FormularioDeEvolucao />
      </selectedPatientContext.Provider>
    </DivControleDeEvolucoes>
  );
};

export default ControleEvolucoes;
