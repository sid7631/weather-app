import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import AppBar from '../components/AppBar'
import PreviewBar from '../components/PreviewBar'
import SimpleCard from '../components/SimpleCard'

const Dashboard = () => {
    return (
        <div>
            <Grid container columns={{ xs: 4, sm: 12, md: 12 }}>
                <Grid item xs={2} sm={9} md={9} sx={{ padding: '1rem' }} >
                    <AppBar />
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 2 }}
                    >
                        <SimpleCard />
                        <SimpleCard />
                    </Stack>
                </Grid>
                <Grid item xs={2} sm={3} md={3} >
                    <PreviewBar />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard