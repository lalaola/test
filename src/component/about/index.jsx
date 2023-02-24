import React, { useEffect } from 'react';
import Img from './img';
import toggle from '../../asset/img-vector/toggle.png'
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import Mesh from './mesh';


const Index = () => {
   useEffect(() => {
    console.log("did mount")
    return () => {
        console.log("apus")
    };
   }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 2, delay: 0.1 }}
            className='about__content'>
            <div className="img-bg">
                <div className="toggle col-1">
                    <img src={toggle} className="img-fluid" alt="" />
                </div>
                <Img />
                <div className="col-10 d-flex isi-about mx-auto">
                    <div className="text col-md-7 col-12">
                        <div className="judul mt-3"><h3 >About Me</h3>
                            <h4>Frontend Developer</h4></div>
                        <div className="isi mt-4"><p>I'Am - Islah, I am a current semester 7 student of State Islamic University Syarif Hidayahtullah Jakarta majoring in Computer Science. I am very interested in Web Developer especially in the field of Frontend Developer.</p></div>
                        <div className="cv pt-2"><button className='btn btn-dark'>Download Cv</button></div>
                    </div>
                    <div className="foto col-md-5 col-12 d-flex align-items-end ">
                        <div className="col-12 ">
                            <Canvas >
                                <ambientLight intensity={0.5} />
                                <Mesh/>
                            </Canvas>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Index;
