import React from 'react'
import styles from './Cards.module.css'
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 100,
        background: '#83a3ca42',
        color: '#f5f4f4',
        fontFamily: 'Abel',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    comp: {
        padding: 0
    },
});


const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    const classes = useStyles();
    if (!confirmed) {
        return 'Loading...';
    }

    // console.log(props)
    return (
        <div className={styles.container}>
            <Grid container spacing={2} justify='center' alignItems='center' className={classes.comp}>

                <Grid item xs={12} sm={3} md={3} className={cx(styles.card, styles.infected, classes.comp)}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent >
                            <Typography gutterBottom variant='h6'>
                                INFECTED
                        </Typography><Typography variant='h5'>
                                <CountUp start=
                                    {0}
                                    end={confirmed.value}
                                    duration={2.5}
                                    separator=','
                                />
                            </Typography>
                            <Typography variant='caption'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'  > ACTIVE CASES</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3} sm={3} className={cx(styles.card, styles.recovered)}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent >
                            <Typography gutterBottom variant='h6'>
                                RECOVERED
                        </Typography><Typography variant='h5'>
                                <CountUp start=
                                    {0}
                                    end={recovered.value}
                                    duration={2.5}
                                    separator=','
                                />
                            </Typography>
                            <Typography variant='caption'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'  > RECOVERED CASES</Typography>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={3} md={3} className={cx(styles.card, styles.deaths)}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent >
                            <Typography gutterBottom variant='h6'>
                                DEATHS
                        </Typography><Typography variant='h5'>
                                <CountUp start=
                                    {0}
                                    end={deaths.value}
                                    duration={2.5}
                                    separator=','
                                />
                            </Typography>
                            <Typography variant='caption'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'  > DEATHS CASES</Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards