import { OrbitControls, Stage} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Social from'./Social.jsx'
import React from "react";

const SocialMedia = () => {
    return (
        <Canvas>
        <Stage environment="city" intensity={0.6}>
        <Social/>
        </Stage>
        <OrbitControls enableZoom={false}/>
        </Canvas>
    );
}
 
export default SocialMedia;