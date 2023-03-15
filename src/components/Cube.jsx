import React from "react"
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Cube = () => {
  const textRef = useRef()
    return ( 
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
              <RenderTexture attach="map">
                <color attach="background" args={["#481470"]}/>
                </RenderTexture>
            </meshStandardMaterial>
      </mesh>
     );
}
 
export default Cube;