import FormularioDeEvolucao from "../Componentes/ControleEvolucoes/FormularioDeEvolucao";
import SideBarEvolucoes from "../Componentes/ControleEvolucoes/SideBarEvolucoes";
import EvolucoesBox from "../Componentes/ControleEvolucoes/EvolucoesBox";
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
