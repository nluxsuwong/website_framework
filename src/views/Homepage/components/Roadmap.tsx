import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import styled from 'styled-components'

const Section = styled.section`
  padding: 4rem 0;
  background-color: #000;
  color: #fff;
  text-align: center;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const Card = styled.div`
  background-color: #1a202c;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background-image: linear-gradient(to right, cyan, violet);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1.125rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const Roadmap = () => {
  useEffect(() => {
    ScrollReveal().reveal('.token1', {
      delay: 100,
      reset: true,
      origin: 'right',
      distance: '500px',
      duration: 500,
    })
    ScrollReveal().reveal('.token2', {
      delay: 200,
      reset: true,
      origin: 'right',
      distance: '500px',
      duration: 500,
    })
    ScrollReveal().reveal('.token3', {
      delay: 300,
      reset: true,
      origin: 'right',
      distance: '500px',
      duration: 500,
    })
    ScrollReveal().reveal('.token4', {
      delay: 400,
      reset: true,
      origin: 'right',
      distance: '500px',
      duration: 500,
    })
  }, [])

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <Card className="token1">
          <CardTitle>Phase 1: Launch</CardTitle>
          <List>
            <ListItem>Website Launch</ListItem>
            <ListItem>Community Building</ListItem>
            <ListItem>Whitepaper Release</ListItem>
          </List>
        </Card>
        <Card className="token2">
          <CardTitle>Phase 2: Growth</CardTitle>
          <List>
            <ListItem>Exchange Listings</ListItem>
            <ListItem>Marketing Campaigns</ListItem>
            <ListItem>Partnerships</ListItem>
          </List>
        </Card>
        <Card className="token3">
          <CardTitle>Phase 3: Expansion</CardTitle>
          <List>
            <ListItem>Staking Platform</ListItem>
            <ListItem>NFT Marketplace</ListItem>
            <ListItem>Global Outreach</ListItem>
          </List>
        </Card>
        <Card className="token4">
          <CardTitle>Phase 4: Future Plans</CardTitle>
          <List>
            <ListItem>Metaverse Integration</ListItem>
            <ListItem>Further Development</ListItem>
            <ListItem>Community Voting</ListItem>
          </List>
        </Card>
      </Container>
    </Section>
  )
}

export default Roadmap
