import styled from 'styled-components';

export const FooterBase = styled.div`
  background-color: var(--blackMoreLighter);
  border-top: 1px solid var(--primary-darker);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 14px;
  padding-bottom: 15px;
  text-align: center;

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
