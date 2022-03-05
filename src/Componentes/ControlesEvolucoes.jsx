import { useContext } from "react";
import { switcherContext } from "../Context/switcherContext";
import ButtonControleEvolucoes from "../Styled-Components/ButtonControleEvolucoes";

const ControlesEvolucoes = () => {
  const switcherContxt = useContext(switcherContext)
  
  function handleClick(event) {
    const {switcher, setSwitcher} = switcherContxt;
    setSwitcher(!switcher);
  }

  return (
    <>
        <ButtonControleEvolucoes
        onClick={handleClick}
        hiddentype={"button"}
        variant={"contained"}
      >
        Evolucoes
      </ButtonControleEvolucoes>
    </>
  );
};

export default ControlesEvolucoes;
