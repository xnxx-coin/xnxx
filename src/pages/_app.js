import { useState, useEffect, useRef } from 'react';
import Cursor from '@/components/Cursor/cursor.js';
import Title from '@/components/Title/title.js';
import { Helmet } from 'react-helmet';
import About from '@/components/About/about.js';
import Roadmap from '@/components/Roadmap/roadmap.js';
import TokenMetrics from '@/components/Token Metrics/token-metrics.js';
import Header from '@/components/Header/header.js';
import Footer from '@/components/Footer/footer.js';
import Memes from '@/components/Memes/memes.js';
import Nfts from '@/components/NFTs/nfts.js';
import Buy from '@/components/Buy/buy.js';
import Community from '@/components/Community/community.js';
import CursorTrail from '@/components/Cursor/cursorTrail.js';
import '@/styles/global.scss';
import Modal from 'react-modal';
import { Typography } from '@mui/material';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      zIndex                 : "10000"
    }
};

export default function App({ Component, pageProps }) {

    useEffect(() => {
        Modal.setAppElement('body');
      }, []);

    const [videoHeight, setVideoHeight] = useState(0);

    useEffect(() => {
      const resizeListener = () => {
        // take width and height from the window object
        const { innerHeight } = window;
        setVideoHeight(innerHeight);
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);
  
      // call the function initially to update width and height once to get initial values
      resizeListener();
  
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, []);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false); // to keep track if audio has been played once
    const audio = useRef(null);

    useEffect(() => {
        setIsOpen(true);
        // Create the Audio object here:
        audio.current = new Audio('/Assets/Audio/orgasmo.mp3');
    }, []);

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        const playAudio = () => {
            if (!isPlayed) {
                audio.current.play();
                setIsPlayed(true); // set it to true once the audio has been played
            }
        }

        window.addEventListener('click', playAudio);

        return () => {
            window.removeEventListener('click', playAudio);
        }
    }, [isPlayed]);

    return (
        <>            <Helmet>
        <title>XNXX Coin</title>
        <meta name="description" content="Free porn, sex, NFTs and crypto!" />
        {/* Add more head tags as required */}
    </Helmet>
            <CursorTrail/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Coomer Modal"
                shouldCloseOnOverlayClick={false} // Prevent modal from closing when clicking outside of it
            >    <h1>Please confirm the following. 1) You are 18+ 2) You want to become rich quickly</h1>
                <button style={{backgroundColor: 'green', color: 'white', fontFamily: 'PaytoneOne', margin: '10px', paddingTop:"5px", paddingBottom:"5px"}} onClick={closeModal}>
                    Yes, I am a degenerate COOMER
                </button>
                <button style={{backgroundColor: 'red', color: 'white', fontFamily: 'PaytoneOne', margin: '10px', paddingTop:"5px", paddingBottom:"5px"}} onClick={() => window.open('https://www.xnxx.com/video-y1uh1bd/nude_protest_in_front_of_tesla_gigafactory_berlin_pornshooting_against_elon_musk', '_blank')}>
                    No, I am a degenerate COOMER
                </button>
            </Modal>
            <Cursor/>
            <Title/>
            <Header/>
            <About/>
            <TokenMetrics/>
            <Roadmap/>
            <Buy/>
            <Nfts/>
            <Community/>
            <Memes/>
            <Footer/>
        </>
    );
}
