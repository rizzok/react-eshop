import styled from 'styled-components'

const MainStyled = styled.main`
  margin: 0 1rem;
`;

export default function Main({children}) {
  return (
    <MainStyled>
      {children}
    </MainStyled>
  )
}
