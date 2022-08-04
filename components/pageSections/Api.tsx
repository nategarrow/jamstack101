import React from 'react'
import styled from 'styled-components'

const PageAPI = () => {
  return (
    <section className="mx-auto">
      <div className="top-section relative py-[140px] px-10 bg-contain">
        <h2 className="text-9xl text-center text-white font-black mb-16">api</h2>
        <p
          className="text-2xl text-center text-white font-normal leading-relaxed mx-auto mb-20 max-w-[740px]"
        >
          At build time, a Jamstack website uses data from one or more APIs to generate markup. These
          APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!
        </p>
      </div>
      <CanvasContainer className="relative py-10" />
    </section>
  )
}

export default PageAPI

const CanvasContainer = styled.div`
  min-height: 80vh;
  width: 100%;

  &:before,
	&:after {
		content: '';
		position: absolute;
		width: 100%;
	}

  &:before {
		bottom: 50%;
    aspect-ratio: 2560 / 364;
		background-image: url(/assets/images/api-squiggly-bg.png);
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 3;
	}
	&:after {
		background-color: white;
		bottom: 0;
		height: 50%;
		z-index: 2;
  }
`