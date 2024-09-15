import React from "react"
import styled from "styled-components"
import cardcontent from "./cardcontent"

const CardWrapper = () => {
  console.log(cardcontent)
  return (
    <Wrapper>
      {cardcontent.map(function (card) {
        return (
          <Card key={card.id}>
            <Header>{card.title}</Header>
            <Text>{card.text}</Text>
          </Card>
        )
      })}
    </Wrapper>
  )
}

export default CardWrapper

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh;
  border-radius: 20px;
  padding-bottom: 0;
`

const Header = styled.h3`
  display: flex;
  width: 100%;
  height: 7vh;
  justify-content: center;
  align-items: center;
  background: white;
  color: rgb(208, 45, 38);
  font-size: 16px;
  border-radius: 15px 15px 0 0;
  border: none;
  text-transform: uppercase;
  font-weight: 100;
  text-decoration: underline double;
`

const Text = styled.p`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  background: white;
  color: rgb(208, 45, 38);
  font-size: 16px;
  border-radius: 0 0 15px 15px;
  padding: 10px;
  border: none;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-bottom: 5vh;
  border: 0.5px solid red;
  border-radius: 15px;
`
