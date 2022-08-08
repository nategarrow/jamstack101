import React from 'react'
import styled from 'styled-components';

type Props = React.PropsWithChildren<{
  className?: string
  position?: string
}>

const RectangleImg: React.FC<Props> = ({ className = '', position = "left", children }) => {
  // cleanup class names because classlists were getting too long
  const sizeClasses = `row-span-2 col-span-2 md:row-span-3 md:col-span-1 xl:row-span-4`
  const leftColClasses = "left-col col-start-1 row-start-3 mt-20 md:col-start-3 lg:row-start-2 lg:mt-0 xl:row-start-2 z-20"
  const rightColClasses = "right-col col-start-3 row-start-3 md:col-start-4 lg:row-start-1 xl:row-start-1 z-10"
  const containerClasses = position === "left" ? [className, leftColClasses, sizeClasses].join(' ') : [className, rightColClasses, sizeClasses].join(' ')

  return (
    <ImageContainer className={`${containerClasses} max-w-[400px]`}>
      <Blur className="absolute w-full h-full" />
      {children}
    </ImageContainer>
  )
}

export default RectangleImg

const ImageContainer = styled.div`
  position: relative;
`
const Blur = styled.div`
    img {
      display: block;
      object-fit: contain;
      max-width: 100%;
    }
  

  &:before {
    content: '';
    position: absolute;
    top: 45%;
    left: 60%;
    border-radius: 60px;
    width: 90%;
    height: 75%;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
    z-index: 100;

    @media (max-width: 1023px) {
      border-radius: 30px;
    }
  }
`
