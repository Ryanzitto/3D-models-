import Cube from './Cube';
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

import React from "react";
import styled from 'styled-components'


const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
`

const Test = () => {
    return(
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate={true}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[2,2,2]}/>
                    <Cube/>
            </Canvas>
        </Container>
    )
}
 
export default Test;