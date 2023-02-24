import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages';
import About from '../pages/about';

const Rute = () => {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/homepage" element={<About/>}/>

        </Routes>
    );
}

export default Rute;
