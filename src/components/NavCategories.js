import styled from 'styled-components'
import Button from './Button';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export default function NavCategories() {
  return (
    <Nav>
      <Button>Click me!</Button>
      <Button>Click me!</Button>
      <Button>Click me!</Button>
    </Nav>
  )
}