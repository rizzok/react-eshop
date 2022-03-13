import { fetchDatas } from './helpers/functions';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;
const ContentWrap = styled.div`
  padding-bottom: 5rem;
`;

export default function App() {

  fetchDatas('https://jsonplaceholder.typicode.com/todos?_limit=10')
  
  return (
    <PageContainer>
      <ContentWrap>
        <Header/>
        <Main>
          <h2>Main</h2>
        </Main>
      </ContentWrap>
      <Footer/>
    </PageContainer>
  );
}
