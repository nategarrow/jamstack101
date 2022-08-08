import React from 'react'
import styled from 'styled-components';

/* Assets */
import RetroComputer from '../../public/assets/svgs/retro-computer';
import NextjsLogo from '../../public/assets/svgs/nextjs-logo.svg';
import ReactLogo from '../../public/assets/svgs/react-logo.svg';
import VuejsLogo from '../../public/assets/svgs/vuejs-logo.svg';
import SvelteLogo from '../../public/assets/svgs/svelte-logo.svg';
import JSArrow from '../../public/assets/svgs/js-squiggly-arrow.svg';

const PageJavaScript = () => {
  return (
    <Section className='relative mx-auto lg:px-12 px-4 z-20'>
      <SectionTop className="container relative flex flex-col items-center lg:py-[140px] lg:px-10 py-20 px-8 bg-contain">
        <h2 className="text-center text-white font-black lg:mb-16 mb-4">javascript</h2>
        <p className="text-center text-white mx-auto mb-none max-w-[600px] md:order-2 order-3">
          Statically generated pages are brought to life with client-side JavaScript libraries and
          frameworks, such as Algolia and Next.js.
        </p>
        <Arrow className="hidden max-h-24 lg:block lg:max-h-64 " />
        <RetroComputer className="computer lg:w-[60%] w-2/3 max-w-4xl md:order-3 order-2 my-10" />
      </SectionTop>
      <SectionBtm className="relative">
        <div className="logos relative flex mx-0 mb-20 px-0 z-10 w-full md:mb-none">
          <div className="inline-grid gap-10 grid-cols-1 lg:grid-rows-5 grid-rows-2 lg:w-1/4 w-1/3">
            <ReactLogo className="logo mx-auto hidden lg:inline-block max-h-24 lg:max-h-64 lg:row-start-2 fill-white text-white hover:fill-react-blue hover:text-react-blue" />
            <SvelteLogo className="logo mx-auto row-start-2 max-h-24 lg:row-start-4 lg:max-h-64 fill-white hover:fill-svelte-orange" />
          </div>
          <div className="inline-grid gap-10 grid-cols-1 lg:grid-rows-5 grid-rows-2 lg:w-1/4 w-1/3">
            <NextjsLogo className="logo mx-auto row-start-2 lg:max-h-64 max-h-24 fill-white hover:fill-next-blue" />
            <ReactLogo className="logo mx-auto lg:row-start-4 row-start-1 lg:opacity-20 lg:max-h-64 max-h-24 fill-white text-white hover:fill-react-blue hover:text-react-blue" />
          </div>
          <div className="inline-grid gap-10 grid-cols-1 lg:grid-rows-5 grid-rows-2 lg:w-1/4 w-1/3">
            <VuejsLogo className="logo mx-auto lg:row-start-3 row-start-2 lg:max-h-64 max-h-24 fill-white hover:fill-vue-green" />
          </div>
          <div className="md:visible hidden lg:inline-grid gap-10 grid-cols-1 lg:grid-rows-5 grid-rows-2 lg:w-1/4 w-1/3">
            <NextjsLogo className="logo mx-auto lg:row-start-1 lg:max-h-64 fill-white hover:fill-next-blue" />
            <ReactLogo className="logo mx-auto lg:row-start-3 lg:max-h-64 fill-white text-white hover:fill-react-blue hover:text-react-blue" />
            <SvelteLogo className="logo mx-auto lg:row-start-6 lg:max-h-64 fill-white hover:fill-svelte-orange" />
          </div>
        </div>
      </SectionBtm>
    </Section>
  )
}

export default PageJavaScript

const Section = styled.section`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: clamp(400px, calc(200px + 35vw), 800px);
    background-color: white;

    @media (max-width: 767px) {
      height: 400px;
    }
  }
`
const Arrow = styled(JSArrow)`
  position: absolute;
  left: 75%;
  top: 20%;
  width: 15vw;
  max-width: 300px;
  max-height: 565px;
  aspect-ratio: 248 / 467;
`
const SectionTop = styled.div`
  max-width: min(1600px, 100%);
  margin-inline: auto;
  background-image: url(/assets/svgs/rect-js-bg.svg);
  background-repeat: no-repeat;
  position: relative;
  z-index: 6;

  & > img {
    position: absolute;
    inset: 0;
    z-index: 4;
  }

  svg {
    @media (max-width: 767px) {
      max-width: 800px;
    }
  }
  
  @media (max-width: 767px) {
    background-size: cover;
    background-position: 50%;
    border-radius: 50px 50px 46px 46px;
  }
`
const SectionBtm = styled.div`
  margin: -550px auto 0;
  width: 79vw;
  z-index: 6;

  .logos svg {
    filter: drop-shadow(0 -105px 45px rgb(255 255 255));
    filter: drop-shadow(0 -105px 45px rgb(255 255 255));
    transform: scale(1.3);
  }

  @media (max-width: 1499px) {
    width: 90vw
  }
  @media (max-width: 1023px) {
    width: 85vw;
    margin-top: 0;

    .logos svg {
      transform: scale(2.75);
    }
  }
  @media (max-width: 767px) {
    margin-top: 0;
    
    .logos svg {
      transform: scale(1.5);
    }
  }
`