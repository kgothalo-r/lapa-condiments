import React from 'react';
import {Wrapper, Image, Info} from './Hero.styles';
import Main from '../../images/fist.jpg'
import { Grid } from '@material-ui/core';

const HeroSection = () =>{
    return(
    <Wrapper>
        <Grid container lg={12} md={12} sm={12} xs={12}>
            <Grid item lg={7} md={7} sm={12} xs={12}>
                <Image src={Main} alt=''/>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Info>
                    <p>Exercitation elit proident esse sunt qui dolore commodo velit eiusmod esse nulla et. Sunt labore labore culpa consequat quis amet nulla cupidatat ullamco culpa dolor deserunt velit aute.</p>
                </Info>
            </Grid>
        </Grid>
    </Wrapper>
    )
}

export default HeroSection;