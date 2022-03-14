import styled from 'styled-components'
import Button from './Button';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export default function NavCategories({ onChangeActiveCategory }) {
  return (
    <StyledNav>
      <Button name="home" onChangeActiveCategory={onChangeActiveCategory}>Home</Button>
      <Button name="todo" onChangeActiveCategory={onChangeActiveCategory}>Todo List</Button>
      <Button name="photos" onChangeActiveCategory={onChangeActiveCategory}>Photos</Button>
    </StyledNav>
  )
}
