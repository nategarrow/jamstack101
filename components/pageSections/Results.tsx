import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useCountUp } from 'react-countup';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ScoreProps {
  start: number
  end: number
  delay: number
}

const Score = ({ start: startVal = 0, end = 100, delay = 0 }: ScoreProps) => {
  const ref = useRef(null)
  // const { start } = useCountUp({
  //   ref,
  //   start: startVal,
  //   end,
  //   delay,
  //   duration: 1
  // })

  // useEffect(() => {
  //   start()
  // }, [ref])

  return <div className="flex justify-center items-center">
    <ScoreSpan ref={ref} className="xl:text-5xl lg:text-4xl text-2xl font-bold text-bright-green">
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={95} text={`100`}
          styles={buildStyles({
            rotation: .27,
            strokeLinecap: 'butt',
            textColor: '#EFFFE2',
            pathColor: '#EFFFE2',
            trailColor: 'rgba(0,0,0,0)',

          })}
          strokeWidth={2}
        />
      </div>
    </ScoreSpan>
  </div>
}

const PageResults = () => {
  return (
    <section className="relative px-8">
      <AuditScoresContainer className="relative -mt-[100px] px-8 lg:py-[140px] md:py-[90px] py-14">
        <h3 className="xl:text-7xl lg:text-5xl text-3xl text-beige text-4xl font-black text-center mb-16">top audit scores</h3>
        <div className="grid gap-4 lg:grid-cols-4 grid-cols-2 lg:my-20 my-14 ">
          <Score start={60} end={100} delay={0} />
          <Score start={60} end={100} delay={500} />
          <Score start={60} end={100} delay={1000} />
          <Score start={60} end={100} delay={1500} />
        </div>

        <DivGradient className="relative">
          <p className="text-2xl opacity-80 font-normal text-transparent bg-clip-text bg-gradient-to-br from-[rgb(148,202,134)] to-[rgb(123,123,123)]">Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</p>

          <p className="text-2xl opacity-80 font-normal text-transparent bg-clip-text bg-gradient-to-br from-[rgb(148,202,134)] to-[rgb(123,123,123)]">Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.</p>

          <p className="text-2xl opacity-80 font-normal text-transparent bg-clip-text bg-gradient-to-br from-[rgb(148,202,134)] to-[rgb(123,123,123)]">A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>

        </DivGradient>
      </AuditScoresContainer>
    </section>
  )
}

export default PageResults

const AuditScoresContainer = styled.div`
  background: linear-gradient(-25.39deg, rgba(255, 255, 255, 0.024) 18.54%, rgba(123, 245, 93, 0.108) 62.25%);
  backdrop-filter: blur(120px);
  min-height: 40vh;
  border: 1px solid rgba(45,66,40,.3);
  border-radius: 60px;
  width: min(1500px, 95%);
  margin-inline: auto;
`
const ScoreSpan = styled.span`
  text-shadow: 0px 0px 12px #53FB2A, 0px 0px 42px #E9E11F, 0px 0px 61px #53FB2A;
`
const DivGradient = styled.div`
// background-image: linear-gradient(165deg, rgb(255,0,0) 5%, rgb(0,255,0) 40%);
// background-image: linear-gradient(165deg, rgb(148,202,134) 15%, rgb(123,123,123) 60%);
  p {
    max-width: 800px;
    margin-inline: auto;
    margin-bottom: 2rem;
    position: relative;
    background-repeat: no-repeat;
    background-size: 200%;
  }
`