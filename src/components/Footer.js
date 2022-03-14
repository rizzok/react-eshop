import styled from "styled-components";
import Timer from "./Timer";

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & h5 {
    font-weight: bold;
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <Timer/>
    </FooterStyled>
  )
}

export default Footer;