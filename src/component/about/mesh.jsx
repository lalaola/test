import React, { Suspense, useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Mesh(props) {
    const gltf = useLoader(GLTFLoader, '/girl_with_glasses/scene.gltf')
    return (
        <>   <OrbitControls autoRotate/>
            <Suspense fallback={null}>
            <primitive object={gltf.scene} scale={1}/>

            </Suspense> 
        </>
    );
}

export default Mesh;