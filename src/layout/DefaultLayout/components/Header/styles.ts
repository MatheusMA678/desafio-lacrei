import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3.75rem;
  background-color: ${(props) => props.theme.colors.gray};
  padding: 0 4rem;

  span {
    color: ${(props) => props.theme.colors.green};
    font-size: 2rem;
    font-weight: 700;
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;
    padding: 0.5rem 0;

    height: 5rem;

    span {
      font-size: 1.5rem;
    }
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  a {
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.black};

    text-decoration: none;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &.active {
      color: ${(props) => props.theme.colors.green};
    }
  }
`;
