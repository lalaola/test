import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Index from '.';

const Warning = () => {
    // const { getWarning, getLoginLoading } = useSelector((state) => state.JobReducer)
    const [warning, setWarning] = useState(true); 
    return (
        <>
            {warning ? (<div className='warning'>  <h1>Warning!</h1>
                <h3 className='col-11 text-center'>Life is not just about BNW but we can put some color  biar asyik ya ga</h3>
                <button onClick={((e) => { warning ? setWarning(false) : setWarning(true) })} className='btn btn-light'>Let's go</button>
            </div>) : <Index/>}
        </>
    );
}

export default Warning;
