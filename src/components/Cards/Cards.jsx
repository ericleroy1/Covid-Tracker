import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';

import './Cards.css';

function Cards({data: {confirmed, recovered, deaths, lastUpdate}}) {
    if(!confirmed){
        return 'Loading ...'
    }
    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={11} md={3} className='card'>
                    <CardContent  className='infected'>
                        <Typography gutterBottom>Total Cases</Typography>
                        <Typography variant="h4">
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="body2">Number of cumulative cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={11} md={3} className='card'>
                    <CardContent className='deaths'>
                        <Typography gutterBottom>Global Deaths</Typography>
                        <Typography variant="h4">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="body2">Number of cumulative deaths</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={11} md={3} className='card'>
                    <CardContent className='recovered'>
                        <Typography gutterBottom>Recovered</Typography>
                        <Typography variant="h4">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="body2">Number of recovered cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
