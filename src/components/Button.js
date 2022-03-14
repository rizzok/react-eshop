import styled from 'styled-components'

const ButtonStyled = styled.button`
  all: unset;
  border: solid 1px black;
  cursor: pointer;
  margin: 0 10px;
  padding: 6px 8px;
  border: solid 2px black;
  border-radius: 7px;
  font-weight: bold;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default function Button({children, link = '#'}) {
  return (
    <ButtonStyled href={link} >
      {children}
    </ButtonStyled>
  )
}
