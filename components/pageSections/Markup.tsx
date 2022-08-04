import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import RectangleImg from '../RectangleImg';

/* Assets */

const PageMarkup = () => {
  return (
    <Section className="relative bg-white px-8 pt-[150px]">
      <div className="xl:max-w-[1500px] md:max-w-6xl mx-auto">
        <div className="grid gap-8 grid-cols-4 auto-rows-max px-20">
          <h2 className="col-span-3 font-black pl-14">markup</h2>
          <div className="col-span-2 row-start-2">
            <p className="text-2xl max-w-[600px] pl-14 leading-relaxed font-normal">
              When ready for deployment, a static-site generator such as Astro or Next.js is used to
              compile the website. The end result is a collection of pre-rendered HTML pages that can be
              delivered lightning-fast over a CDN like Vercel’s Edge Network.
            </p>
          </div>
          <div className='row-start-3 col-start-1 col-span-2 flex flex-col items-center'>
            <Image src="/assets/images/toppled-blocks.png" alt="Colorful toppled blocks" layout="intrinsic" width={981} height={684} className="w-full max-w-[500px]" />
          </div>
          <RectangleImg className="row-start-2 col-start-3 row-span-3">
            <Image
              src="/assets/images/rect-blocks-left.png"
              layout="intrinsic"
              width={420}
              height={944}
              alt="decorative rectangle 1"
              className="inline-block"
            />
          </RectangleImg>
          <RectangleImg className="row-start-1 col-start-4 row-span-3">
            <Image
              src="/assets/images/rect-blocks-right.png"
              layout="intrinsic"
              width={417}
              height={1006}
              alt="decorative rectangle 2"
              className="inline-block "
            />
          </RectangleImg>
        </div>
      </div>
    </Section>
  )
}

export default PageMarkup

const Section = styled.section`
  padding-bottom: 400px;

  &:before,
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	&:before {
		height: 100px;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
		z-index: 8;
	}
	&:after {
		height: 300px;
		background-image: url(/assets/images/block-wall.png);
		background-size: contain;
	}
`