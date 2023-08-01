import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';

const phases = [
  "Create coin and community",
  "Release NSFW NFTs",
  "Tier 2 and tier 3 exchange listings!",
  "Dev doxx at $3 million market cap",
  "Partnership with Elon Musk and X.com",
  "Find the cure to porn-induced erectile dysfunction"
];

const Roadmap = () => {
  return (
    <section id="roadmap">
    <Box sx={{backgroundColor:"#000090", color:"white", fontFamily:"PaytoneOne", marginTop:"-42px", paddingBottom:{xs:"100px", xl:"50px", lg:"0px", sm:"50px", md:"100px"}}}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h2" align="center" sx={{fontFamily:"x"}}>
          <u>ROADMAP</u>
        </Typography>
      </Box>
      <Grid 
        container 
        direction="column" 
        alignItems="center" 
        justifyContent="center" 
        margin="auto"
        my={5}
        px={{ xs: 2, md: 10 }}
        spacing={2}
      >
        {phases.map((phase, index) => (
          <Grid item key={index} 
            container 
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            xs={12}
          >
            <Grid item xs={2} xl={1}>
              <Image
                src="/Assets/Images/coomer-roadmap-icons.png"
                alt={`Phase ${index + 1}`}
                width={60}
                height={60}
                objectFit="contain"
              />
            </Grid>
            <Grid item xs={7} xl={4}>
              <Typography variant="h6" align="left">
                Phase {index + 1}: {phase}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
    </section>
  );
}

export default Roadmap;
