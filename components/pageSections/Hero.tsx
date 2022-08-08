import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import RectangleImg from '../RectangleImg';
/* Assets */
import MouseSVG from "../../public/assets/svgs/mouse.svg"
import MousePathSVG from "../../public/assets/svgs/mouse-path.svg"

const PageHero = () => {
  return (
    <Hero className='relative bg-white isolate overflow-hidden pt-20 pb-20 lg:px-8 px-4 lg:pt-[150px]'>
      <div className="mx-auto xl:container md:max-w-6xl">
        <div className="grid gap-8 grid-cols-4 auto-rows-max px-8 z-10 xl:px-20 xl:px-14">
          <div className="row-start-1 col-span-3 font-black flex items-center lg:pl-10">
            <Title>
              jamstack <span>101</span>
            </Title>
          </div>
          <div
            className="flex flex-col justify-start col-span-4 sm:row-start-2 sm:col-span-3 sm:pl-8 lg:col-span-2 lg:row-start-2 lg:pl-16"
          >
            <p className="leading-relaxed font-normal text-xl sm:text-2xl lg:max-w-[600px] lg:mb-[60px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin
              nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
            </p>
          </div>
          <div className="col-start-4 row-start-1 row-span-1 flex flex-col items-center sm:col-span-1 sm:row-span-2 sm:row-start-1 sm:mt-10 md:col-span-2 md:row-start-3 md:col-start-1 lg:row-span-3">
            <Mouse className="max-w-20 max-h-12" />
            <MousePath className="max-h-72" />
          </div>
          <RectangleImg position="left">
            <Image
              src='/assets/images/rect-top-left.webp'
              width={420}
              height={944}
              alt="decorative rectangle"
            />
          </RectangleImg>
          <RectangleImg position="right">
            <Image
              src='/assets/images/rect-top-right.webp'
              width={417}
              height={1006}
              alt="decorative rectangle"
            />
          </RectangleImg>
        </div>
      </div>
    </Hero>
  )
}

export default PageHero

const Hero = styled.header`
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100 %;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    z-index: 15;
  }
`
const Title = styled.h1`
  position: relative;

  span {
    color: transparent;
    background-image: conic-gradient(
      from 0.05turn at 35% 20%,
      #fedf8d 0%,
      #c8599d,
      #fd8574,
      #fedf8d 85%
    );
    background-repeat: no-repeat;
    background-size: 200%;
    -webkit-background-clip: text;
    background-clip: text;
  }
`
const Mouse = styled(MouseSVG)`
  max-width: 50px;

  @media (max-width: 1023px) {
    max-width: 42px;
  }
  @media (max-width: 767px) {
    max-width: 30px;
  }
`
const MousePath = styled(MousePathSVG)`
  max-width: 90px;
  max-height: 35vh;
  position: relative;
  left: 22px;

  @media (max-width: 1023px) {
    max-width: 75px;
  }

  @media (max-width: 767px) {
    max-width: 50px;
    max-height: 250px;
    left: 12px;
  }
  @media (max-width: 639px) {
    max-width: 50px;
    max-height: 130px;
    left: 12px;
  }
`
