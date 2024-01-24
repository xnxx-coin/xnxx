import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';

const Buy = () => {
  return (
    <section id="buy">
      <Box sx={{
        backgroundColor:"#000090", 
        color:"white", 
        fontFamily:"verdana", 
        marginTop:"0px", 
        paddingBottom:{xs:"100px", xl:"50px", lg:"0px", sm:"50px", md:"50px"}
      }}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{marginTop:"-42px", paddingBottom:{xs:"100px", xl:"50px", lg:"100px", sm:"50px", md:"100px"}}}>
          <Typography variant="h2" align="center" sx={{paddingTop:"40px",  fontFamily:"x", marginBottom:"25px"}}>
            <u>BUY</u>
          </Typography>
          <div style={{backgroundColor:"#000090", alignItems:"center", display:"flex", justifyContent:"center"}}>
            <Typography variant="h6"><b>Contract Address: tkxs8g52pV8D1hCrszQeNab2pBJMA7oGNYzKeoYCGU9</b></Typography>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
  <Typography variant="body1" align="left" sx={{paddingTop:"20px", width:"80%", lineHeight:"2"}}>
    <b>How to Buy:</b>
    <br/>
    1. Download a Solana compatible wallet such as Phantom <a href="https://phantom.app/download" target="_blank" rel="noreferrer" style={{color:"white"}}>phantom.app/download</a>.
    <br/>
    2. Visit the following link on Raydium exchange <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=tkxs8g52pV8D1hCrszQeNab2pBJMA7oGNYzKeoYCGU9&outputSymbol=XNXX&fixed=in" target="_blank" rel="noreferrer" style={{color:"white"}}>BUY here</a>.
  </Typography>
</div>

        </Box>
      </Box>
    </section>
  );
}

export default Buy;
