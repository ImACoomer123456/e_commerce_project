// src/components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        E-Commerce
                    </Link>
                </Typography>
                <div style={{ marginLeft: 'auto' }}>
                    <Link to="/products" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
                        Products
                    </Link>
                    <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
                        Cart
                    </Link>
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
                        Login
                    </Link>
                    <Link to="/register" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
                        Register
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;