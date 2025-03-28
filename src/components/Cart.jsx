import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart, clearCart} from '../features/cartSlice.js';
import {Card, CardContent, Typography, Button, List, ListItem, ListItemText, Box, Divider, useTheme} from
        '@mui/material';
import ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlinedIcon  from '@mui/icons-material/DeleteOutlined';
import {motion} from 'framer-motion';

const Cart = () => {
    const dispatch = useDispatch();
    const {items, total} = useSelector((state) => state.cart);
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
        >
            <Card sx={{
                maxWidth: '100%', 
                margin: 2, 
                boxShadow: 3, 
                bgcolor: isDarkMode ? 'background.paper' : '#f5f5f5', 
                border: `1px solid ${isDarkMode ? theme.palette.divider : '#000'}`,
                borderRadius: 2,
                width: '100%'
            }}>
                <CardContent>
                    <Box sx={{display: "flex", gap: 2, mb: 2}}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: isDarkMode ? 'text.primary' : '#000' }}>Корзина</Typography>
                         
                    </Box>
                    <Divider sx={{ bgcolor: isDarkMode ? 'divider' : '#000', height: '1px', mb: 2 }}/>
                    {items.length > 0 ? (
                        <>
                            <List sx={{ bgcolor: isDarkMode ? 'background.default' : '#fff', borderRadius: 1, mb: 2 }}>
                                {items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                    >
                                        <ListItem>
                                            <ListItemText
                                                primary={<Typography sx={{ fontWeight: 'medium', color: isDarkMode ? 'text.primary' : '#000' }}>{item.title}</Typography>}
                                                secondary={<Typography sx={{ color: isDarkMode ? 'text.secondary' : '#555' }}>{`${item.quantity} x ${item.price}$`}</Typography>}
                                            />
                                            <Button 
                                                onClick={() => dispatch(removeFromCart(item))}
                                                sx={{
                                                    color: '#fff', 
                                                    bgcolor: isDarkMode ? '#333' : '#000',
                                                    '&:hover': {
                                                        bgcolor: isDarkMode ? '#444' : '#333',
                                                    },
                                                    minWidth: '90px'
                                                }}
                                            >
                                                Удалить
                                            </Button>
                                        </ListItem>
                                        <Divider sx={{ bgcolor: isDarkMode ? 'divider' : undefined }} />
                                    </motion.div>
                                ))}
                            </List>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: isDarkMode ? 'text.primary' : '#000', mb: 2 }}>Общая стоимость: {total}$</Typography>
                            <Button 
                                onClick={() => dispatch(clearCart())} 
                                variant="contained" 
                                sx={{ 
                                    mt: 2,
                                    bgcolor: isDarkMode ? '#555' : '#000',
                                    color: '#fff',
                                    '&:hover': {
                                        bgcolor: isDarkMode ? '#666' : '#333',
                                    }
                                }} 
                                endIcon={<DeleteOutlinedIcon />}
                            >
                                Очистить корзину
                            </Button>
                        </>
                    ) : (
                        <Typography sx={{ color: isDarkMode ? 'text.primary' : '#000', textAlign: 'center', py: 4 }}>
                            Корзина пуста
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
};
export default Cart;