import styled from 'styled-components';
import NavCategories from './NavCategories';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const StyledH1 = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export default function Header({ onChangeActiveCategory }) {  
  return (
    <StyledHeader>
      <StyledH1>React App</StyledH1>
      <NavCategories onChangeActiveCategory={onChangeActiveCategory} />
    </StyledHeader>
  )
}
