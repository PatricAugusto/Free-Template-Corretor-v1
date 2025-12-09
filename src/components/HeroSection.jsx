import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const HeroWrapper = styled.section`
  min-height: 100vh;   
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;
  overflow: hidden;

  background-image: url('/HeroSectionImg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;

  &::before {
    content: '';
    position: absolute;
    inset: 0; 
    background: rgba(10, 35, 66, 0.65);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2; 
  max-width: 700px; 
  color: var(--color-background); 
  padding-left: 100px; 

  @media (max-width: 1024px) {
    padding-left: 50px;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding-left: 20px; 
    padding-right: 20px;
    max-width: 90%;
    margin: 0 auto;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>
          Seu Próximo Capítulo.
        </HeroTitle>
        <HeroSubtitle>
          Conheça os imóveis exclusivos que definem o padrão de luxo e sofisticação no mercado.
        </HeroSubtitle>
        <Button as="a" href="#contact">
          Fale com o Especialista
        </Button>
      </HeroContent>
    </HeroWrapper>
  );
};