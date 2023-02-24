import React from 'react';
import NavHome from './navHome';

const Home = () => {
    return (
        <div className='home container d-flex flex-column justify-content-between'>
            <h1 className='home__h1Header'>Page 1/4</h1>
            <NavHome/>
            <h1 className='home__h1Footer col-12 d-flex justify-content-end'>Create the page with beutiful code </h1>
        </div>
    );
}

export default Home;
