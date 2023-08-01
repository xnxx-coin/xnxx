import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about">
    <Box sx={{backgroundColor:"#000090", color:"white", fontFamily:"verdana", marginTop:"0px", paddingBottom:{xs:"100px", xl:"50px", lg:"0px", sm:"50px", md:"50px"}}}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h2" align="center" sx={{paddingTop:"40px",  fontFamily:"x"}}>
          <u>ABOUT</u>
        </Typography>
      </Box>
      <Grid container px={{ xs: 0, sm: 0, md: 10 }}>
        <Grid item xs={3} sm={4} md={2} lg={2} xl={3} /> {/*Empty Grid Cell*/}

        <Grid item xs={8} sm={8} md={3} lg={3} xl={2}>
          <Box marginRight={{ md: 5, lg:0 }}>
            <Image 
              src="/Assets/Images/this-ugly-son-of-a-bitch.png" 
              alt="About Us Image"
              width={250} 
              height={435} 
              objectFit="contain"
              style={{marginTop:"25px", marginBottom:"25px"}} 
            />
          </Box>
        </Grid>

        <Grid item xs={1} sm={2} md={1.5} lg={0.5} xl={1} sx={{display:{md:'block', sm:'block', xs:'block', lg:'block', xl:'block'}}} /> {/*Empty Grid Cell*/}
        <Grid item xs={2} sm={false} md={false} lg={false} xl={false} sx={{display:{md:'none', sm:'none', xs:'block', lg:'none', xl:'none'}}} /> {/*Empty Grid Cell*/}

        <Grid item xs={9} sm={8} md={3.5} lg={4} xl={4}>
          <Box 
            display="flex"
            flexDirection="column" 
            sx={{marginTop:{xl:"150px", lg:"100px", md:"50px"}}}
          >
            <Typography sx={{fontFamily:"verdana"}} variant="body1">
              Following the rebranding of Twitter as X.com, many users made the association between "X" and prominent pornographic site domains. Subsequently, an explosion of X-rated memes were posted and memetic power was generated. </Typography>
            <Typography sx={{fontFamily:"verdana"}} variant="body1" marginTop={2}>
              XNXX coin brings together degenerate shitcoin investors, coomers, and Elon Musk fans while capitalising off of the recent Twatter re-brand.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={1} sm={2} md={2} lg={2} xl={2} /> {/*Empty Grid Cell*/}
      </Grid>
    </Box>
    </section>
  );
}

export default About;
