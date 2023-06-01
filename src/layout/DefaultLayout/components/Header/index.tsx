import { HeaderContainer, NavigationContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <span>Lacrei</span>

      <NavigationContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pessoa-usuaria">Pessoa Usuária</NavLink>
        <NavLink to="/profissional">Profissional</NavLink>
      </NavigationContainer>
    </HeaderContainer>
  );
}
