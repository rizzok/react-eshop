import styled from 'styled-components'
import Home from './Home'
import Todo from './Todo'
import Photos from './Photos'

const StyledMain = styled.main`
  margin: 1rem;
`;

export default function Main({ activeCategory }) {

  return (
    <StyledMain>
      {(activeCategory === 'home') && <Home />}
      {(activeCategory === 'todo') && <Todo />}
      {(activeCategory === 'photos') && <Photos />}
    </StyledMain>
  )
}
