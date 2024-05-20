import styled from 'styled-components'

const Section = styled.section`
  padding: 2.5rem 0 5rem;
  text-align: center;
`

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`

const Image = styled.img`
  width: 8rem;
  margin: 0 auto 2rem;

  @media (min-width: 768px) {
    width: 10rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  background: #1f2937;
  border-radius: 0.5rem;
  border: 1px solid #374151;
  transition: transform 0.2s;
  text-decoration: none;
  color: white;

  &:hover {
    transform: scale(1.05);
  }
`

const CardImage = styled.img`
  width: 8rem;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    width: 16rem;
  }
`

const CardTitle = styled.p`
  font-size: 2rem;
  font-weight: 800;
`

const Partners = () => {
  return (
    <Section id="partners">
      <Container>
        <Title>Partners</Title>
        <Image
          src={`${process.env.PUBLIC_URL}/images/partner.png`}
          alt="Partner"
        />
        <Grid>
          <Card href="https://www.pinksale.finance/">
            <CardImage src="images/partners/pink.png" alt="PinkSale" />
            <CardTitle>PinkSale</CardTitle>
          </Card>
          <Card href="https://www.dexview.com/">
            <CardImage src="images/partners/dex.png" alt="DEXView" />
            <CardTitle>DEXView</CardTitle>
          </Card>
        </Grid>
      </Container>
    </Section>
  )
}

export default Partners
