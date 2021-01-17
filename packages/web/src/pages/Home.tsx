import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import styled from 'styled-components'
import Aside from 'components/Aside'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

const Home: React.FC = (props) => {
  return (
    <Container>
      <Header />
      <Aside />
      <Main />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div`

`