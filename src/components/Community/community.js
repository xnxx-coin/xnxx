import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from '@mui/material/Link';


const Community = () => {
  return (
<>
<section id="community">
<Box sx={{backgroundColor:"#000090", color:"white", fontFamily:"PaytoneOne", marginTop:"-42px", paddingBottom:{xs:"100px", xl:"100px", lg:"100px", sm:"50px", md:"50px"}}}>
<Box display="flex" justifyContent="center" alignItems="center">
  <Typography variant="h2" align="center"  sx={{fontFamily:"x"}}>
   <u>COMMUNITY</u>
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
        <Image 
          src="/Assets/Images/average-xnxx-holder.png" 
          alt="Average XNXX Holder Image"
          width={250} 
          height={435} 
          objectFit="contain"
          style={{marginTop:"25px", marginBottom:"25px"}} 
        />
        <Typography variant="body1" align="center" sx={{color:"darkgray", marginTop:"-10px"}} gutterBottom>
          Average XNXX holder
        </Typography>
      </Box>
      <Box 
        display="flex"
        flexDirection="column" 
        alignItems={{ xs: 'center', md: 'start' }}
        textAlign={{ xs: 'center', md: 'start' }}
      >
<Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
    <Box bgcolor="darkblue" borderRadius="50%" p={0} color="white" display="flex" alignItems="center" justifyContent="center" width={120} height={60} component="a" target="_blank" href="https://twitter.com/XNXX_SOL" rel="noopener noreferrer">
    <Box bgcolor="darkblue" borderRadius="50%" p={0} color="white" display="flex" alignItems="center" justifyContent="center" width={120} height={60}>
        <TwitterIcon fontSize="large" />
        <Typography variant="h5" component="span" style={{ marginLeft: '10px' }}>
            Twitter
        </Typography>
    </Box>
    </Box>
    <Box bgcolor="darkblue" borderRadius="50%" p={0} color="white" display="flex" alignItems="center" justifyContent="center" width={120} height={60} component="a" target="_blank" href="https://t.me/xnxx690000" rel="noopener noreferrer" style={{ marginTop: '10px' }}>
        <TelegramIcon sx={{marginLeft:"22px"}} fontSize="large" />
        <Typography  variant="h5" component="span" style={{ marginLeft: '10px' }}>
            Telegram
        </Typography>
    </Box>
</Box> <Typography variant="h4" gutterBottom>
          Join our community of COOMERS!
        </Typography>
      </Box>
    </Box>
    </Box>
    </section>
    </>
  );
}

export default Community;
