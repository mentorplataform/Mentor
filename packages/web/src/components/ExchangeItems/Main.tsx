import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, ButtonBase, Container, Grid, GridList, Paper, Typography } from '@material-ui/core';

import ImgPack from '../../images/pack.png';

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
        elementCenter: {
            textAlign: 'center',
        },
        titleItem: {
            fontSize: 25,
        },
        btnSubmit: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 15,
            color: 'white',
            paddingLeft: 30,
            paddingRight: 30,
            background: '#FEB222',
            borderRadius: 50,
            marginTop: 30
        }
    })
);
const Main = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container maxWidth="md">
                <Grid container justify="center" alignItems="center" spacing={8}>
                    <Grid item xs={6} sm={12} md={6}>
                        <img src={ImgPack} alt="" />
                    </Grid>
                    <Grid item xs={6} sm={12} md={6}>
                        <Typography className={classes.titleItem} component="p">
                            Mochila preta com bolsos laterais
                        </Typography>
                        <Typography component="p">
                            REF: 0938204
                        </Typography>
                        <Typography component="p">
                            Tamanho Único
                        </Typography>
                        <Button className={classes.btnSubmit}>
                            Trocar pontos
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography className={classes.titleItem} component="p">
                            Descrição do produto
                        </Typography>
                        <Typography component="p">
                            Com a mochila você transporta tudo o que precisa para os seus treinos na academia e dia e dia. Leve e resistente, possui compartimento principal espaçoso e bolsos práticos.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={12} md={6}>
                        <Typography component="p">
                            Gênero: Unissex
                        </Typography>
                        <Typography component="p">
                            Indicado para: Dia a Dia
                        </Typography>
                        <Typography component="p">
                            Dimensões Aproximadas: 31 x 45 x 18 (LxAxP) cm
                        </Typography>
                        <Typography component="p">
                            Alça: Ajustável
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={12} md={6}>
                        <Typography component="p">
                            Composição: 100% Poliéster
                        </Typography>
                        <Typography component="p">
                            Estilo da Peça: Lisa
                        </Typography>
                        <Typography component="p">
                            Compartimento: Bolso interno/ Bolso externo
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Main;