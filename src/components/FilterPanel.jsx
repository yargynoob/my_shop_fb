import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    FormControlLabel,
    FormLabel, Radio,
    RadioGroup,
    Typography,
    Paper,
    useTheme
} from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import LaptopIcon from '@mui/icons-material/Laptop';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import DevicesIcon from '@mui/icons-material/Devices';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const FilterPanel = ({onFilterChange}) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    const categories = [
        {value: 'all', label: 'Все', icon: <LocalMallOutlinedIcon/>, checkedIcon: <LocalMallIcon/>},
        {value: 'electronics', label: 'Техника', icon: <DevicesIcon/>, checkedIcon: <DevicesIcon/>},
        {value: 'clothing', label: 'Выпечка', icon: <RestaurantIcon/>, checkedIcon: <RestaurantIcon/>},
        {value: 'books', label: 'Контрабанда', icon: <AttachMoneyIcon/>, checkedIcon: <AttachMoneyIcon/>},
    ];
    return (
        <Paper elevation={0} sx={{ 
            p: 2, 
            bgcolor: isDarkMode ? 'background.paper' : '#f5f5f5', 
            border: `1px solid ${isDarkMode ? theme.palette.divider : '#000'}`,
            borderRadius: 2 
        }}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ 
                    color: isDarkMode ? 'text.primary' : '#000',
                    fontWeight: 'bold',
                    '&.Mui-focused': {
                        color: isDarkMode ? 'primary.main' : '#000'
                    }
                }}>
                    Категории
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={categories[0].value}
                    row
                    name="radio-buttons-group"
                    onChange={(_, value) => onFilterChange(value)}
                    sx={{ mt: 1 }}
                >
                    {categories.map((category) => (
                        <FormControlLabel
                            key={category.value} 
                            value={category.value}
                            control={
                                <Radio 
                                    icon={React.cloneElement(category.icon, {
                                        sx: { color: isDarkMode ? '#aaa' : '#000' }
                                    })} 
                                    checkedIcon={React.cloneElement(category.checkedIcon, {
                                        sx: { color: isDarkMode ? '#fff' : '#000' }
                                    })}
                                    sx={{
                                        '&.Mui-checked': {
                                            color: isDarkMode ? '#fff' : '#000',
                                        }
                                    }}
                                />
                            }
                            label={<Typography sx={{ color: isDarkMode ? 'text.primary' : '#000' }}>{category.label}</Typography>}
                            sx={{ mr: 2 }}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Paper>
        // <Box sx={{display: "flex", gap: 2}}>
        //     <Typography variant="h6" sx={{verticalAlign: 'middle', my: "auto"}}>Категории:</Typography>
        //     <ButtonGroup variant="contained" color='inherit' sx={{my: 2}}>
        //         {categories.map((category) => (
        //             <Button key={category.value} onClick={() => onFilterChange(category.value)}>
        //                 {category.label}
        //             </Button>
        //         ))}
        //     </ButtonGroup>
        // </Box>
    );
};

export default FilterPanel;