import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

const Nfts = () => {
  return (
<>
<section id="nfts">
<Box sx={{backgroundColor:"#000090", color:"white", fontFamily:"PaytoneOne", marginTop:"-42px", paddingBottom:{xs:"100px", xl:"100px", lg:"100px", sm:"50px", md:"50px"}}}>
<Box display="flex" justifyContent="center" alignItems="center">
  <Typography variant="h2" align="center"  sx={{fontFamily:"x"}}>
   <u>NFTs</u>
  </Typography>
</Box>
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', md: 'row' }} 
      alignItems="center" 
      justifyContent="center" 
      margin="auto"
      my={5}
      px={{ xs: 2, md: 10 }}
    >
    <Box marginRight={{ md: 5 }}>
    <img 
        src="/Assets/Images/coomer.gif" 
        alt="Coomer GIF"
        style={{
            width: "100%",
            objectFit: "contain",
            marginTop: "25px", 
            marginBottom: "25px"
        }}
    />
    <Typography variant="body1" align="center" sx={{color:"darkgray", marginTop:"-10px"}} gutterBottom>
        FOMO...
    </Typography>
</Box>

      <Box>
 <Typography sx={{color:"white", fontFamily:"gooey"}} variant="h4" gutterBottom>
          COOMING SOON
        </Typography>
      </Box>
    </Box>
    </Box>
    </section>
    </>
  );
}

export default Nfts;
