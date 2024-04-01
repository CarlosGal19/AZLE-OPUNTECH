import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import UnLogged from './components/UnLogged';
import Logged from './components/Logged';
import { whoAmI } from '../../public/utils/functions';

export default function IcConnectPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const isAuthenticated = await whoAmI();
                setIsLoggedIn(isAuthenticated);
            } catch (error) {
                console.error('Error fetching authentication status:', error);
                setIsLoggedIn(false);
            }
        };

        checkAuthentication();
    }, []);

    console.log(isLoggedIn);

    return (
        <div>
            <Header />
            {isLoggedIn === null ? <p>Cargando...</p> : isLoggedIn ? <Logged /> : <UnLogged />}
        </div>
    );
}
