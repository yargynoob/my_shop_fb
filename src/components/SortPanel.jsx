import React from 'react';
import {FormControl, InputLabel, Select, MenuItem, useTheme} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

const SortPanel = ({onSortChange}) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    const sortOptions = [
        {value: 'default', label: 'По умолчанию'},
        {value: 'priceAsc', label: 'По цене (возрастание)'},
        {value: 'priceDesc', label: 'По цене (убывание)'},
        {value: 'rating', label: 'По рейтингу'},
    ];

    return (
        <FormControl fullWidth sx={{
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
            '& .MuiSelect-icon': {
                color: isDarkMode ? '#aaa' : '#000',
            },
        }}>
            <InputLabel>Сортировка</InputLabel>
            <Select
                label="Сортировка"
                onChange={(e) => onSortChange(e.target.value)}
                defaultValue="default"
                IconComponent={SortIcon}
                sx={{
                    color: isDarkMode ? '#fff' : '#000',
                }}
            >
                {sortOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value} sx={{
                        '&.Mui-selected': {
                            backgroundColor: isDarkMode ? '#444' : '#f0f0f0',
                        },
                        '&:hover': {
                            backgroundColor: isDarkMode ? '#555' : '#e0e0e0',
                        },
                    }}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SortPanel;
