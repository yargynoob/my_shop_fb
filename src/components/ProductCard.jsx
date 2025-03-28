import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActions,
    ButtonGroup,
    Grid,
    IconButton, Box,
    useTheme
} from '@mui/material';
import {motion} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../features/cartSlice.js';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const {items} = useSelector((state) => state.cart);
    const cartItem = items.find((i) => i.id === product.id);
    const quantityInCart = cartItem === undefined ? 0 : cartItem.quantity;
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <Card sx={{
                display: 'flex', 
                flexDirection: 'column', 
                height: 1.0, 
                width: '100%', 
                maxWidth: 345,
                boxShadow: 3,
                bgcolor: isDarkMode ? 'background.paper' : '#f5f5f5',
                border: `1px solid ${isDarkMode ? theme.palette.divider : '#000'}`,
                borderRadius: 2
            }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://picsum.photos/200/300?grayscale&random =${product.id}`}
                    alt={product.title}
                    sx={{ filter: 'grayscale(100%)' }}
                />
                <CardContent sx={{flexGrow: 2}}>
                    <Typography variant="h6" sx={{ color: isDarkMode ? 'text.primary' : '#000', fontWeight: 'bold' }}>{product.title}</Typography>
                    <Typography variant="body2" sx={{ color: isDarkMode ? 'text.secondary' : '#333' }}>{product.description}</Typography>
                    <Typography sx={{mt: 1}} variant="h5" color="text.primary">{product.price}$</Typography>
                </CardContent>
                <CardActions>
                    { quantityInCart !== 0
                        ? (
                            <Box sx={{width: 1.0, display: 'flex', gap: 5}}>
                                <IconButton 
                                    sx={{
                                        flexGrow: 1, 
                                        borderRadius: 0, 
                                        bgcolor: isDarkMode ? '#333' : '#000', 
                                        color: isDarkMode ? '#fff' : '#fff',
                                        '&:hover': {
                                            bgcolor: isDarkMode ? '#444' : '#333',
                                        }
                                    }}  
                                    onClick={() => dispatch(addToCart(product))}
                                >
                                    <AddOutlinedIcon/>
                                </IconButton>
                                <Typography sx={{margin: 'auto'}} variant="p">{quantityInCart}</Typography>
                                <IconButton 
                                    sx={{
                                        flexGrow: 1, 
                                        borderRadius: 0, 
                                        bgcolor: isDarkMode ? '#333' : '#000', 
                                        color: isDarkMode ? '#fff' : '#fff',
                                        '&:hover': {
                                            bgcolor: isDarkMode ? '#444' : '#333',
                                        }
                                    }} 
                                    onClick={() => dispatch(removeFromCart(product))}
                                >
                                    <RemoveOutlinedIcon/>
                                </IconButton>
                            </Box>
                            )
                        : (
                            <Button
                                variant="contained"
                                sx={{
                                    width: 1.0, 
                                    bgcolor: isDarkMode ? '#333' : '#000', 
                                    color: isDarkMode ? '#fff' : '#fff',
                                    '&:hover': {
                                        bgcolor: isDarkMode ? '#444' : '#333',
                                    }
                                }}
                                onClick={() => dispatch(addToCart(product))}
                            >
                                Добавить в корзину
                            </Button>
                        )
                    }
                </CardActions>
            </Card>
        </motion.div>
    );
};
export default ProductCard;