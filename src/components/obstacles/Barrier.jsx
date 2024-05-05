/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -T barrier.glb 
Files: barrier.glb [5.85KB] > /mnt/c/Users/shado/projects/s24/capstone24/blender/runner_game/barrier-transformed.glb [1.25KB] (79%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function LightBar(props) {
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={new THREE.BoxGeometry(1.5, 0.5, 0.5)}
        position={[0, 0.65, 0]}
      >
        <meshBasicMaterial 
          color="#e83b3b"
        />
        <pointLight color="#e83b3b" power={50} />
      </mesh>
    </group>
  )
}

export function Barrier(props) {
  const { nodes, materials } = useGLTF('/gltf/barrier-transformed.glb')
  return (
    <group {...props} scale={0.325} dispose={null} ref={props.innerRef}>
      <mesh 
        geometry={nodes.Barrier.geometry} 
        material={nodes.Barrier.material} 
        position={[0, 1, 0]} 
        scale={[1, 1, 0.5]} 
      >
        <LightBar />
      </mesh>
    </group>
  )
}

useGLTF.preload('/gltf/barrier-transformed.glb')