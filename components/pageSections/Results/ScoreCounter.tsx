interface ScoreProps {
  hasRun: boolean
  start: number
  end: number
  delay: number
  title: string
  className?: string
}

import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Score = ({ start = 0, end = 100, delay = 0, hasRun = false, title, className = '' }: ScoreProps) => {
  const ref = useRef(null)
  const [isDone, setIsDone] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(start)


  useEffect(() => {
    const startTimer = () => {
      const timer = setInterval(() => {
        if (counter >= end) {
          setIsDone(true)
          clearInterval(timer)
        }
        if (!isDone) setCounter(prevCounter => Math.min(prevCounter += 2, 100))
      }, 30)
      if (isDone) clearInterval(timer)
    }
    if (hasRun) setTimeout(startTimer, delay)
  }, [isDone, counter, hasRun])

  return <div className={`${className} flex justify-center items-center cursor-pointer`} title={title}>
    <ScoreSpan ref={ref} className="text-2xl font-bold text-bright-green lg:text-4xl xl:text-5xl">
      <CircularProgressbar
        value={counter * .96}
        text={`${counter}`}
        styles={buildStyles({
          rotation: .27,
          strokeLinecap: 'butt',
          textColor: '#EFFFE2',
          pathColor: '#EFFFE2',
          trailColor: 'rgba(0,0,0,0)',
          pathTransitionDuration: 0.3,
        })}
        strokeWidth={2}
      />
      <p className="text-2xl text-center mb-none text-bright-green absolute left-2/4 -translate-x-2/4 top-[65%] duration-200">{title}</p>
    </ScoreSpan>
  </div>
}

export default Score

const ScoreSpan = styled.span`
  text-shadow: 0px 0px 12px #53FB2A, 0px 0px 22px #E9E11F, 0px 0px 11px #53FB2A;

  svg {
    filter: drop-shadow(0px 0px 12px #53FB2A) drop-shadow(0px 0px 42px #E9E11F) drop-shadow(0px 0px 61px #53FB2A); 
  }

  > p {
    opacity: 0;
  }

  &:hover {
    > p {
      opacity: 1;
    }
  }
`
const Title = styled.span`

`