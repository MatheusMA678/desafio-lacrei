import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 0 4rem;
  padding: 2rem 0 0.5rem 0;
  border-top: 1px solid ${(props) => props.theme.colors.lightGreen};

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.darkGray};
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  a {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.darkGray};

    text-decoration: none;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &.active {
      color: ${(props) => props.theme.colors.black};
      font-weight: 700;
    }
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.25rem;

  a {
    display: inline-block;
    color: ${(props) => props.theme.colors.green};
    text-decoration: none;
  }
`;
