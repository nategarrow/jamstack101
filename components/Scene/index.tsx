import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { JamstackSphere } from '../objects/JamstackSphere'
import SceneLights from './lights'
const SphereScene = () => {
  return (
    <Canvas shadows={true} dpr={[1, 1.5]} className="z-30">
      <PerspectiveCamera makeDefault position={[0, 0, 14]} />
      <SceneLights />
      <Suspense fallback={null}>
        <EffectComposer multisampling={8}>
          <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={.4} />
        </EffectComposer>

        <JamstackSphere />
      </Suspense>
    </Canvas>
  )
}

export default SphereScene