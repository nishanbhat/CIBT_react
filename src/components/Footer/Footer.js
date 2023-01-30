import React from 'react'
import {
  FooterWrapper,
  FooterBodyWrapper,
  LogoWrapper,
  CopyRightWrapper,
  QuicklinksListWrapper,
  ContactsListWrapper,
  ListTextWrapper,
  ListIconWrapper,
  FooterIconsWrapper,
  ContactsDivWrapper
} from "./Footer.style";

export default function Footer() {
  return (
<FooterWrapper>
        <FooterBodyWrapper>
            <LogoWrapper>
                <img src="http://localhost:3000/assets/imgs/short-info-logo.jpg" alt="logo"/>
            </LogoWrapper>
            <div class="quicklinks">
                <div class="title-quicklinks">
                    <b>Quicklinks</b>
                </div>
                <div>
                    <QuicklinksListWrapper>
                        <a href="/index.html">
                            <li>Home</li>
                        </a>
                        <a href="#course">
                            <li>Courses</li>
                        </a>
                        <a href="#videos">
                            <li>Videos</li>
                        </a>
                        <a href="#blogs">
                            <li>Blogs</li>
                        </a>
                        <a href="#events">
                            <li>Events</li>
                        </a>
                        <a href="#contacts">
                            <li>Contact Us</li>
                        </a>
                        <a href="#about">
                            <li>About Us</li>
                        </a>
                    </QuicklinksListWrapper>
                </div>
            </div>
            <div class="contacts">
                <div class="title-contacts">
                    <b>Contacts</b>
                </div>
                <ContactsDivWrapper>
                    <ContactsListWrapper>
                        <ListIconWrapper>
                            <i class="fa-solid fa-phone-volume"></i>
                        </ListIconWrapper>
                        <ListTextWrapper>+977 01-6922971,01-6922964</ListTextWrapper>
                    </ContactsListWrapper>
                    <ContactsListWrapper>
                        <ListIconWrapper>
                            <i class="fa-regular fa-envelope"></i>
                        </ListIconWrapper>
                        <ListTextWrapper>
                            <a href="mailto:enquire@creators.institute">
                                enquire@creators.institute
                            </a>
                        </ListTextWrapper>
                    </ContactsListWrapper>
                    <ContactsListWrapper>
                        <ListIconWrapper>
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </ListIconWrapper>
                        <ListTextWrapper>
                            <a href="https://www.google.com/maps/dir/27.6704274,85.3239596/Creators+Institute+of+Business+%26+Technology,+Purnachandi+Marg,+Lalitpur+00977/@27.6714618,85.3174357,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39eb1962b03b201d:0x17d6a184b0729dd8!2m2!1d85.3190182!2d27.671691">
                                Kumaripati
                                    Lalitpur, Nepal
                            </a>
                        </ListTextWrapper>
                    </ContactsListWrapper>
                    <FooterIconsWrapper>
                        <a href="https://creators.institute/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.google.com/">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://fontawesome.com/icons/linkedin?s=&f=brands">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </FooterIconsWrapper>
                </ContactsDivWrapper>
            </div>
        </FooterBodyWrapper>
        <CopyRightWrapper>
            Copyright © 2022 Creators Institute of Business & Technology. All Rights Reserved.
        </CopyRightWrapper>
    </FooterWrapper>  )
}
