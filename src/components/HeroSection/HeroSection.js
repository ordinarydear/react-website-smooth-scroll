import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroSectionElement'
import { Button } from '../ButtonElement'

function HeroSection() {

    const [hover, setHover] = useState(false)

    function onHover() {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virture Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and recieve ฿500 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary dark> 
                    Get started {hover ? <ArrowForward /> : <ArrowRight />} </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>

    )
}

export default HeroSection
