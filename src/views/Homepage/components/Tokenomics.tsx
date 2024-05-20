import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Image = styled.img`
  width: 8rem;
  margin: 0 auto 2rem;

  @media (min-width: 768px) {
    width: 10rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: #1f2937;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid #374151;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: white;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  background: #333;
  color: white;
  border: 1px solid #444;
  border-radius: 4px;
`;

const CopyButton = styled.button`
  padding: 0.75rem 1rem;
  background: #444;
  color: white;
  border: 1px solid #555;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const Tokenomics = () => {
  const changeCopyText = (button: HTMLButtonElement) => {
    const copyTextElement = button.querySelector('.copy-text');
    if (copyTextElement) {
      copyTextElement.textContent = 'Copied';
    }
  };

  return (
    <Section id="tokenomics">
      <Container>
        <Title>Tokenomics</Title>
        <Image src={`${process.env.PUBLIC_URL}/images/token.png`} alt="Token" />
        <Grid>
          <Card>
            <CardTitle>Total Supply</CardTitle>
            <CardText>1000000000 LLAMA</CardText>
          </Card>
          <Card>
            <CardText>0/0 TAX</CardText>
            <CardText>LIQUIDITY POOL BURNT</CardText>
            <CardText>100% COMMUNITY OWNED</CardText>
          </Card>
          <Card>
            <CardTitle>CA</CardTitle>
            <InputContainer>
              <Input id="hs-clipboard-input" type="text" value="0xbEF1a4b285274B64876f61dB5cCF07E439312D43" />
              <CopyButton data-clipboard-target="#hs-clipboard-input" onClick={(e) => changeCopyText(e.currentTarget)}>
                <svg className="js-clipboard-default" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                </svg>
                <span>Copy</span>
              </CopyButton>
            </InputContainer>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
};

export default Tokenomics;
