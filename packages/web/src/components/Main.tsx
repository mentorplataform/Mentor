import React from 'react';
import styled from 'styled-components'
import Card from 'components/Card'

const Main: React.FC = () => {
  return (
    <Container>
      <Title>
        <div>Conheça nossos cursos</div>
        <div>Inscreva-se e ganhe pontos</div>
      </Title>
      <ContainerCard>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerCard>
    </Container>
  )
}

export default Main;

const Container = styled.main`
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  

`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  div:first-child {
    color:#FEB222;
    font-size: 44px;
    
  }
  div:nth-child(2) {
    font-size: 28px;

  }
`

const ContainerCard = styled.div`
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`