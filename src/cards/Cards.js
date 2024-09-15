import React from "react"
import styled from "styled-components"

const CardWrapper = () => {
  return (
    <Wrapper>
      <Header>Kommunikation</Header>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illo
        quo possimus saepe tempora explicabo commodi molestias? Excepturi
      </Text>
    </Wrapper>
  )
}

export default CardWrapper

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`

const Header = styled.h3`
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
  background: rgb(208, 45, 38);
  color: white;
  font-size: 16px;
  border-radius: 15px 15px 0 0;
  border: none;
`

const Text = styled.p`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  background: rgb(208, 45, 38);
  color: white;
  font-size: 16px;
  border-radius: 0 0 15px 15px;
  padding: 10px;
  border: none;
`
