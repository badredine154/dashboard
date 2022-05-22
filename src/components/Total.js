import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Total = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 20, sm: 4, md: 7 }}>
                <Grid item xs={6}>
                    <Item>
                        <Typography variant="h5" gutterBottom component="div">
                            Total Revenue
                        </Typography>
                        <Typography style={{ fontWeight: 800, color: 'black' }} variant="h4" gutterBottom component="div">
                            TND 678,345
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Typography variant="h5" gutterBottom component="div">
                            Total Properties
                        </Typography>
                        <Typography style={{ fontWeight: 800, color: 'black' }} variant="h4" gutterBottom component="div">
                            11,512
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Typography variant="h5" gutterBottom component="div">
                            Total Properties for sale
                        </Typography>
                        <Typography style={{ fontWeight: 800, color: 'black' }} variant="h4" gutterBottom component="div">
                            7,430
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Typography variant="h5" gutterBottom component="div">
                            Total Properties for rent
                        </Typography>
                        <Typography style={{ fontWeight: 800, color: 'black' }} variant="h4" gutterBottom component="div">
                            4,082
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Total;