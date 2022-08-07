import React, { Suspense, useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const PageAPI = () => {
  return (
    <section className="relative mx-auto">
      <div className="top-section relative py-10 px-10 bg-contain">
        <h2 className="text-center text-white font-black mb-16">api</h2>
        <p className="text-xl text-center text-white font-normal leading-relaxed mx-auto mb-20 max-w-[740px] sm:text-2xl">
          At build time, a Jamstack website uses data from one or more APIs to generate markup. These
          APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!
        </p>
      </div>
      <SphereContainer className="relative py-10 z-10 w-full">
        <Sphere className="z-10 mx-auto">
          <Image src="/assets/images/api-sphere.png" layout="fill" />
        </Sphere>
      </SphereContainer>
    </section >
  )
}

export default PageAPI

const SphereContainer = styled.div`
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
const Sphere = styled.div`
  width: min(900px, 50%);

  span {
    aspect-ratio: 1 / 1;
    position: relative !important;
    overflow: visible !important;
    
    img {
      display: block !important;
      aspect-ratio: 1 / 1;
      max-width: 100% !important;
      max-height: 100% !important;
      object-fit: contain;
      filter: drop-shadow(-60px -16px 30px #fff);
    }
  }

  @media (max-width: 767px) {
    width: 65%;

    span {
      img {
        filter: drop-shadow(-20px -16px 30px #fff); 
      }
    }
  }
`