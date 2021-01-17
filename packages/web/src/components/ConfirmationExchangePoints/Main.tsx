import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, ButtonBase, Container, Grid, GridList, Paper, Typography } from '@material-ui/core';

import ImgPack from '../../images/pack.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            display: 'flex',
            flexWrap: 'wrap',
            paddingTop: 100,
            paddingLeft: 50,
            paddingBottom: 40,
            marginRight: `${theme.spacing(0)}`,
            marginBottom: 100,
            background: 'rgba(254, 178, 34, 0.6)',
        },
        titleHeader:{
            fontWeight: 'bold',
            fontSize:35,
            color: '#AE00FF',
            borderBottom: '1px solid black'
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: `${theme.spacing(0)}`,
            marginRight: `${theme.spacing(0)}`,
            marginBottom: 100,
            marginTop: 70
        },
        elementCenter: {
            textAlign: 'center',
        },
        titleItem: {
            fontSize: 25,
        },
        btnSubmit: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 17,
            color: 'white',
            paddingLeft: 30,
            paddingRight: 30,
            background: '#FEB222',
            borderRadius: 50,
            marginTop: 30,
            marginBottom: 10
        },
        points: {
            color: "#AE00FF",
            fontWeight: 'bold',
            fontSize: 25,
        },
        days: {
            color: "#1469E9",
            fontWeight: 'bold',
        },
        box: {
            border: '1px solid #000000',
        }
    })
);
const Main = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.header}>
                <Typography className={classes.titleHeader} component="p">
                    Confira e finalize sua troca
                </Typography>
            </div>
            <div className={classes.container}>
                <Container maxWidth="md">
                    <Grid className={classes.box} container justify="center" alignItems="center" spacing={8}>
                        <Grid item xs={4} sm={12} md={4}>
                            <img width="100%" src={ImgPack} alt="" />
                        </Grid>
                        <Grid item xs={4} sm={12} md={4}>
                            <Typography className={classes.titleItem} component="p">
                                Mochila preta
                        </Typography>
                            <Typography component="p">
                                REF: 0938204
                        </Typography>
                            <Typography component="p">
                                Tamanho Único
                        </Typography>
                            <Typography className={classes.points} component="p">
                                1200 PONTOS
                        </Typography>
                        </Grid>
                        <Grid item xs={4} sm={12} md={4}>
                            <Typography className={classes.titleItem} component="p">
                                Endereço de entrega
                        </Typography>
                            <Typography component="p">
                                João Pedro
                        </Typography>
                            <Typography component="p">
                                Avenida Paulista, 467
                        </Typography>
                            <Typography component="p">
                                São Paulo, SP
                        </Typography>
                            <Typography component="p">
                                CEP: 01311-200
                        </Typography>
                            <Typography component="p">
                                Telefone: 90000-0000
                        </Typography>
                            <Typography className={classes.days} component="p">
                                Entrega em: 10 dias úteis
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.box} container justify="center" alignItems="center" spacing={8}>
                        <Grid item xs={6} sm={12} md={6}>
                            <Typography className={classes.titleItem} component="p">
                                Pontuação total: <span className={classes.points}>1230 pontos</span>
                            </Typography>
                            <Typography className={classes.titleItem} component="p">
                                Total da troca: <span className={classes.points}>1200 pontos</span>
                            </Typography>
                            <Typography className={classes.titleItem} component="p">
                                Pontuação restante: <span className={classes.points}>30 pontos</span>
                            </Typography>
                        </Grid>
                        <Grid className={classes.elementCenter} item xs={6} sm={12} md={6}>
                            <a href="/troca-confirmada"><Button className={classes.btnSubmit}>
                                CONFIRMAR TROCA
                        </Button></a>
                            <Typography component="p">
                                Ao clicar em confirmar, você concorda com os nossos <b>termos de uso</b> de troca de pontos
                        </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Main;