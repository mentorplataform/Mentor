import React from 'react';
import styled from 'styled-components'
import HeaderAuth from 'components/HeaderAuth'
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Icon } from '@material-ui/core';
import Card from 'components/Card'
import Footer from 'components/Footer'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CourseInfo: React.FC = () => {
  return (
    <Container>
      <HeaderAuth />
      <Banner>
        <div>
          <div>Lorem ipsum dolor sit amet, consectetur </div>
          <div>Lorem ipsum dolor sit amet, consectetur </div>
          <Button>Inscreva-se</Button>
        </div>
        <Info>
          <div>
            <Icon component={PersonIcon} />
            <label>Nome do Professor</label>
          </div>
          <div>
            <Icon component={AccessTimeIcon} />
            <label>Tempo de curso: 5 aulas de 30 minutos</label>
          </div>
        </Info>
      </Banner>
      <Aside>
        <Left>
          <div>
            <label>Apresentação</label>
            <label>Objetivo do curso</label>
            <label>Sobre o mentor</label>
            <label>Estrutura do curso</label>
            <label>Contato</label>
          </div>
        </Left>
        <Right>
          <label>
            Apresentação
          </label>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </span>
        </Right>
      </Aside>
      <Course>
        <label>Cursos relacionados</label>
        <CardContainer>
          <Icon fontSize={"large"} component={ArrowBackIosIcon}/>
          <Card />
          <Card />
          <Card />
          <Icon fontSize={"large"} component={ArrowForwardIosIcon}/>
        </CardContainer>
      </Course>
      <Course>
        <label>Outros cursos</label>
        <CardContainer>
          <Icon fontSize={"large"} component={ArrowBackIosIcon}/>
          <Card />
          <Card />
          <Card />
          <Icon fontSize={"large"} component={ArrowForwardIosIcon}/>
        </CardContainer>
      </Course>
      <Footer/>
    </Container>
  )
}

export default CourseInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Banner = styled.div`
  background-color: rgba(254,178,34, 0.6);
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 20px;
  color: #5B92E5;
  padding-left: 20px;
  
  div:nth-child(1) {
    border-bottom: 1px solid black;
    padding-bottom: 20px;
  }
  
  div:first-child {
    div:first-child {
    padding-bottom: 0;
      border-bottom: none;
      color: #AE00FF;
      font-size: 48px;

    }

  }
  

`

const Button = styled.button`
  background-color: #FEB222;
  color: #fff;
  width: 354px;
  height: 41px;
  border-radius: 50px;
  border: none;

`

const Info = styled.div`
  color: #000;
  border: none;
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-top: 15px;
  div {
    display: flex;
  justify-content: center; 
  align-items: center;
  }
  div:first-child {
    padding-bottom: 0px;
    margin-right: 20px;
    border-bottom: none;
  }
  label {
    font-size: 16px;
  }
`

const Aside = styled.div`
  display: flex;

`

const Left = styled.div`
  display:flex;
  margin-top: 30px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
  div {
    padding-right: 20px;
    line-height: 50px;
    border-right: 1px solid #000;
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #FEB222;
    font-size: 30px;
    label {
      cursor: pointer;

    }

  }

`

const Right = styled.div`
  flex: 4;
  margin-top: 30px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  label {
    color: #FEB222;
    font-size: 30px;
    font-weight: bold;
  }
  span {
    width: 70%;
    font-size: 22px;
    color: #2F2E41;
    margin-top: 20px;
  }

`

const Course = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  margin-left: 20px;

  label {
    color: #FEB222;
    font-size: 38px;

  }
 
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`