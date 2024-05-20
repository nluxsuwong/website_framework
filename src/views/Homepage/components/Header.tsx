import styled from 'styled-components'

const NavContainer = styled.div`
  background-color: black; /* Ensure background color covers the margins */
  z-index: 9999;
  position: sticky;
  top: 0px;
`

const Nav = styled.nav`
  max-width: 1440px;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black; /* Ensure background color to prevent transparency */
`

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  background-image: linear-gradient(to right, rgb(150, 24, 182), violet);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const NavMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`

const NavItem = styled.li`
  list-style: none;
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition:
    color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: pink;
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Icon = styled.img`
  width: 2rem;
  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`

const BuyButton = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  background: black;
  border: 1px solid white;
  border-radius: 9999px;
  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background: white;
    color: black;
  }
`

const Header = () => {
  return (
    <NavContainer className="nav-main">
      <Nav>
        <Logo href="#">KENDRICK THE $LLAMA</Logo>
        <NavMenu id="navbar-default">
          <NavList>
            <NavItem>
              <NavLink href="#">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#roadmap">ROADMAP</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#tokenomics">TOKENOMICS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#partners">PARTNERS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#social">SOCIALS</NavLink>
            </NavItem>
          </NavList>
        </NavMenu>
        <NavIcons>
          <a href="https://t.me/BabyTrumpGlobal">
            <Icon
              src={`${process.env.PUBLIC_URL}/images/social_x_logo.png`}
              alt="Twitter"
            />
          </a>
          <a href="https://twitter.com/BabyTrumpBSC_">
            <Icon
              src={`${process.env.PUBLIC_URL}/images/social_telegram_logo.png`}
              alt="Telegram"
            />
          </a>
          <a href="https://t.me/BabyTrumpGlobal">
            <BuyButton>Buy Now</BuyButton>
          </a>
        </NavIcons>
      </Nav>
    </NavContainer>
  )
}

export default Header
