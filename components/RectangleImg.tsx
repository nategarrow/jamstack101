import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';

type Props = React.PropsWithChildren<{
  className?: string
}>

const RectangleImg: React.FC<Props> = ({ className = '', children }) => {
  return (
    <ImageContainer className={`${className} max-w-[400px]`}>
      <span>
        {children}
      </span>
    </ImageContainer>
  )
}

export default RectangleImg

const ImageContainer = styled.div`
  position: relative;

  span img {
    display: block;
  }

  span:before {
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