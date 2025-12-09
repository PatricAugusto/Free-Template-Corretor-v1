import styled from 'styled-components';
import { Header } from './components/Header'; 
import { HeroSection } from './components/HeroSection';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function App() {
  return (
    <div>
      <Header /> 
      <HeroSection />
      
      {/* Aqui virão outras seções que usarão o Container */}
      {/* <Container>
        <FeatureSection />
        <PropertiesPreview />
      </Container> */}
    </div>
  );
}

export default App;