import React from 'react';
import styled from 'styled-components'
import Header from 'components/Header'
import Card from 'components/Card'
import Footer from 'components/Footer'

const Course: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner>
        <div>Cursos disponíveis na plataforma</div>
      </Banner>
      <Main>
      <TitleCategory>Categorias</TitleCategory>
        <Category>
          <Tag>FINANÇAS</Tag>
          <Tag>MATEMÁTICA</Tag>
          <Tag>QUÍMICA</Tag>
          <Tag>BIOLOGIA</Tag>
          <Tag>GRAMÁTICA</Tag>
          <Tag>LITERATURA</Tag>
          <Tag>NEGÓCIOS</Tag>
          <Tag>HISTÓRIA</Tag>
        </Category>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Main>
      <Footer/>
    </Container>
  )
}

export default Course;

const Container = styled.div`
  display: flex;
  flex-direction: column;

`

const Banner = styled.div`
  background-color: rgba(254,178,34, 0.6);
  height: 300px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  font-size: 48px;
  font-weight: bold;
  padding-bottom: 20px;
  padding-left: 20px;
  color: #AE00FF;
  

`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Category = styled.div`
  margin: 15px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`
const TitleCategory = styled.div`
  font-size: 36px;
  margin: 15px 20px;
  color: #2F2E41;

`

const Tag = styled.div`
  width: 203px;
  margin: 20px;
  height: 30px;
  background: rgba(254, 178, 34, 0.6);
  color: #2F2E41;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;


`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 15px 0;

`