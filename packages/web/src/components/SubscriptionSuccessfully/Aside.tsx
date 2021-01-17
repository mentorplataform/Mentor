import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AccessTime, PersonOutlineOutlined } from '@material-ui/icons';
import { Box, Container, Grid, GridList, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { relative } from 'path';

import ImgTeacher from '../../images/teacher.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100%',
            height: 120,
            background: 'rgba(254,178,34, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            paddingLeft: 50,
            paddingTop: 100
        },
        textFirst: {
            fontSize: 48,
            color: '#AE00FF',
        },
        textSecond: {
            fontSize: 36,
            color: '#5B92E5',
            marginBottom: 20
        },
        elementCenter: {
            textAlign: 'center',
        },
        list: {
            display: 'inline',
            fontSize: 24,
            marginRight: 30
        },
        icon: {
            fontSize: 34,
            marginRight: 5
        },
        wrapIcon: {
            verticalAlign: 'middle',
            display: 'inline-flex',
            fontSize: 19,
        },
        info: {
            marginTop: 10
        },
        extraInfo: {
            position: 'absolute',
            marginTop: 200,
            paddingLeft: 50,
        },
        textHours: {
            fontSize: 36,
            color: '#FEB222'
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


const Aside = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.container}>
                <div>
                    <div className={classes.textFirst}>Lorem ipsum dolor sit amet, consectetur</div>
                    <div className={classes.textSecond}>Lorem ipsum dolor sit amet, consectetur </div>
                    <hr />
                    <div className={classes.info}>
                        <ul>
                            <li className={classes.list}>
                                <Typography variant="subtitle1" className={classes.wrapIcon}>
                                    <PersonOutlineOutlined className={classes.icon} /> Nome do Professor
                            </Typography>
                            </li>
                            <li className={classes.list}>
                                <Typography variant="subtitle1" className={classes.wrapIcon}>
                                    <AccessTime className={classes.icon} /> Tempo de curso: 5 aulas de 30 minutos
                            </Typography>
                            </li>
                        </ul>
                    </div>
                </div>
            </Box>
            <Box className={classes.extraInfo}>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <Typography variant="subtitle1" className={classes.textHours}>
                            Sua inscrição foi confirmada!
                </Typography>
                        <Typography variant="p">
                            Você receberá mais informações no e-mail ou em “meus cursos”
                </Typography>
                    </Grid>
                    <Grid item md={4}>
                         <img width="100%" src={ImgTeacher} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Aside;