import React from 'react';
import styled from 'styled-components'

const Card: React.FC = () => {
    return (
        <Container>
            <Header></Header>
            <Footer></Footer>
        </Container>
    )
}

export default Card;

const Container = styled.div`
    width: 370px;
    height: 272px;
    margin: 20px;
`

const Header = styled.div`
    height: 188px;
    background-color: #1469E9;

`

const Footer = styled.div`
    height: 84px;
    background-color: #C4C4C4;
`