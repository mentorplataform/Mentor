import React from 'react';
import styled from 'styled-components'
import Logo from './../images/MentorApp.png'

const Header: React.FC = () => {
  return (
    <Container>
        <Img src={Logo} alt={"Logo"}/>
        <Title>Mentor</Title>
        <Menu>
            <a href="/">Home</a>
            <a href="/cursos">Cursos</a>
            <a href="/Registrar">Registrar</a>
            <a href="/login">Login</a>
            <a href="/seja-um-parceiro">Seja um parceiro</a>
            <a href="/parceiros">Parceiros</a>
        </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.header`
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-left: 20px;
    
`

const Img = styled.img`
    height: 45px;
    width: 45px;
`

const Title = styled.span`
    /* font-family: Rubik; */
    font-size: 40px;
    color: #203350;
    margin-left: 10px;
    margin-right: 30px;
`

const Menu = styled.div`
    a {
        margin-left: 15px;
        color: #203350;
        text-decoration: none;
    }
    a:first-child {
       margin-left: 0px; 
    }

    a:hover {
        text-decoration: underline;
    }
`