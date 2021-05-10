import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';

function Cards({data: {confirmed, recovered, deaths, lastUpdate}}) {
    if(!confirmed){
        return 'Loading ...'
    }
    // console.log(props.data.confirmed.value);
    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Cases</Typography>
                        <Typography variant="h4">
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary"></Typography>
                        <Typography variant="body2">Number of cumulative cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Global Deaths</Typography>
                        <Typography variant="h4">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary"></Typography>
                        <Typography variant="body2">Number of cumulative deaths</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h4">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary"></Typography>
                        <Typography variant="body2">Number of recovered cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
