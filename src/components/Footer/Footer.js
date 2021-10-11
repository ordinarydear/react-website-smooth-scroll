import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksWrapper, SocialIcons,  SocialIconLink,SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights} from './FooterElement'

function Footer() {

    function toggleHome() {
        scroll.scrollToTop();
      }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/signnin">How it works</FooterLink>
                                <FooterLink to="/signnin">Testimonials</FooterLink>
                                <FooterLink to="/signnin">Careers</FooterLink>
                                <FooterLink to="/signnin">Investors</FooterLink>
                                <FooterLink to="/signnin">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signnin">Contact</FooterLink>
                                <FooterLink to="/signnin">Support</FooterLink>
                                <FooterLink to="/signnin">Destinations</FooterLink>
                                <FooterLink to="/signnin">Sposorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/signnin">Submit Video</FooterLink>
                                <FooterLink to="/signnin">Ambassadors</FooterLink>
                                <FooterLink to="/signnin">Agency</FooterLink>
                                <FooterLink to="/signnin">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signnin">Instragram</FooterLink>
                                <FooterLink to="/signnin">Facebook</FooterLink>
                                <FooterLink to="/signnin">Youtube</FooterLink>
                                <FooterLink to="/signnin">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>baht</SocialLogo>
                        <WebsiteRights>© Baht Exchange Inc. All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_bank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_bank" aria-label="Instragram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_bank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_bank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_bank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
