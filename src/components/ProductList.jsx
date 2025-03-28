import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadProducts, setCategory, setSortBy, setSearchQuery} from
        '../features/productsSlice.js';
import ProductCard from './ProductCard.jsx';
import FilterPanel from './FilterPanel.jsx';
import SortPanel from './SortPanel.jsx';
import SearchBar from './SearchBar.jsx';
import {Typography, Grid, Box, Paper, Container, Divider, useTheme} from "@mui/material";

const ProductList = () => {
    const dispatch = useDispatch();
    const {items, status, category, sortBy, searchQuery} = useSelector((state) =>
        state.products);
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);
    const filteredProducts = category === 'all'
        ? items
        : items.filter((product) => product.category === category);
    const searchedProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sortedProducts = [...searchedProducts].sort((a, b) => {
        if (sortBy === 'priceAsc') return a.price - b.price;
        if (sortBy === 'priceDesc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
    });
    if (status === 'loading') return <Typography variant='h2' sx={{ color: isDarkMode ? 'text.primary' : '#000', textAlign: 'center' }}>Загрузка...</Typography>;
    if (status === 'failed') return <Typography variant='h2' sx={{ color: isDarkMode ? 'text.primary' : '#000', textAlign: 'center' }}>Не удалось получить продукты :(</Typography>;
    
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Paper elevation={0} sx={{ 
                p: 3, 
                mb: 4, 
                bgcolor: isDarkMode ? 'background.paper' : '#fff',
                border: `1px solid ${isDarkMode ? theme.palette.divider : '#000'}`,
                borderRadius: 2,
            }}>
                <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>
                    Каталог товаров
                </Typography>
                <Divider sx={{ mb: 3, bgcolor: isDarkMode ? '#555' : '#000', height: '2px' }}/>
                
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <FilterPanel onFilterChange={(category) => dispatch(setCategory(category))}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SortPanel onSortChange={(sortBy) => dispatch(setSortBy(sortBy))}/>
                    </Grid>
                    <Grid item xs={12}>
                        <SearchBar onSearchChange={(query) => dispatch(setSearchQuery(query))}/>
                    </Grid>
                </Grid>
            </Paper>
            
            {
                sortedProducts.length !== 0
                    ? (
                        <Box sx={{
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            justifyContent: 'center', 
                            gap: 3,
                            bgcolor: isDarkMode ? 'background.paper' : '#f5f5f5',
                            p: 3,
                            borderRadius: 2,
                            border: `1px solid ${isDarkMode ? theme.palette.divider : '#000'}`,
                        }}>
                            <Grid container spacing={3} justifyContent="center">
                                {sortedProducts.map((product) => (
                                    <Grid item xs={12} sm={6} md={4} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <ProductCard product={product}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )
                    : (
                        <Paper elevation={0} sx={{ 
                            p: 4, 
                            bgcolor: isDarkMode ? 'background.paper' : '#f5f5f5',
                            border: `1px solid ${isDarkMode ? theme.palette.divider : '#000'}`,
                            borderRadius: 2,
                            textAlign: 'center'
                        }}>
                            <Typography variant='h4' sx={{ color: isDarkMode ? '#fff' : '#000' }}>
                                Нет подходящих товаров :(
                            </Typography>
                        </Paper>
                    )
            }
        </Container>
    );
};

export default ProductList;