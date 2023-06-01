import {
  FooterContainer,
  NavigationContainer,
  SocialLinksContainer,
} from "./styles";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <FooterContainer>
      <NavigationContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pessoa-usuaria">Pessoa Usuária</NavLink>
        <NavLink to="/profissional">Profissional</NavLink>
      </NavigationContainer>

      <SocialLinksContainer>
        <a href="">
          <FacebookLogo size={32} />
        </a>
        <a href="">
          <InstagramLogo size={32} />
        </a>
        <a href="">
          <LinkedinLogo size={32} />
        </a>
      </SocialLinksContainer>

      <span>Desafio Front-end Lacrei</span>
    </FooterContainer>
  );
}
