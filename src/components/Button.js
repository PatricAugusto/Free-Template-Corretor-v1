import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--color-secondary);
  color: var(--color-background); 
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary); 
    color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
  }
`;