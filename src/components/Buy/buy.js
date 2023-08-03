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
            <Typography variant="h6"><b>Contract Address:</b></Typography>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
  <Typography variant="body1" align="left" sx={{paddingTop:"20px", width:"80%", lineHeight:"2"}}>
    <b>How to Buy:</b>
    <br/>
    1. Download the Metamask extension and create an account at <a href="https://metamask.io/" target="_blank" rel="noreferrer" style={{color:"white"}}>MetaMask.io</a>.
    <br/>
    2. Add the Binance Smart Chain to your MetaMask following the guide at <a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_blank" rel="noreferrer" style={{color:"white"}}>Binance Academy: Connecting Metamask</a>.
    <br/>
    3. Switch your MetaMask network to use the Binance Smart Chain and add some BNB to your MetaMask address.
    <br/>
    4. Navigate to PancakeSwap or another DEX and input the XNXX contract address.
    <br/>
    5. Set your slippage tolerance and the amount you want to swap, then confirm the swap.
    <br/>
    6. Confirm the transaction in MetaMask.
  </Typography>
</div>

        </Box>
      </Box>
    </section>
  );
}

export default Buy;
