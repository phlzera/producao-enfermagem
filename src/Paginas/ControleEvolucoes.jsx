import FormularioDeEvolucao from "../Componentes/FormularioDeEvolucao";
import SideBarEvolucoes from "../Componentes/SideBarEvolucoes";
import EvolucoesBox from "../Componentes/EvolucoesBox";
import { switcherContext } from "../Context/switcherContext";
import { useState } from "react";
import DivControleDeEvolucoes from "../Styled-Components/DivControleDeEvolucoes";

const ControleEvolucoes = () => {
  const [switcher, setSwitcher] = useState(true)
  
  return (
    <DivControleDeEvolucoes>
      <switcherContext.Provider value={{switcher: switcher, setSwitcher: setSwitcher}}>
        <SideBarEvolucoes />
        <EvolucoesBox />
      </switcherContext.Provider>
      <FormularioDeEvolucao />
    </DivControleDeEvolucoes>
  );
};

export default ControleEvolucoes;
