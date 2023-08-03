import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from '@mui/material/Link';
import styles from './header.module.scss';


const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {['About', 'Sexonomics', 'Roadmap', 'Buy', 'NFTs', 'Community'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="static" sx={{backgroundColor:"#004be8"}}>
        <Toolbar>
          {/* <Box className={styles["logo"]}>
            <Image src="/Assets/Images/xnxx-banner.png" alt="Logo" width={393} height={75} />
          </Box> */}
          {isMobile ? (
    <Box className={styles["title"]}>
    <Link className={styles["link-cope"]} style={{marginRight:"15px"}} href="#about" color="inherit" underline="none">
        <Typography sx={{fontFamily:"x", paddingBottom:"5px", borderBottom: "solid 2px transparent", '&:hover': {borderBottom: "solid 2px white"}}} variant="body1">ABOUT</Typography>
    </Link>
    <Link className={styles["link-cope"]} style={{marginRight:"15px"}}  href="#sexonomics" color="inherit" underline="none">
        <Typography sx={{fontFamily:"x", paddingBottom:"5px", borderBottom: "solid 2px transparent", '&:hover': {borderBottom: "solid 2px white"}}}variant="body1">SEXONOMICS</Typography>
    </Link>
    <Link className={styles["link-cope"]} style={{marginRight:"15px"}}  href="#roadmap" color="inherit" underline="none">
        <Typography sx={{fontFamily:"x", paddingBottom:"5px", borderBottom: "solid 2px transparent", '&:hover': {borderBottom: "solid 2px white"}}} variant="body1">ROADMAP</Typography>
    </Link>
    <Link className={styles["link-cope"]} style={{marginRight:"15px"}} href="#buy" color="inherit" underline="none">
  <Typography sx={{fontFamily:"x", paddingBottom:"5px", borderBottom: "solid 2px transparent", '&:hover': {borderBottom: "solid 2px white"}}} variant="body1">BUY</Typography>
</Link>

    <Link className={styles["link-cope"]} style={{marginRight:"15px"}}  href="#nfts" color="inherit" underline="none">
        <Typography sx={{fontFamily:"x", paddingBottom:"5px", borderBottom: "solid 2px transparent", '&:hover': {borderBottom: "solid 2px white"}}} variant="body1">NFTs</Typography>
    </Link>
    <Link className={styles["link-cope"]} style={{marginRight:"15px"}}  href="#community" color="inherit" underline="none">
        <Typography sx={{fontFamily:"x", paddingBottom:"5px", borderBottom: "solid 2px transparent", '&:hover': {borderBottom: "solid 2px white"}}} variant="body1">COMMUNITY</Typography>
    </Link>
    <Link className={styles["link-cope"]} style={{marginRight:"15px"}}  href="#memes" color="inherit" underline="none">
        <Typography sx={{fontFamily:"x", paddingBottom:"5px", borderBottom: "solid 2px transparent", '&:hover': {borderBottom: "solid 2px white"}}} variant="body1">MEMES</Typography>
    </Link>
</Box>

          ) : (
            <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            {/* <Box className={styles["logo"]}>
            <Image src="/Assets/Images/xnxx-banner.png" alt="Logo" width={314} height={60} />
          </Box>  */}
          </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        position="sticky"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            BackdropProps: {
              invisible: true
            },
        }}
        PaperProps={{
            sx: {
              background: '#000063',
              width: '200px',
              color:'white',
            },
          }}
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default Header;
