import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, ButtonBase, Container, Grid, GridList, Paper, Typography } from '@material-ui/core';

import LogoGoogle from '../../images/google-logo.png';
import LogoFacebook from '../../images/facebook-logo.png';
import LogoApple from '../../images/apple-logo.png';
import imgStudent from '../../images/student.png';
import ImgTeacher from '../../images/teacher.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: `${theme.spacing(0)}`,
            marginRight: `${theme.spacing(0)}`,
            marginBottom: 100,
            marginTop: 70
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1,
            background: '#FEB222',
            marginRight: '10%',
            marginLeft: '10%',
        },
        card: {
            marginTop: theme.spacing(10),
        },
        boxImage: {
            marginTop: 80
        },
        boxInputs: {
            marginTop: 20
        },
        moreInfo: {
            color: 'gray',
            lineHeight: 2,
            marginTop: 30,
        },
        paper: {
            padding: 20,
            margin: '15px auto',
            maxWidth: 500,
        },
        image: {
            width: 20,
            height: 20,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        titleSocial: {
            marginTop: 2,
        },
        textOr: {
            textAlign: 'center',
            marginTop: 20
        },
        elementCenter: {
            textAlign: 'center',
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

const Register = () => {
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
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={LogoGoogle} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs className={classes.titleSocial}>
                                            <Typography variant="body4" gutterBottom>
                                                Continue com o Google
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={LogoFacebook} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs className={classes.titleSocial}>
                                            <Typography variant="body4" gutterBottom>
                                                Continue com o Facebook
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={LogoApple} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs className={classes.titleSocial}>
                                            <Typography variant="body4" gutterBottom>
                                                Continue com a conta Apple
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs className={classes.textOr}>
                                        <Typography variant="body4" gutterBottom>
                                            Ou
                                            </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box className={classes.boxInputs}>
                            <div>
                                <TextField
                                    error={state.isError}
                                    fullWidth
                                    id="name"
                                    type="text"
                                    label="Nome completo"
                                    placeholder="Nome completo"
                                    margin="normal"
                                    onChange={handleUsernameChange}
                                    onKeyPress={handleKeyPress}
                                />
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
                                <TextField
                                    error={state.isError}
                                    fullWidth
                                    id="password"
                                    type="password"
                                    label="Confirmar senha"
                                    placeholder="Confirmar senha"
                                    margin="normal"
                                    helperText={state.helperText}
                                    onChange={handlePasswordChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                            <Box className={classes.elementCenter}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                    className={classes.loginBtn}
                                    onClick={handleLogin}
                                    disabled={state.isButtonDisabled}>
                                    Mentor
                            </Button>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                    className={classes.loginBtn}
                                    onClick={handleLogin}
                                    disabled={state.isButtonDisabled}>
                                    Aluno
                            </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container className={classes.elementCenter} justify="center" alignItems="center" spacing={8}>
                <Grid item xs={12} sm={6} md={6}>
                        <img width="300" src={ImgTeacher} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img width="300" src={imgStudent} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </form>
    );
}

export default Register;