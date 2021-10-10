import React from 'react';
import useAuth from '../hooks/useAugh';


const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            i'm home
            <h3>user: {user.displayName}</h3>
        </div>
    );
};

export default Home;