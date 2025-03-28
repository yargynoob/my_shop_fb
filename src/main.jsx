import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store/store.js';
import {ThemeContextProvider} from './context/ThemeContext.jsx';
import {CssBaseline} from '@mui/material';
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeContextProvider>
                <CssBaseline/>
                <App/>
            </ThemeContextProvider>
        </PersistGate>
    </Provider>
);
