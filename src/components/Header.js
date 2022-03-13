import styled from 'styled-components';
import NavCategories from './NavCategories';

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const HeaderTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderTitle>React App</HeaderTitle>
      <NavCategories/>
    </HeaderStyled>
  )
}
