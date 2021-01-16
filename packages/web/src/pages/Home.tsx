import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

const Home: React.FC = (props) => {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  function msgClick() {
    enqueueSnackbar('message here', {
      variant: 'success',

    });
  }

  return (
    <>
      <div>Home page</div>
      <br/>
      <div onClick={msgClick}>Click here for show msg</div>
    </>
  );
}

export default Home;