import React, { useContext, useState } from 'react';
import { Container, Typography, Grid, IconButton, useTheme, Badge, Button, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import { ThemeContext } from './context/ThemeContext.jsx';
import { useSelector } from 'react-redux';

function App() {
    const theme = useTheme();
    const { toggleTheme } = useContext(ThemeContext);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { items } = useSelector((state) => state.cart);
    
    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };
    
    return (
        <Container>
            <Typography variant="h3" component="h1" align="center" sx={{ my: 4 }}>
                Интернет-магазин
            </Typography>
            <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 2 }}>
                <IconButton onClick={toggleTheme}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <IconButton 
                    onClick={toggleCart} 
                    sx={{ 
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                        bgcolor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5',
                        '&:hover': {
                            bgcolor: theme.palette.mode === 'dark' ? '#444' : '#e0e0e0',
                        }
                    }}
                >
                    <Badge badgeContent={items.length} color={theme.palette.mode === 'dark' ? 'default' : 'default'} sx={{
                        '& .MuiBadge-badge': {
                            bgcolor: theme.palette.mode === 'dark' ? '#fff' : '#000',
                            color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                        }
                    }}>
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={isCartVisible ? 9 : 12}>
                    <ProductList />
                </Grid>
                {isCartVisible && (
                    <Grid item xs={12} md={3}>
                        <Cart />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}
export default App;