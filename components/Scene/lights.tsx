import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const SceneLights = () => {
  const lights = useRef<any>(null)
  useFrame(() => {
    lights.current.rotation.y += 0.001
    lights.current.rotation.z += 0.001
  })
  return (
    <group ref={lights}>
      {/* pink */}
      <directionalLight position={[5, 4, 4]} color="#8801E4" intensity={4.5} />
      <directionalLight position={[5, 2, -4]} color="#8801E4" intensity={4.5} />
      <spotLight position={[3, 10, 1]} color="#F5CBE1" intensity={1} />
      {/* blue */}
      <directionalLight position={[-5, -4, 2]} color="#3664df" intensity={2} />
      <directionalLight position={[-5, -2, -2]} color="#3664df" intensity={2} />
      <spotLight position={[-3, -10, 1]} color="#42bce5" intensity={1} />
    </group>
  )
}

export default SceneLights