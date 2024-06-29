import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from 'router/router';
import { ThemeProvider } from 'styled-components';
import { Theme } from './components/Theme';

ReactDOM.createRoot(document.getElementById('root')).render( <
    React.StrictMode >
    < Provider store = { store } >
    <RouterProvider router = { router } >
    <ThemeProvider theme = { Theme } >
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ThemeProvider>

    </RouterProvider>  
    </Provider>
     </React.StrictMode>
);