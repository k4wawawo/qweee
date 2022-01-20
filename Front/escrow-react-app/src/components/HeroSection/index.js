import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HBg,
        VideoBg, HeroContent,
        HeroH1, HeroP,
        HeroBtnWrapper, ArrowForward, 
        ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false);
  
    const onHover = () => {
      setHover(!hover)
    }
  
    return (
        <HeroContainer>
            <HBg>
            <VideoBg
              autoPlay
              loop
              muted
              src={Video}
              type='/Video/mp4'
              />
            </HBg>
            <HeroContent>
            <HeroH1> Escrow Third party services</HeroH1>
            
            <HeroP>With Escrow.com you can buy and sell anything safely without the risk of chargebacks. Trutly secure payments.
                    <br />
                    Get access to our exclusive app that allows you to buy or sell 
                       any product and paiement via BTC with minimal risk of losing funds.
    
            </HeroP>
            <HeroBtnWrapper>
             <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} 
                        primary='true' dark='true'  duration={500}    
                            smooth="true" exact='true' offset={-80}>
                                Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
