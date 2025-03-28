import React from 'react';
import {TextField, InputAdornment, useTheme} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({onSearchChange}) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    return (
        <TextField
            fullWidth
            label="Поиск товаров"
            variant="outlined"
            sx={{
                my: 2,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : '#000',
                    },
                    '&:hover fieldset': {
                        borderColor: isDarkMode ? '#fff' : '#333',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: isDarkMode ? '#fff' : '#000',
                    },
                },
                '& .MuiInputLabel-root': {
                    color: isDarkMode ? '#aaa' : '#555',
                    '&.Mui-focused': {
                        color: isDarkMode ? '#fff' : '#000',
                    },
                },
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon sx={{ color: isDarkMode ? '#aaa' : '#000' }} />
                    </InputAdornment>
                ),
            }}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
};

export default SearchBar;