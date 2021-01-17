import React from 'react';
import styled from 'styled-components'


const ProfessBarProfile: React.FC = () => {
    return (
        <Container>
            <Img />
            <ProfileInfo>
                <Name>João Pedro</Name>
                <Score>
                    <span>Pontuação total</span>
                    <div>NÍVEL 4</div>
                </Score>
                <Progress>
                    <div>
                        <Done />
                    </div>
                    <Points>1230/2000</Points>
                </Progress>
            </ProfileInfo>
        </Container>
    )
}

export default ProfessBarProfile;

const Container = styled.div`
    background-color: rgba(254,178,34, 0.6);
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
`

const Img = styled.div`
    height: 150px;
    width: 150px;
    background: #ccc;
    border-radius: 50%;
    margin-left: 20px;
`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: center;
    margin-left: 20px;
    
`

const Name = styled.div`
    font-size: 48px;
    color: #AE00FF;
    font-weight: bold;
`

const Score = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        color: #203350;
        margin-left: 15px;
        margin-right: 15px;
    }
    div {
        width: 159px;
        height: 32px;
        background: rgba(254, 178, 34, 0.6);
        color: #FA7609;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;

    }
`

const Progress = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    div:first-child {
        width: 544px;
        background: #fff;
        height: 22px;
        border-radius: 5px;

    }
`

const Done = styled.div`
    width: 40% !important;
    height: 22px;
    background: #5E90FF !important;
    border-radius: 5px;
   
`

const Points = styled.div`
    margin-left: 10px;
    color: #203350;
    font-size: 20px;
`
