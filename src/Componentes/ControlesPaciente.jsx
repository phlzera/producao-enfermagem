import { useContext, useState } from "react";
import { EvolucoesBoxContext } from "../Context/EvolucoesBoxContext";
import ButtonControlePaciente from "../Styled-Components/ButtonControlePaciente";

const ControlesPaciente = () => {
  const [switcher, setSwitcher] = useState(true);
  const switcherContext = useContext(EvolucoesBoxContext);
  function handleClick(event) {
    setSwitcher((prevState) => setSwitcher(!prevState));
    switcherContext.switch = switcher;
  }

  return (
    <>
      <ButtonControlePaciente
        onClickCapture={handleClick}
        hiddentype={"button"}
        variant={"contained"}
      >
        Evolucoes
      </ButtonControlePaciente>
    </>
  );
};

export default ControlesPaciente;
