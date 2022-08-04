import React from 'react'
import styled from 'styled-components';

const PageFooter = () => {
  return (
    <Footer className="relative px-8 py-20">
      <div className="flex flex-col items-center">
        <p className="mb-12 text-center tracking-wider">This is a design test by Nathan for Monogram.</p>
        <div className="h-20 w-20 center-all grid content-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Footer>
  )
}

export default PageFooter

const Footer = styled.footer`
  position: relative;
  z-index: 10;
  p {
    color: white;
  }

  svg {
    fill: #FF069C;
    animation: 1s infinite alternate pulse ease-in-out;
  }

  @keyframes pulse {
    from {
      height: 40px;
      width: 40px;
    }
    to {
      height: 60px;
      wight: 60px;
    }
  }
`