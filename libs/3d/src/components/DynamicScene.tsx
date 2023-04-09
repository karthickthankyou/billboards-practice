import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Building } from './Building'
import { DirectionalLight, GridHelper } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export const DynamicScene = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>()

  //   useFrame((state, delta) => {
  //     if (cameraRef.current) {
  //       cameraRef.current.position.z -= delta * 1
  //     }
  //   })

  return (
    <Canvas
      gl={{ antialias: true }}
      //   camera={{
      //     fov: 75,
      //     // aspect: window.innerWidth / window.innerHeight,
      //     near: 1,
      //     far: 1000,
      //     position: [0, 5, 50],
      //   }}
      style={{ background: 'black', height: '100vh' }}
    >
      <Building position={[-2, 0, 0]} height={1} />
      <Building position={[-1, 0, 0]} height={2} />
      <Building position={[0, 0, 0]} height={3} />
      <Building position={[1, 0, 0]} height={4} />
      <Building position={[2, 0, 0]} height={5} />

      <gridHelper args={[1000, 30, 'gray', 'gray']} />
      <OrbitControls />

      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 5, 50]}
        fov={75}
      />
    </Canvas>
  )
}
