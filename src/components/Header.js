import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                <img src="../images/nerd-logo.jpg" width="150px"/>
                <strong>Nerd Shopping</strong>
            </Typography>
            <Button href="/" className="btn bg-dark text-light">Início</Button>
            <Button href="/contato" className="btn bg-dark text-light">Contato</Button>
            <Cart />
            
        </Grid>
    )
}

export default Header;
