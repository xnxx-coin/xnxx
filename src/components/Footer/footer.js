import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%', 
        color: 'white',
        backgroundColor:'#000048',
        py: 3, // padding Y-axis
        marginTop:"-20px",
        paddingTop:"45px"
      }}
    >
      <Container maxWidth="sm">
        {/* <Typography sx={{fontFamily:"verdana"}} variant="body1" align="center">
          This is a generic footer content.
        </Typography> */}
        <Typography sx={{fontFamily:"verdana", marginTop: '10px'}} variant="body2" color="inherit" align="center">
          © {new Date().getFullYear()} XNXX Coin Official
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
          <Link sx={{fontFamily:"verdana", marginRight: '15px'}} href="#" color="inherit" underline="none">
            <Typography variant="body2">Twitter</Typography>
          </Link>
          <Link sx={{fontFamily:"verdan"}} href="#" color="inherit" underline="none">
            <Typography variant="body2">Telegram</Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
