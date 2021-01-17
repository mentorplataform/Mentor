import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/HeaderAuth'
import Aside from 'components/CourseConfirmed/Aside'

const CourseConfirmed: React.FC = (props) => {
  return (
    <Container>
      <Header />
      <Aside />
      <Footer />
    </Container>
  );
}

export default CourseConfirmed;

const Container = styled.div`

`