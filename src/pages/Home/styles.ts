import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled(motion.main)`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 4rem;
  padding-bottom: 1rem;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  @media only screen and (max-width: 550px) {
    padding: 1.5rem;
    padding-top: 2rem;

    img {
      width: 100%;
    }
  }
`;

export const LeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  max-width: 450px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 3rem;
    line-height: 4rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.darkGray};
  }

  @media only screen and (max-width: 550px) {
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    height: 3rem;
    width: 12rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    border-radius: 0.5rem;

    font-size: 1.125rem;
    font-weight: 700;

    background-color: ${(props) => props.theme.colors.green};
    color: white;

    box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  a:nth-child(even) {
    background-color: white;
    border: 2px solid ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.green};
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    a {
      width: 100%;
    }
  }
`;
