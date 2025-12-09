import React from 'react';
import styled from 'styled-components';
import { Button } from './Button'; 

const SectionWrapper = styled.section`
  padding: 80px 0;
  background-color: var(--color-background); 
  text-align: center;
`;

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background: white; 
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); 
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 10px;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: var(--color-secondary); 
    outline: none;
    box-shadow: 0 0 0 2px rgba(197, 156, 104, 0.2); 
  }
`;

const Textarea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;


export const ContactForm = () => {
  return (
    <SectionWrapper id="contact">
      <SectionTitle>Inicie Sua Consulta</SectionTitle>
      <SectionSubtitle>
        Preencha o formulário e agende uma conversa com nosso especialista em imóveis exclusivos.
      </SectionSubtitle>
      
      <FormWrapper>
        <form onSubmit={(e) => { e.preventDefault(); alert("Formulário Submetido! (Ação de envio deve ser implementada)"); }}>
          
          <FormGroup>
            <Label htmlFor="name">Seu Nome Completo</Label>
            <Input type="text" id="name" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="phone">Telefone (Opcional)</Label>
            <Input type="tel" id="phone" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Sua Mensagem / Tipo de Imóvel Buscado</Label>
            <Textarea id="message" required />
          </FormGroup>
          
          <SubmitButton type="submit">
            Enviar Solicitação
          </SubmitButton>

        </form>
      </FormWrapper>
    </SectionWrapper>
  );
};