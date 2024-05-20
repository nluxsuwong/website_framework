import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1f2937;
  color: white;
  padding: 1rem 0;
  text-align: center;
  margin-top: 2.5rem;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Copyright KENDRICK THE LLAMA © 2024. All rights reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;
