import React from 'react';
import Loader from '../Loader/ButtonLoader';

import './button.scss';

export default function Button({ text, disable = false }) {
    return (
        <button disabled={disable} type="submit">
            {!disable ? `${text}` : <Loader />}
        </button>
    );
}
