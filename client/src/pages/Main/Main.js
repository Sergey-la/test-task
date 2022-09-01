import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../Components/Filters/Filters';
import FavFilters from '../../Components/FavFilters/FavFilters';
import Panel from '../../Components/Panel/Panel';

import './main.scss';

function Main() {
    const auth = localStorage.getItem('auth');
    const navigate = useNavigate();
    const hotels = useSelector((store) => store.hotels);
    const favHotels = useSelector((store) => store.favHotels);
    const filters = useSelector((store) => store.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'LOAD_HOTELS' });
        dispatch({ type: 'LOAD_FILTERS' });
        dispatch({ type: 'LOAD_FAV_HOTELS' });
    }, [dispatch]);

    if (auth === 'false') {
        return <Navigate to="/login" />;
    }

    const logout = () => {
        localStorage.setItem('auth', false);
        return navigate('/login');
    };

    return (
        <main>
            <header className="header">
                <h1>Simple Hotel Check</h1>
                <div className="header__logout" onClick={logout}>
                    Выйти
                </div>
            </header>
            <div className="main">
                <div className="main-saidbar">
                    <Filters filters={filters.filters} />
                    <FavFilters
                        favHotels={favHotels.favHotels}
                        filters={filters.filters}
                    />
                </div>
                <Panel
                    hotels={hotels}
                    favHotels={favHotels.favHotels}
                    filters={filters.filters}
                />
            </div>
        </main>
    );
}

export default Main;
