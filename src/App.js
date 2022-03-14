import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;

  background-color: #1a1a1a;
  color: #f1f1f1;
`;
const ContentWrap = styled.div`
  height: 100%;
  padding-bottom: 5rem;
`;

export default function App() {
  const [activeCategory, setActiveCategory] = useState('home')

  function handleChangeCategory(name) {
    setActiveCategory(name)
  }
  
  return (
    <PageContainer>
      <ContentWrap>
        <Header onChangeActiveCategory={handleChangeCategory} />
        <Main activeCategory={activeCategory} />
      </ContentWrap>
      <Footer />
    </PageContainer>
  );
}
