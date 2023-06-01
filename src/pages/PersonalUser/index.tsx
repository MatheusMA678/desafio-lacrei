import { useEffect } from "react";

import { LeftContainer, PersonalUserContainer } from "./styles";

import PersonalUserIllustration from "../../assets/illustration-personal-user.svg";

const personalUserAnimationVariants = {
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

export function PersonalUser() {
  useEffect(() => {
    document.title = "Pessoa Usuária | Desafio Lacrei";
  }, []);

  return (
    <PersonalUserContainer
      variants={personalUserAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <LeftContainer>
        <h1>Pessoa Usuária</h1>

        <p>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </p>
      </LeftContainer>

      <img
        src={PersonalUserIllustration}
        alt="Ilustração catunesca de 3 pessoas utilizando seus smartphones"
      />
    </PersonalUserContainer>
  );
}
