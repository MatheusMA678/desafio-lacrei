import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
  ButtonsContainer,
  HomeContainer,
  LeftContainer,
  TextContainer,
} from "./styles";

import HomeIllustration from "../../assets/illustration-home.svg";

const homeAnimationVariants = {
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

export function Home() {
  useEffect(() => {
    document.title = "Home | Desafio Lacrei";
  }, []);

  return (
    <HomeContainer
      variants={homeAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <LeftContainer>
        <TextContainer>
          <h1>Boas vindas a Lacrei Saúde</h1>

          <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        </TextContainer>

        <ButtonsContainer>
          <NavLink to={"/pessoa-usuaria"}>Pessoa Usuária</NavLink>
          <NavLink to={"/profissional"}>Profissional</NavLink>
        </ButtonsContainer>
      </LeftContainer>

      <img src={HomeIllustration} alt="Ilustração cartunesca de uma médica" />
    </HomeContainer>
  );
}
