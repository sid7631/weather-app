import { Box, Typography } from '@mui/material'
import React from 'react'

const PreviewBar = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' , padding:'1rem', backgroundColor: 'rgb(247,247,247)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width:'100%' }}>
                <Box>
                    <Typography variant='h6'>
                        Sun
                    </Typography>
                    <Typography variant='subtitle1'>
                        Bangalore, India
                    </Typography>
                </Box>
                <Typography variant="h3">
                    22&#8451;
                </Typography>
            </Box>
        </Box>
    )
}

export default PreviewBar