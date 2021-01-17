import React from 'react';
import styled from 'styled-components'
import HeaderAuth from 'components/HeaderAuth'
import ProgressBarProfile from 'components/ProgressBarProfile'
import Bag from './../images/bag.png'
import Calc from './../images/calc.png'
import Powerbank from './../images/powerbank.png'
import Footer from 'components/Footer'

const Profile: React.FC = () => {
    return (
        <Container>
            <HeaderAuth />
            <ProgressBarProfile />
            <Itens>
                <Item>
                    <ImgProduct src={Calc} alt="calculadora" />
                    <NameProduct>Calculadora 600 pontos</NameProduct>
                    <a href="/troca-item"><ButtonProduct>TROCAR</ButtonProduct></a>
                </Item>
                <Item>
                    <ImgProduct src={Powerbank} alt="Power-bank" />
                    <NameProduct>Powerbank 800 pontos</NameProduct>
                    <a href="/troca-item"><ButtonProduct>TROCAR</ButtonProduct></a>
                </Item>
                <Item>
                    <ImgProduct src={Bag} alt="mochila" />
                    <NameProduct>Mochila 1200 pontos</NameProduct>
                    <a href="/troca-item"><ButtonProduct>TROCAR</ButtonProduct></a>
                </Item>
                <Item>
                    <ImgProduct src={Calc} alt="calculadora" />
                    <NameProduct>Calculadora 600 pontos</NameProduct>
                    <a href="/troca-item"><ButtonProduct>TROCAR</ButtonProduct></a>
                </Item>
                <Item>
                    <ImgProduct src={Powerbank} alt="Power-bank" />
                    <NameProduct>Powerbank 800 pontos</NameProduct>
                    <a href="/troca-item"><ButtonProduct>TROCAR</ButtonProduct></a>
                </Item>
                <Item>
                    <ImgProduct src={Bag} alt="mochila" />
                    <NameProduct>Mochila 1200 pontos</NameProduct>
                    <a href="/troca-item"><ButtonProduct>TROCAR</ButtonProduct></a>
                </Item>
            </Itens>
            <Footer/>
        </Container>
    )
}

export default Profile;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`


const Itens = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    border-left: 1px solid #000;
    &:first-child {
        border-left: none;
    }


`

const ImgProduct = styled.img`
    width: 200px;
    height: 200px;
`

const NameProduct = styled.div`
    text-align: center;
    color: #203350;
    font-size: 30px;

`

const ButtonProduct = styled.button`
    background: rgba(254, 178, 34, 0.6);
    border: 1px solid #FA7609;
    border-radius: 50px;
    width: 159px;
    height: 32.86px;
    color: #FA7609;
    font-size: 22px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

`