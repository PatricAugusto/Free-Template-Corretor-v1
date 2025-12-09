import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: var(--color-primary); 
  color: var(--color-background); 
  padding: 40px 0 20px; 
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap; 
  gap: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
  padding-bottom: 30px;
  margin-bottom: 20px;
`;

const FooterColumn = styled.div`
  min-width: 200px; 
  
  @media (max-width: 768px) {
    min-width: 100%; 
  }
`;

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--color-secondary); 
`;

const FooterLink = styled.a`
  display: block;
  color: var(--color-background);
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 0.95rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
    color: var(--color-secondary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const SocialIcon = styled(FooterLink)`
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 0;
  opacity: 1;

  &:hover {
    color: var(--color-secondary);
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          <ColumnTitle>João Corretor</ColumnTitle>
          <p style={{ marginBottom: '10px', fontSize: '0.95rem', opacity: 0.8 }}>
            Especialista em imóveis de alto padrão e investimentos imobiliários exclusivos.
          </p>
          <FooterLink href="mailto:contato@joaocorretor.com.br">
            <FaEnvelope style={{ marginRight: '5px' }} /> contato@joaocorretor.com.br
          </FooterLink>
          <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
            (XX) 9XXXX-XXXX
          </p>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Navegação</ColumnTitle>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#features">Diferenciais</FooterLink>
          <FooterLink href="#properties">Imóveis</FooterLink>
          <FooterLink href="#contact">Contato</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Siga-nos</ColumnTitle>
          <SocialLinks>
            <SocialIcon href="https://instagram.com" target="_blank">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </SocialIcon>
          </SocialLinks>
          <p style={{ fontSize: '0.85rem', opacity: 0.6, marginTop: '20px' }}>
             CRECI: 12345-J
          </p>
        </FooterColumn>
      </FooterContainer>

      <Copyright>
        &copy; {new Date().getFullYear()} Patric Augusto | Todos os direitos reservados.
      </Copyright>
    </FooterWrapper>
  );
};