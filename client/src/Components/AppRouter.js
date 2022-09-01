import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes';
import NotFound from '../pages/NotFound/NotFound';

function AppRouter() {
    return (
        <Routes>
            {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={Component} />
            ))}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRouter;
