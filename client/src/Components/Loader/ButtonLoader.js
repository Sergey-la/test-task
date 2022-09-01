import React from 'react';
import './loader.scss';

export default function ButtonLoader() {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
