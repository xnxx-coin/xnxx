import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';

const TokenMetrics = () => {
    return (
        <section id="sexonomics">
        <Box sx={{backgroundColor:"#000090", marginTop:"-42px", paddingBottom:{xs:"100px", xl:"50px", lg:"100px", sm:"50px", md:"50px"}}}>
            <Grid container>
                <Grid item xl={2.5} lg={1.5} md={0.5} sm={2} xs={1} display={{ xs: 'block', sm:'block', xl: 'block', lg:'block', md:'block'}} />
                <Grid item xl={7} lg={9} md={11} sm={8} xs={10}>
                    <Typography variant="h2" align="center" sx={{paddingTop:"40px", color:"white", fontFamily:"x"}}>
                        <u>SEXONOMICS</u>
                    </Typography>
                    <Grid container justifyContent="center" alignItems="center" mt={3}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} alignItems="center" display="flex" flexDirection="column">
                            <Image src="/Assets/Images/elon-musk.png" alt="Elon Musk" width={400} height={480} />
                            <Typography variant="body1" align="center" sx={{color:"darkgray", marginTop:"10px", paddingBottom:{xs:"40px", xl:"100px"}}} gutterBottom>
                                Elon approves
                            </Typography>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                    <ListItemText primary="Supply: 69,000,000" sx={{color:"white", fontFamily:"PaytoneOne"}} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                    <ListItemText primary="Exchange Wallet + Airdrops + Burns: 10%" sx={{color:"white", fontFamily:"PaytoneOne"}} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                    <ListItemText primary="Liquidity Pool: 90%" sx={{color:"white", fontFamily:"PaytoneOne"}} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                    <ListItemText primary="Contract Renounced" sx={{color:"white", fontFamily:"PaytoneOne"}} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                    <ListItemText primary="Tax: 4%" sx={{color:"white", fontFamily:"PaytoneOne"}} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                    <ListItemText primary="Liquidity locked" sx={{color:"white", fontFamily:"PaytoneOne"}} />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={2.5} lg={1.5} md={0.5} sm={2} xs={1} display={{ xs: 'block', sm:'block', xl: 'block', lg:'block', md:'block'}} />
            </Grid>
        </Box>
        </section>
    );
};

export default TokenMetrics;
