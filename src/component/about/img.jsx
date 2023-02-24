import React from 'react';
import imgSun from '../../asset/img-vector/matahari.png'
import abstark from '../../asset/img-vector/abstark.png'
import pelangi from '../../asset/img-vector/pelangi.png'
import spiral from '../../asset/img-vector/spiral.png'
const Img = () => {
    return (
        <div 
           
        >
            <div
                 className="img col-2 matahari">
                <img src={imgSun} alt="" className='img-fluid' />
            </div>
            <div className="img col-2 pelangi">
                <img src={pelangi} alt="" className='img-fluid' />
            </div>
            <div className="img col-2 abstrak">
                <img src={abstark} alt="" className='img-fluid' />
            </div>
            <div className="img col-2 spiral">
                <img src={spiral} alt="" className='spiral' />
            </div>
        </div>
    );
}

export default Img;
