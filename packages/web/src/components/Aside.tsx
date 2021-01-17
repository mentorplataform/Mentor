import React from 'react';
import styled from 'styled-components'

const Aside: React.FC = () => {
  return (
    <Container>
      <Left>
        <div>
          <Title>
            <div>Ganhe <b>aprendendo</b> <br /></div>
            <div>Ganhe <b>ensinando</b></div>
            <div>A plataforma que conecta pessoas para transformar o mundo por meio da aprendizagem</div>
          </Title>
          <Button>Cadastrar</Button>
        </div>
      </Left>
      <Right>
        <Img>Img</Img>
      </Right>
    </Container>
  )
}

export default Aside;

const Container = styled.aside`
  width: 100%;
  height: 692px;
  background-color: rgba(254,178,34, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

`

const Img = styled.div`
  background-color: #C4C4C4;
  height: 441px;
  width:470px; 
  text-align: center;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  font-size: 60px;
  div:first-child {
    color: #AE00FF;

  }
  div:nth-child(2) {
    color: #5B92E5;
    
  }
  div:nth-child(3) {
    color: #000;
    font-size: 20px;
    width: 500px;
  }
`

const Button = styled.button`
  border: none;

  background-color: #FEB222;
  border-radius: 15px;
  width: 221px;
  height: 43px;
  color: #fff;
`