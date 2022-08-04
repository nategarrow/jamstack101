import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';

type Props = React.PropsWithChildren<{
  className?: string
}>

const RectangleImg: React.FC<Props> = ({ className = '', children }) => {
  return (
    <ImageContainer className={`${className} max-w-[400px]`}>
      {children}
    </ImageContainer>
  )
}

export default RectangleImg

const ImageContainer = styled.div`
  position: relative;
  z-index: 11;

  > span {
    z-index: 12;
  }
  &:before {
    content: '';
    position: absolute;
    top: 40%;
    left: 60%;
    border-radius: 60px;
    width: 100%;
    height: 65%;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
    z-index: 100;
    
  }
`