import React from 'react';
import styled from 'styled-components';
import { FaHome, FaStar, FaHandshake, FaChartLine } from 'react-icons/fa'; 

const featuresData = [
  {
    icon: FaStar,
    title: "Exclusividade Garantida",
    description: "Acesso a um portfólio de imóveis premium que não estão no mercado aberto.",
  },
  {
    icon: FaHandshake,
    title: "Assessoria Completa",
    description: "Suporte jurídico e financeiro do início ao fim do processo de compra e venda.",
  },
  {
    icon: FaChartLine,
    title: "Análise de Mercado",
    description: "Avaliações precisas baseadas em dados atualizados para garantir o melhor negócio.",
  },
  {
    icon: FaHome,
    title: "Atendimento Personalizado",
    description: "Um especialista dedicado 24/7 para entender suas necessidades e objetivos únicos.",
  },
];

const SectionWrapper = styled.section`
  padding: 80px 0; /* Espaçamento generoso (whitespace) */
  background-color: var(--color-background);
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 10px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  padding: 30px;
  border: 1px solid #ddd; /* Borda sutil */
  border-radius: 4px;
  transition: all 0.3s ease;
  background-color: white; /* Fundo branco puro */
  text-align: center;

  &:hover {
    border-color: var(--color-secondary); /* Acento sutil no hover */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); /* Sombra suave */
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  color: var(--color-secondary); /* Usa a cor de acento */
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const FeatureCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  color: var(--color-text);
  font-size: 0.95rem;
`;

export const FeatureSection = () => {
  return (
    <SectionWrapper id="features">
      <SectionTitle>Por Que Nos Escolher?</SectionTitle>
      <SectionSubtitle>
        Nossa dedicação vai além da transação. Oferecemos um serviço exclusivo, transparente e focado em resultados de alto nível.
      </SectionSubtitle>
      
      <FeaturesGrid>
        {featuresData.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>
              {React.createElement(feature.icon)}
            </FeatureIcon>
            <FeatureCardTitle>{feature.title}</FeatureCardTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </SectionWrapper>
  );
};