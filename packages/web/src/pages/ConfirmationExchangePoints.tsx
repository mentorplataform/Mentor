import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/HeaderAuth'
import Main from 'components/ConfirmationExchangePoints/Main'

const ConfirmationExchangePoints: React.FC = (props) => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default ConfirmationExchangePoints;

const Container = styled.div`

`