import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import RectangleImg from '../RectangleImg';

const PageMarkup = () => {
  return (
    <Section className="bg-white isolate overflow-x-hidden mx-auto pb-36 pt-20 px-4 pb-48 sm:pb-64 md:pb-72 lg:px-8 lg:pt-[100px] xl:pb-[40vh]">
      <div className="container grid gap-8 grid-cols-4 auto-rows-max xl:px-20 lx:px-14 px-8 mx-auto z-10">
        <div className="row-start-1 col-span-3 font-black lg:pl-10 flex items-center">
          <h2>
            markup
          </h2>
        </div>
        <div className="flex flex-col justify-start col-span-4 px-4 lg:col-span-2 lg:row-start-2 lg:pl-16 ">
          <p className=" text-xl leading-relaxed font-normal sm:text-2xl lg:max-w-[600px] lg:mb-[60px] ">
            When ready for deployment, a static-site generator such as Astro or Next.js is used to
            compile the website. The end result is a collection of pre-rendered HTML pages that can be
            delivered lightning-fast over a CDN like Vercel’s Edge Network.
          </p>
        </div>
        <div className='col-start-4 row-start-1 row-span-1 flex flex-col items-center justify-center sm:col-span-1 sm:row-start-1 sm:mt-10 md:col-span-2 md:row-start-3 md:col-start-1 lg:row-span-3'>
          <Image src="/assets/images/toppled-blocks.webp" alt="Colorful toppled blocks" width={735} height={513} className="max-w-[400px]" />
        </div>
        <RectangleImg position="left">
          <Image
            src="/assets/images/rect-blocks-left.webp"
            width={420}
            height={944}
            alt="decorative rectangle 1"
          />
        </RectangleImg>
        <RectangleImg position="right">
          <Image
            src="/assets/images/rect-blocks-right.webp"
            width={417}
            height={1006}
            alt="decorative rectangle 2"
          />
        </RectangleImg>
      </div>
    </Section>
  )
}

export default PageMarkup

const Section = styled.section`
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
	}
	&:after {
		background-image: url(/assets/images/block-wall.webp);
		background-size: contain;
    background-repeat: no-repeat;
    aspect-ratio: 126 / 19;
	}
`