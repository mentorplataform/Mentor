import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, Container, Grid, GridList } from '@material-ui/core';

import Logo from '../../images/MentorApp.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: `${theme.spacing(0)}`,
            marginRight: `${theme.spacing(0)}`,
            marginBottom: 100
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1,
            background: '#FEB222',
        },
        card: {
            marginTop: theme.spacing(10),
        },
        boxImage: {
            marginTop: 80
        },
        boxInputs: {
            marginTop: 100
        },
        moreInfo:{
            color: 'gray',
            lineHeight: 2,
            marginTop: 30,
        }
    })
);

//state type

type State = {
    username: string
    password: string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
};

const initialState: State = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false
};

type Action = { type: 'setUsername', payload: string }
    | { type: 'setPassword', payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.payload
            };
        case 'setPassword':
            return {
                ...state,
                password: action.payload
            };
        case 'setIsButtonDisabled':
            return {
                ...state,
                isButtonDisabled: action.payload
            };
        case 'loginSuccess':
            return {
                ...state,
                helperText: action.payload,
                isError: false
            };
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            };
    }
}

const Login = () => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.username.trim() && state.password.trim()) {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: false
            });
        } else {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: true
            });
        }
    }, [state.username, state.password]);

    const handleLogin = () => {
        if (state.username === 'abc@email.com' && state.password === 'password') {
            dispatch({
                type: 'loginSuccess',
                payload: 'Login feito com sucesso!'
            });
        } else {
            dispatch({
                type: 'loginFailed',
                payload: 'Email ou senha incorretos!'
            });
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13) {
            state.isButtonDisabled || handleLogin();
        }
    };

    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch({
                type: 'setUsername',
                payload: event.target.value
            });
        };

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch({
                type: 'setPassword',
                payload: event.target.value
            });
        }
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Container maxWidth="md">
                <Grid container justify="center" alignItems="center" spacing={8}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box className={classes.boxImage}>
                            <img width={'100%'} src={Logo} alt={Logo} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box className={classes.boxInputs}>
                            <div>
                                <TextField
                                    error={state.isError}
                                    fullWidth
                                    id="username"
                                    type="email"
                                    label="E-mail"
                                    placeholder="E-mail"
                                    margin="normal"
                                    onChange={handleUsernameChange}
                                    onKeyPress={handleKeyPress}
                                />
                                <TextField
                                    error={state.isError}
                                    fullWidth
                                    id="password"
                                    type="password"
                                    label="Senha"
                                    placeholder="Senha"
                                    margin="normal"
                                    helperText={state.helperText}
                                    onChange={handlePasswordChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                            <Box>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                    className={classes.loginBtn}
                                    onClick={handleLogin}
                                    disabled={state.isButtonDisabled}>
                                    Login
                            </Button>
                            </Box>
                            <Box className={classes.moreInfo}>
                                <p>Esqueci minha senha</p>
                                <p>Cadastra-se</p>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </form>
    );
}

export default Login;