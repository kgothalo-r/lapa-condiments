import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Image, Button, Explore, Cart } from './Header.styles';
import { Grid } from '@material-ui/core';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Logo from '../../images/lapa.png'

const Header = ({cart}) => {

    const [mobile, setMobile] = useState(false);
    const viewMobile = () => setMobile(!mobile);

    const displayNavbar = () => (
        <Explore>
            <Link to='/'><Button className='menu'>Home</Button></Link>
            <Button className='menu'>About</Button>
            <Button className='menu'>Products</Button>
            <Button className='menu'>Contact</Button>  
        </Explore>
    );

    return (
        <Wrapper>
            <Grid container>
                <Grid item xs={2} md={2} lg={2}>
                    <Link to='/'>
                        <Image src={Logo} alt='' />
                    </Link>
                </Grid>
                <Grid container xs={10} md={10} lg={10}>
                    <Grid item xs={8} sm={8} md={11} lg={11}>
                    {window.matchMedia("(max-width: 768px)").matches ? (
                        mobile ? (displayNavbar()) 
                        : null)
                        :(displayNavbar())
                    }

                    </Grid>
                    <Grid item xs={4} sm={4} md={1} lg={1}>
                    <Link to='/cart'><Cart><LocalMallOutlinedIcon/>{cart.length}</Cart></Link>
                        <button className="nav" onClick={viewMobile}>{mobile ? <MenuOpenIcon/> : <MenuIcon/>}</button>
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default Header;