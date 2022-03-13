import styled from 'styled-components'

const ButtonStyled = styled.button`
  all: unset;
  border: solid 1px black;
  cursor: pointer;
`;

export default function Button({children, link = '#'}) {
  return (
    <ButtonStyled href={link} >
      {children}
    </ButtonStyled>
  )
}