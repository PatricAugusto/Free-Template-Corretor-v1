import styled from 'styled-components';
import { HeroSection } from './components/HeroSection'; 

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto; /* Centraliza o container */
  padding: 0 20px; /* Adiciona padding lateral para telas menores */
`;

function App() {
  return (
    <div>
      <Container>
        <HeroSection />
      </Container>
    </div>
  );
}

export default App;