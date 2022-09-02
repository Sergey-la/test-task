import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Components';

import './index.scss';

export default function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}
