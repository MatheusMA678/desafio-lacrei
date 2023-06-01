import styled from "styled-components";
import { motion } from "framer-motion";

export const ProfessionalContainer = styled(motion.main)`
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
  gap: 2rem;

  max-width: 550px;

  h1 {
    font-size: 3rem;
    line-height: 4rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.darkGray};

    border-left: 5px solid ${(props) => props.theme.colors.green};
    padding-left: 1.5rem;
  }
`;
