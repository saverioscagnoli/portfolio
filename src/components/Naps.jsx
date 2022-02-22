import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Center, Container } from '@chakra-ui/react';
import { OrbitControls } from '@react-three/drei';


const Model = () => {

    const gltf = useGLTF('/naps/scene.gltf', true)
    return <primitive object={gltf.scene} dispose={null} /> 
}


function Naps() {

  return (
      <Center height={350} >
          <Canvas orthographic camera={{position: [40, 20, -40], zoom: 125}}>
              <Suspense fallback={null}>
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} autoRotate={true} autoRotateSpeed={1} />
              <mesh position={[0, -1.3, 0]} rotation={[0, Math.PI * 0.5, 0]}>
                  <Model />
              </mesh>
              </Suspense>
          </Canvas>
      </Center>
  )
}

export default Naps

