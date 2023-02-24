import React, { useState } from 'react';
import toggle from '../../asset/img-vector/toggle.png'

const Sidebar = () => {
    const [menu, setMenu] = useState(true);
    const handleMenu = () => {
        setMenu(
            menu ? false : true
        )
        console.log(menu)
    }
    return (
        <>
             <div className='sidebar'>
             <div className="toggle col-1" onClick={handleMenu} >
                <img src={toggle} className="img-fluid" alt="" />
            </div> 
                <div style={menu ? {right:'-35rem'} : {right:'0'}}
                 className="wrab-sidebar col-8 col-md-10 d-flex justify-content-center align-items-center">
                    <ul>
                        <li>About</li>
                        <li>Advance</li>
                        <li>Portofolio</li>
                        <li>Contact Me</li>
                        <button onClick={handleMenu} className='btn btn-dark mt-2'>close</button>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Sidebar;
