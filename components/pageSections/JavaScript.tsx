import React from 'react'
import styled from 'styled-components';

/* Assets */
import Computer from '../../public/assets/svgs/retro-computer.svg';
import NextjsLogo from '../../public/assets/svgs/nextjs-logo.svg';
import ReactLogo from '../../public/assets/svgs/react-logo.svg';
import VuejsLogo from '../../public/assets/svgs/vuejs-logo.svg';
import SvelteLogo from '../../public/assets/svgs/svelte-logo.svg';


const PageJavaScript = () => {
  return (
    <Section className="mx-auto px-12 z-10">
      <SectionTop className="relative py-[140px] px-10 bg-contain">
        <h2 className="text-9xl text-center text-white font-black mb-16">javascript</h2>
        <p className="text-center text-white mx-auto mb-20 max-w-[600px]">
          Statically generated pages are brought to life with client-side JavaScript libraries and
          frameworks, such as Algolia and Next.js.
        </p>
        <Computer />
      </SectionTop>
      <SectionBtm className="relative">
        <div className="logos relative flex mx-0 px-0 z-10 w-full">
          <div className="inline-grid gap-10 grid-cols-1 grid-rows- w-1/4">
            <span className="row-start-2">
              <ReactLogo />
            </span>
            <span className="row-start-4">
              <SvelteLogo />
            </span>
          </div>
          <div className="inline-grid gap-10 grid-cols-1 grid-rows-5 w-1/4">
            <span className="row-start-2">
              <NextjsLogo />
            </span>
            <span className="row-start-4 opacity-20">
              <ReactLogo />
            </span>
          </div>
          <div className="inline-grid gap-10 grid-cols-1 grid-rows-5 w-1/4">
            <span className="row-start-3">
              <VuejsLogo />
            </span>
          </div>
          <div className="inline-grid gap-10 grid-cols-1 grid-rows-5 w-1/4">
            <span className="row-start-1">
              <NextjsLogo />
            </span>
            <span className="row-start-3">
              <ReactLogo />
            </span>
            <span className="row-start-6">
              <SvelteLogo />
            </span>
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
    height: 800px;
    background-color: white;
  }
`

const SectionTop = styled.div`
  max-width: min(1600px, 100%);
  margin-inline: auto;
  background-image: url(/assets/images/rectangle-javascript-bg.png);
  background-repeat: no-repeat;
  position: relative;
  z-index: 6;

  & > img {
    position: absolute;
    inset: 0;
    z-index: 4;
  }

  svg {
    max-width: min(1280px, 65%);
    margin: 0 auto;
  }
  
`
const SectionBtm = styled.div`
  margin: -550px auto 0;
  width: 79vw;

  .logos .inline-grid > span {
    max-height: 280px;
  }

  .logos svg {
    filter: drop-shadow(0 -105px 45px rgb(255 255 255));
    filter: drop-shadow(0 -105px 45px rgb(255 255 255));
  }
`