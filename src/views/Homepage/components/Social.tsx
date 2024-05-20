import styled from 'styled-components';

const Section = styled.section`
  padding: 2.5rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Image = styled.img`
  width: 20rem;

  @media (min-width: 768px) {
    width: 24rem;
  }

  @media (min-width: 1024px) {
    width: 40rem;
  }
`;

const TextContainer = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: white;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Icon = styled.a`
  width: 20rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialIcon = styled.img`
width: 24px;
`

const Social = () => {
  return (
    <Section id="social">
      <Container>
        <Image src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Kendrick the Llama logo" />
        <TextContainer>
          <Title>Follow KENDRICK THE LLAMA on social media</Title>
          <Icons>
            <Icon href="https://twitter.com/BabyTrumpBSC_">
              <SocialIcon src={`${process.env.PUBLIC_URL}/images/social_x_logo.png`} alt="Twitter" />
            </Icon>
            <Icon href="https://t.me/BabyTrumpGlobal">
              <SocialIcon src={`${process.env.PUBLIC_URL}/images/social_telegram_logo.png`} alt="Telegram" />
            </Icon>
          </Icons>
        </TextContainer>
      </Container>
    </Section>
  );
};

export default Social;
