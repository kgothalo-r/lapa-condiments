import React from 'react';
import { Wrapper, Contact, Info, Socials } from './Footer.styles';
import { Grid } from '@material-ui/core';
import {Instagram, Facebook, Twitter, WhatsApp} from '@material-ui/icons';

const Footer = ({setName, setEmail, submitContact}) => (
    <Wrapper>
        <Grid container xs={12} md={12} lg={12} xl={12}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Contact>
                    <h2>Get In Contact With Us</h2>

                    <p>Name and Surname</p>
                    <input type='text' placeholder='Enter Name And Surname...'
                    onChange={(e) => {
                        setName(e.target.value)
                    }}></input>
                    <p>Email</p>
                    <input type='textarea' placeholder='Enter Email Address'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>

                    <button onClick={submitContact}>Submit</button>
                </Contact>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Info>
                    <h2>INFORMATIONS</h2>
                    <p>Latest</p>
                    <p>Shipping Info</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                            <Socials><Instagram/></Socials>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                            <Socials><Facebook/></Socials>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                            <Socials><WhatsApp/></Socials>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                            <Socials><Twitter/></Socials>
                        </Grid>
                    </Grid>
                </Info>
            </Grid>
        </Grid>
    </Wrapper>
);

export default Footer;