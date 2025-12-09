import styled from 'styled-components';
import { Header } from './components/Header'; 
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { PropertiesPreview } from './components/PropertiesPreview';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

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
      
      <Container>
        <FeatureSection /> 
        <PropertiesPreview />
        <ContactForm />
      </Container>

      <Footer />
    </div>
  );
}

export default App;