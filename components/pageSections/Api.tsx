import React, { Suspense, useRef } from 'react'
import styled from 'styled-components'
import SphereScene from '../Scene'

const PageAPI = () => {
  return (
    <section className="relative mx-auto">
      <div className="container relative py-10 px-10 mx-auto bg-contain">
        <h2 className="text-center text-white font-black mb-16">api</h2>
        <p className="text-xl text-center text-white font-normal leading-relaxed mx-auto mb-20 max-w-[740px] sm:text-2xl">
          At build time, a Jamstack website uses data from one or more APIs to generate markup. These
          APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!
        </p>
      </div>
      <SectionBtm className="relative py-10 z-20 w-full">
        <div className="sphere-container w-2/4 max-w-5xl aspect-square mx-auto">
          <SphereBG />
          <SphereScene />
        </div>
      </SectionBtm>
    </section >
  )
}

export default PageAPI

const SectionBtm = styled.div`
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
`
const SphereBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  --pink: #8801E4;
  --blue: #3664df;

  &:before,
  &:after {
    content: "";
    position: absolute;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  // Sphere Backlighting
  // White Aura
  &:before {
    width: 80%;
    left: 47.5%;
    top: 47%;
    background: white;
    box-shadow: 0 0 60px 80px white;
    z-index: 3;

    @media (max-width: 1023px) {
      width: 50%;
    }
  }
  // Gradient Aura
  &:after {
    width: 100%;
    left: 45%;
    top: 44%;
    opacity: 1;
    background: conic-gradient(from .53turn, var(--blue), var(--pink));
    z-index: 2;
    filter: blur(80px);
    animation spin 40s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    50% {
      transform: translate(-50%, -50%) rotateZ(-360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
  }
`
