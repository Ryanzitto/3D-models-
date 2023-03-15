import { OrbitControls, Stage} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ReactLogo from'./ReactLogo.jsx'
import React from "react";

const Development = () => {
    return (
        <Canvas>
        <Stage environment="city" intensity={0.6}>
        <ReactLogo/>
        </Stage>
        <OrbitControls enableZoom={false}/>
        </Canvas>
    );
}
 
export default Development;