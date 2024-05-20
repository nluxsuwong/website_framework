import React, { useEffect } from 'react'
import styled from 'styled-components'
import ScrollReveal from 'scrollreveal'
import { shake } from '../../../styles/shakeAnimation'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2.5rem 0;
  background-size: cover;
  background-position: center;
  color: white;
`

const Container = styled.div`
  min-width: fit-content;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2.5rem;
  margin: 2.5rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`

const MainHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-top: 0;
  }
`

const Highlight = styled.span`
  font-size: 2.5rem;
  color: cyan;
  background-image: linear-gradient(to right, cyan, violet);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`

const AboutText = styled.p`
  font-size: 1.25rem;
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const BuyButton = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 1.125rem;
  border-radius: 9999px;
  background-color: black;
  color: white;
  border: 1px solid white;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  animation: ${shake} 2.4s infinite;

  &:hover {
    background-color: white;
    color: black;
  }
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  margin-top: 1rem;
`

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #1a202c;
  color: white;
  border: 1px solid #2d3748;
  width: 100%;
  max-width: 300px;
`

const CopyButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  background-color: #4a5568;
  color: white;
  border: 1px solid #4a5568;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2d3748;
  }

  svg {
    margin-right: 0.5rem;
  }
`

const Hero = () => {
  useEffect(() => {
    // ScrollReveal().reveal('.social', { delay: 100, reset: true, origin: 'right', distance: '20px', duration: 300 });
    // ScrollReveal().reveal('.token3', { delay: 100, reset: true, origin: 'right', distance: '500px', duration: 500 });
    // ScrollReveal().reveal('.token2', { delay: 100, reset: true, origin: 'right', distance: '500px', duration: 500 });
    // ScrollReveal().reveal('.token1', { delay: 100, reset: true, origin: 'right', distance: '500px', duration: 500 });
    // ScrollReveal().reveal('.chart', { delay: 100, reset: true, origin: 'bottom', distance: '500px', duration: 300 });
    // ScrollReveal().reveal('.main-head', { delay: 100, reset: true, origin: 'left', distance: '500px', duration: 300 });
    // ScrollReveal().reveal('.main-logo', { delay: 100, reset: true, origin: 'right', distance: '500px', duration: 300 });
  }, [])

  const changeCopyText = (button: HTMLButtonElement) => {
    const copyTextElement = button.querySelector('.copy-text')
    if (copyTextElement) {
      copyTextElement.textContent = 'Copied'
    }
  }

  return (
    <Section>
      <Container>
        <MainHead className="main-head">
          <Title>
            <br />
            <Highlight>KENDRICK THE $LLAMA</Highlight>
          </Title>
          <div>
            <AboutText>LP Burned.</AboutText>
            <AboutText>100% community owned.</AboutText>
          </div>
          <a href="https://pancakeswap.finance/swap?outputCurrency=0xbEF1a4b285274B64876f61dB5cCF07E439312D43">
            <BuyButton className="shake-animation">
              BUY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M6.25 5.44702C5.56 5.44702 5 6.00702 5 6.69702V18.197C5 18.887 5.56 19.447 6.25 19.447H17.75C18.44 19.447 19 18.887 19 18.197V14.447C19 14.1818 19.1054 13.9275 19.2929 13.7399C19.4804 13.5524 19.7348 13.447 20 13.447C20.2652 13.447 20.5196 13.5524 20.7071 13.7399C20.8946 13.9275 21 14.1818 21 14.447V18.197C21 19.059 20.6576 19.8856 20.0481 20.4951C19.4386 21.1046 18.612 21.447 17.75 21.447H6.25C5.38805 21.447 4.5614 21.1046 3.9519 20.4951C3.34241 19.8856 3 19.059 3 18.197V6.69702C3 5.83507 3.34241 5.00842 3.9519 4.39892C4.5614 3.78943 5.38805 3.44702 6.25 3.44702H10C10.2652 3.44702 10.5196 3.55238 10.7071 3.73991C10.8946 3.92745 11 4.18181 11 4.44702C11 4.71224 10.8946 4.96659 10.7071 5.15413C10.5196 5.34166 10.2652 5.44702 10 5.44702H6.25ZM14 5.44702C13.7348 5.44702 13.4804 5.34166 13.2929 5.15413C13.1054 4.96659 13 4.71224 13 4.44702C13 4.18181 13.1054 3.92745 13.2929 3.73991C13.4804 3.55238 13.7348 3.44702 14 3.44702H20C20.2652 3.44702 20.5196 3.55238 20.7071 3.73991C20.8946 3.92745 21 4.18181 21 4.44702V10.447C21 10.7122 20.8946 10.9666 20.7071 11.1541C20.5196 11.3417 20.2652 11.447 20 11.447C19.7348 11.447 19.4804 11.3417 19.2929 11.1541C19.1054 10.9666 19 10.7122 19 10.447V6.86102L14.707 11.154C14.5184 11.3362 14.2658 11.437 14.0036 11.4347C13.7414 11.4324 13.4906 11.3272 13.3052 11.1418C13.1198 10.9564 13.0146 10.7056 13.0123 10.4434C13.01 10.1812 13.1108 9.92862 13.293 9.74002L17.586 5.44702H14Z"
                  fill="#ffffff"
                />
              </svg>
            </BuyButton>
          </a>
          <InputContainer>
            <Input
              id="hs-clipboard-input"
              type="text"
              value="0xbEF1a4b285274B64876f61dB5cCF07E439312D43"
            />
            <CopyButton
              className="js-clipboard"
              data-clipboard-target="#hs-clipboard-input"
              onClick={(e) => changeCopyText(e.currentTarget)}
            >
              <svg
                className="js-clipboard-default"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              </svg>
              <svg
                className="js-clipboard-success hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="copy-text">Copy</span>
            </CopyButton>
          </InputContainer>
        </MainHead>
        <div className="main-logo w-80 md:w-96 lg:w-1/2">
          <img
            className="imglogo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Kendrick the Llama Logo"
          />
        </div>
      </Container>
    </Section>
  )
}

export default Hero
