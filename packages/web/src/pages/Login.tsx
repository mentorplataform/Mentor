import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Login/Main'

const Login: React.FC = (props) => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Login;

const Container = styled.div`

`