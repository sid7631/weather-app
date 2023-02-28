import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Stack direction='row' spacing={{ xs: 1, sm: 2, md: 2 }} alignItems='center' marginBottom={4}>
                <FilterDramaIcon sx={{ backgroundColor: 'white', border: '1px solid #eaeaea', borderRadius: '50%', padding: 1, color: 'orange' }} />
                <Stack >
                    <Typography variant='subtitle1' fontWeight='500'>
                        Weather
                    </Typography>
                    <Typography variant='body2'>
                        What's the weather
                    </Typography>
                </Stack>
            </Stack>
            <Stack marginBottom={4}>
                <Stack direction='row'>
                    <Typography variant='h3' component='span'> 22&#8451; </Typography>
                    <Typography variant='subtitle2' component='span' sx={{padding:'0 6px', border:'1px solid #eaeaea', borderRadius:'10px' ,height:'fit-content', backgroundColor:'white'}}>11&#8451; </Typography>
                </Stack>
                <Typography variant='subtitle1'>
                    Partial Cloudy
                </Typography>
            </Stack>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function SimpleCard() {
    return (
        <Card variant="outlined" sx={{ width: '100%', height: '100%', borderRadius: 6, padding: '1rem' }}>{card}</Card>
    );
}