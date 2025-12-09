import React from 'react';
import styled from 'styled-components';
import { Button } from './Button'; 

const propertiesData = [
  {
    id: 1,
    title: "Cobertura de Luxo | Vista Panorâmica",
    location: "Bairro Nobre, Cidade Exemplo",
    price: "R$ 4.500.000",
    image: "/CoberturaDeLuxo.jpg",
  },
  {
    id: 2,
    title: "Casa de Campo Moderna | Piscina Infinita",
    location: "Interior Tranquilo, Zona Rural",
    price: "R$ 8.900.000",
    image: "/CasaCampoModerna.jpg",
  },
  {
    id: 3,
    title: "Apartamento Compacto | Design Assinado",
    location: "Centro, Próximo ao Metrô",
    price: "R$ 1.250.000",
    image: "/ApartamentoCompacto.jpg",
  },
];

const SectionWrapper = styled.section`
  padding: 80px 0;
  background-color: white; 
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
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
`;

const PropertyCard = styled.div`
  background: var(--color-background);
  border-radius: 8px;
  overflow: hidden; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: cover; 
  display: block;
`;

const PropertyBody = styled.div`
  padding: 20px;
`;

const PropertyTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--color-primary);
  margin-bottom: 8px;
  font-weight: 600;
`;

const PropertyLocation = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 15px;
`;

const PropertyPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-secondary); 
`;

const ViewAllButton = styled(Button)`
    margin-top: 20px;
`;

export const PropertiesPreview = () => {
  return (
    <SectionWrapper id="properties">
      <SectionTitle>Imóveis em Destaque</SectionTitle>
      <SectionSubtitle>
        Uma curadoria de residências exclusivas, selecionadas pela sua arquitetura, localização e potencial de investimento.
      </SectionSubtitle>
      
      <PropertiesGrid>
        {propertiesData.map((property) => (
          <PropertyCard key={property.id}>
            <PropertyImage src={property.image} alt={property.title} />
            <PropertyBody>
              <PropertyTitle>{property.title}</PropertyTitle>
              <PropertyLocation>{property.location}</PropertyLocation>
              <PropertyPrice>{property.price}</PropertyPrice>
            </PropertyBody>
          </PropertyCard>
        ))}
      </PropertiesGrid>

      <ViewAllButton as="a" href="#">
        Ver Todo o Portfólio
      </ViewAllButton>

    </SectionWrapper>
  );
};