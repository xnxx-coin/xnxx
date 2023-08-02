import { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';

const Memes = () => {
    const [videoHeight, setVideoHeight] = useState('0px');

    useEffect(() => {
      // calculate height based on viewport width and aspect ratio
      const height = window.innerWidth / 3.2;
      setVideoHeight(`${height}px`);
    }, []);

    const fileNames = [
        "stay-focused.png",
        "coomer - pornhub vs xnxx.png",
        "elon musk - goth.png",
        "type of person.png",
        "sticker 2- chad XNXX coin holder.png",
        "sticker 4 - Resisting the urge.png",
        "sticker 5 - Peter Thiel and Elon Musk.png",
        "sticker 6 - porn meme.png",
        "ass.png",
        "coomer - instant gratification.png"
    ];

    return (
        <><section id="memes">
            <Box sx={{backgroundColor:"#000090", color:"white", fontFamily:"PaytoneOne", marginTop:"-42px", paddingBottom:{xs:"100px", xl:"100px", lg:"0px", sm:"50px", md:"100px"}}}>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
    <Typography variant="h2" align="center" sx={{fontFamily:"x", marginBottom:"50px"}}>
        <u>MEMES</u>
    </Typography>

    {/* <Typography variant="h6" align="center" sx={{fontFamily:"PaytoneOne", marginTop:"25px", marginBottom:"50px"}}>
        Below is a pastiche of art and memes that help to encapsulate what XNXX coin is about.
    </Typography> */}
</Box>
                <Box position="relative">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        src="/Assets/Animations/fly.webm" 
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            objectFit: "cover",
                            zIndex: 1
                        }}
                    />
                    {/* <video 
                        autoPlay 
                        loop 
                        muted 
                        src="/Assets/Animations/fly2.webm" 
                        style={{
                            position: "absolute",
                            top: `${videoHeight}`, 
                            left: "0",
                            width: "100%",
                            objectFit: "cover",
                            zIndex: 1,
                        }}
                    /> */}
                    <Grid container spacing={2} style={{position: "relative", zIndex: 0}}>
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                                <Box sx={{backgroundColor:"white", height:"400px",  overflowY: "auto", border:"solid 20px yellow"}}>
                                    <Typography sx={{color:"black", fontFamily:"notepad", padding:"25px"}}>
                                “Think about it logically, the optics on this coin are too fucking good. It combines Elon Musk, porn and the coomer meme. There is so much memetic potential here.  This shitcoin is meta-on-meta-on-meta with enough layers of irony to make a Rick and Morty episode look cute.
<br/><br/>
And I guarantee every coin you “invested” in prior to XNXX has blown their load too early and dumped prematurely. XNXX is the embodiment of “death grip” syndrome, it will keep POOMPING  and POOMPING with no release for an indefinite period. Once the train takes off, no one can stop the will of the COOMER”

 <br/> <br/>Anonymous COOMER (Mystery XNXX whale holder) <br/>
 </Typography>
                                </Box>
                            </Grid>
                        {fileNames.map((fileName, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Image src={`/Assets/memes/${fileName}`} alt={fileName} layout="responsive" width={500} height={300} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            </section>
        </>
    );
};

export default Memes;
