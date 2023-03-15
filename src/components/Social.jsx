/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 social.gltf --transform
Author: AlbertVictory (https://sketchfab.com/albert_victory)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/instagram-3d-icon-62779c555da04e58ae7a4ab7e45a532f
Title: Instagram 3D-icon
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/social-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.1, 0.05]} rotation={[-2.88, 0, -Math.PI / 2]} scale={[1, 0.09, 1]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} position={[0, 1.3, 0]} rotation={[-Math.PI, 0.26, -Math.PI]} scale={[0.3, 0.4, 0.3]} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.002']} position={[0.19, 1.19, 0.34]} rotation={[-Math.PI, 0.26, -Math.PI]} scale={[0.07, 0.23, 0.07]} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.002']} position={[0, 1.69, 0]} rotation={[-Math.PI, 0.26, -Math.PI]} scale={[0.53, 5.79, 0.53]} />
      </group>
    </group>
  )
}

useGLTF.preload('/social-transformed.glb')