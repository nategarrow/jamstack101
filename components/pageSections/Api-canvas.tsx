import React, { Suspense, useRef } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { JamstackSphere } from '../objects/JamstackSphere'
import { KernelSize } from 'postprocessing'

const PageAPI = () => {
  return (
    <section className="mx-auto">
      <div className="top-section relative py-10 px-10 bg-contain">
        <h2 className="text-9xl text-center text-white font-black mb-16">api</h2>
        <p
          className="text-2xl text-center text-white font-normal leading-relaxed mx-auto mb-20 max-w-[740px]"
        >
          At build time, a Jamstack website uses data from one or more APIs to generate markup. These
          APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!
        </p>
      </div>
      <CanvasContainer className="relative py-10">
        <Canvas shadows={true} dpr={[1, 1.5]}>
          <color attach="background" args={['black']} />
          <PerspectiveCamera makeDefault position={[0, 0, 14]} />
          {/* pink */}
          <spotLight position={[15, 10, 10]} color="#8801E4" intensity={5} power={20} />
          {/* blue */}
          <spotLight position={[-15, -10, 10]} color="#01A6DC" penumbra={.5} intensity={5} power={20} />
          <spotLight position={[-10, 10, -12]} color="#F5CBE1" power={200} />

          <Suspense fallback={null}>
            <EffectComposer multisampling={8}>
              <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={.5} />
              <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={1} />
            </EffectComposer>

            <JamstackSphere />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </section>
  )
}

export default PageAPI

const CanvasContainer = styled.div`
  min-height: 65vh;
  width: 100%;

  &:before,
	&:after {
		content: '';
		position: absolute;
		width: 100%;
	}

  &:before {
		bottom: 40%;
    aspect-ratio: 2560 / 364;
		background-image: url(/assets/images/api-squiggly-bg.png);
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 3;
	}
	&:after {
		background-color: white;
		bottom: 0;
		height: 40%;
		z-index: 2;
  }

  canvas {
    position: relative;
    min-height: 65vh;
    aspect-ratio: 1 / 1;
  }
`