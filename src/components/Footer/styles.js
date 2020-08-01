import styled from 'styled-components';

export const FooterBase = styled.div`
  background-color: var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

  img {
    margin-left: 7px;
    margin-right: 7px;
  }

  .imersao{
    max-width: 32px;
    max-height: 32px;
  }
  .wikipedia{
    max-width: 40px;
    max-height: 40px;
  }
  .github, .linkedin, .twitter{
    max-width: 30px;
    max-height: 30px;
  }
`;

export default FooterBase;
