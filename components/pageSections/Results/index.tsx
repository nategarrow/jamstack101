import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Score from "./ScoreCounter"

const PageResults = () => {
  const resultsRef = useRef<any>(null)
  const [hasRun, setHasRun] = useState<boolean>(false)
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver((sections, observer) => {
      const section = sections[0]
      if (!hasRun && section.isIntersecting) setIsOnScreen(section.isIntersecting)
    });
    observer.observe(resultsRef.current);
  }, []);

  useEffect(() => {
    const getDistToTop = () => {
      const distanceToTop = resultsRef.current.getBoundingClientRect().top;
      if (distanceToTop <= 750) setHasRun(true)
    }
    window.addEventListener('scroll', getDistToTop);
    return () => window.removeEventListener(`scroll`, getDistToTop)
  }, [isOnScreen])

  return (
    <section className="relative mx-auto ">
      <div ref={resultsRef}>
        <AuditScoresContainer className="relative -mt-4 px-8 py-14 md:py-[90px] lg:-mt-[100px] lg:py-[140px]">
          <h3 className="text-beige font-black text-center mb-16">top audit scores</h3>
          <div className="grid gap-8 grid-cols-2 my-14 sm:grid-cols-4 lg:my-20">
            <Score hasRun={hasRun} start={30} end={100} delay={0} title="Performance" className="ease-in-out duration-200 hover:opacity-60" />
            <Score hasRun={hasRun} start={30} end={100} delay={100} title="Accessibility" className="ease-in-out duration-200 hover:opacity-60 " />
            <Score hasRun={hasRun} start={30} end={100} delay={200} title="SEO" className="ease-in-out duration-200 hover:opacity-60 " />
            <Score hasRun={hasRun} start={30} end={100} delay={300} title="Awesome" className="ease-in-out duration-200 hover:opacity-60 " />
          </div>

          <DivGradient className="relative">
            <p className=" text-xl opacity-80 font-normal text-transparent bg-clip-text bg-gradient-to-br from-[rgb(148,202,134)] to-[rgb(123,123,123)] sm:text-2xl">Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</p>

            <p className=" text-xl opacity-80 font-normal text-transparent bg-clip-text bg-gradient-to-br from-[rgb(148,202,134)] to-[rgb(123,123,123)] sm:text-2xl">Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.</p>

            <p className=" text-xl opacity-80 font-normal text-transparent bg-clip-text bg-gradient-to-br from-[rgb(148,202,134)] to-[rgb(123,123,123)] sm:text-2xl">A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>

          </DivGradient>
        </AuditScoresContainer>
      </div>
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