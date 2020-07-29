import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--white);
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  p{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .alura, .imersao, .github{
    max-width: 50px;
    max-height: 50px;
  }
`;
