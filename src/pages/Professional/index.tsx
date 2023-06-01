import { LeftContainer, ProfessionalContainer } from "./styles";

import { useEffect } from "react";
import ProfessionalIllustration from "../../assets/illustration-profissional.svg";

const professionalAnimationVariants = {
  initial: {
    opacity: 0,
    y: 25,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    y: 25,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export function Professional() {
  useEffect(() => {
    document.title = "Profissional | Desafio Lacrei";
  }, []);

  return (
    <ProfessionalContainer
      variants={professionalAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <LeftContainer>
        <h1>Profissional</h1>

        <p>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </p>
      </LeftContainer>

      <img
        src={ProfessionalIllustration}
        alt="4 pessoas médicas e 1 enfermeira conversando"
      />
    </ProfessionalContainer>
  );
}
