import React, { useContext } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import { DataContext } from '../api/DataContext'
import styles from '../cards/Cards.module.css'
import cx from 'classnames';
const Cards = () => {

    const { data } = useContext(DataContext)



    if (!data.confirmed) {
        return "Loading"
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={data.confirmed} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body'>Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={data.recovered} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" > {data.lastUpdate} </Typography>
                        <Typography variant="body2" > Number of recovered cases from COVID-19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Death </Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={data.deaths} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" > {data.lastUpdate} </Typography>
                        <Typography variant="body2" > Number of death cases in COVID-19</Typography>
                    </CardContent>

                </Grid>

            </Grid>
        </div>
    )

}

export default Cards;