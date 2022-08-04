import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import RectangleImg from '../RectangleImg';
/* Assets */
import MouseSVG from "../../public/assets/svgs/mouse.svg"
import MousePathSVG from "../../public/assets/svgs/mouse-path.svg"

const PageHero = () => {
  return (
    <Hero className='relative bg-white px-8 pt-[150px] pb-20'>
      <div className="xl:max-w-[1500px] md:max-w-6xl mx-auto">
        <div className="grid gap-8 grid-cols-4 auto-rows-max px-20 z-10">
          <Title className="col-span-3 font-black pl-10">
            jamstack <span>101</span>
          </Title>
          <div
            className="mouse-path-container flex flex-col justify-start items-center col-span-2 row-start-2 pl-20"
          >
            <p className="mb-[140px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin
              nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
            </p>
          </div>
          <div className="row-start-3 row-span-4 col-start-1 col-span-2 flex flex-col items-center">
            <Mouse />
            <MousePath />
          </div>
          <RectangleImg className="row-start-2 col-start-3 row-span-3">
            <Image
              src='/assets/images/rect-top-left.png'
              layout="intrinsic"
              width={420}
              height={944}
              alt="decorative rectangle"
              className="inline-block"
            />
          </RectangleImg>
          <RectangleImg className="row-start-1 col-start-4 row-span-3">
            <Image
              src='/assets/images/rect-top-right.png'
              layout='intrinsic'
              width={417}
              height={1006}
              alt="decorative rectangle"
              className="inline-block"
            />
          </RectangleImg>
        </div>
      </div>
    </Hero>
  )
}

export default PageHero

const Hero = styled.header`
  isolation: isolate

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
      from 0.05turn at 35 % 20 %,
      #fedf8d 0 %,
      #c8599d,
      #fd8574,
      #fedf8d 85 %
    );
    background-repeat: no-repeat;
    background-size: 200 %;
    background-clip: text;
  }
`
const Mouse = styled(MouseSVG)`
  max-width: 50px;
`
const MousePath = styled(MousePathSVG)`
  max-width: 90px;
  position: relative;
  left: 22px;
`
