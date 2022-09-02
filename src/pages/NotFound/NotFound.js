import React from 'react';
import './not-found.scss';

function NotFound() {
    return (
        <div className="not-found">
            <h1>HTTP 404 Not Found</h1>
            <div>
                Запрошенный ресурс не найден. Пожалуйста, вернитесь на{' '}
                <a href="/">главную страницу</a>
            </div>
        </div>
    );
}

export default NotFound;