import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, ButtonBase, Container, Grid, GridList, Paper, Typography } from '@material-ui/core';

import ImgWoman from '../../images/woman.png';

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
        titleHeader: {
            fontWeight: 'bold',
            fontSize: 35,
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
                    Troca realizada!
                </Typography>
            </div>
            <div className={classes.container}>
                <Container maxWidth="md">
                    <Grid container justify="center" alignItems="center" spacing={8}>

                        <Grid item xs={8} sm={12} md={8}>
                            <Typography component="p">
                            Dentro de instantes você receberá a confirmação por e-mail. 
                            </Typography>
                            <Typography component="p">
                                Tamanho Único
                            </Typography>
                            <Typography component="p">
                            O prazo de recebimento do item é de até <b>10 dias úteis</b> a partir do próximo dia útil.
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={12} md={4}>
                            <img width="100%" src={ImgWoman} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Main;