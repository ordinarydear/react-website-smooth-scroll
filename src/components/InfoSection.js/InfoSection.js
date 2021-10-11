import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, BtnWrapper, Subtitle, Img, ImgWrap} from './InfoElement'
import { Button  } from '../ButtonElement'

function InfoSection(props) {
    
    return (
        <>  
            <InfoContainer lightBg={props.lightBg} id={props.id}>
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{props.topLine}</TopLine>
                                <Heading lightText={props.lightText}>{props.headLine}</Heading>
                                <Subtitle lightTextDesc={props.lightTextDesc}>{props.description}</Subtitle>
                                <BtnWrapper>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                    offset={-80} 
                                    primary={props.primary ? 1 : 0} 
                                    dark={props.dark ? 1 : 0}>
                                        {props.buttonLabel}
                                    </Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection
