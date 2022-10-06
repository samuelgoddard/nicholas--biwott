import Container from "./container";
import TimelineNav from "./timeline-nav";
import { m } from 'framer-motion'
import { reveal } from '@/helpers/transitions'
import ImageWrapper from "./image-wrapper"
import SanityImageWrapper from "./sanity-image-wrapper"

export default function Hero({ metaText, secondMetaText, firstWord, secondWord, thirdWord, image, imageCaption, quote, quoteCaption, quoteCite, timeline, reverse, wide}) {
  return (
    <>
      <section className="mb-8 md:mb-16 xl:mb-24 relative">
        <div className="w-full mb-6 md:mb-8 xl:mb-10">
          <Container>
            <div className={`text-center mx-auto ${ wide ? 'max-w-[600px] md:max-w-[800px] xl:max-w-[960px]' : 'max-w-[600px] md:max-w-[740px] xl:max-w-[900px]'}`}>
              <span className="block overflow-hidden mb-5">
                <m.span variants={reveal} className="block text-sm uppercase text-gold">{metaText}</m.span>
              </span>

              <m.h1 
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{
                  enter: { transition: { delayChildren: 0.5, staggerChildren: 0.5 } }
                }}
                className="text-5xl md:text-6xl xl:text-7xl 3xl:text-8xl leading-[1.2] md:leading-[1.1] xl:leading-[1.1] 3xl:leading-[1.12] font-normal"
              >
                {firstWord && (
                  <span className="inline-block overflow-hidden mx-1">
                    <m.span variants={reveal} className="block text-black">{firstWord}.</m.span>
                  </span>
                )}
                {secondWord && (
                  <span className="inline-block overflow-hidden mx-1">
                    <m.span variants={reveal} className="block text-green">{secondWord}.</m.span>
                  </span>
                )}
                {thirdWord && (
                  <span className="inline-block overflow-hidden mx-1">
                    <m.span variants={reveal} className="block text-red">{thirdWord}.</m.span>
                  </span>
                )}
              </m.h1>
              
              {secondMetaText && (
                <span className="block overflow-hidden mb-5">
                  <m.span variants={reveal} className="block text-sm uppercase text-gold">{secondMetaText}</m.span>
                </span>
              )}
            </div>
          </Container>
        </div>

        {timeline && (
          <Container>
            <TimelineNav />
          </Container>
        )}
      </section>
      
      {image && (
        <Container>
          <section className={`flex flex-wrap mb-24 md:mb-32 xl:mb-40 ${reverse ? 'flex-row-reverse' : '' }`}>
            <div className={`w-full md:w-7/12 relative content ${reverse ? 'mb-6 md:mb-0' : '' }`}>
              <figure>
                <SanityImageWrapper
                  className="w-full"
                  alt="placeholder"
                  image={image}
                  baseWidth={900}
                  baseHeight={660}
                />
                
                {imageCaption && (
                  <figcaption>{imageCaption}</figcaption>
                )}
              </figure>
            </div>

            <div className={`w-full md:w-5/12 content mb-6 md:mb-0 max-w-2xl ${reverse ? 'md:pr-12 xl:pr-16' : 'md:pl-12 xl:pl-16' }`} data-scroll data-scroll-speed={0.25}>
              <figure className="block">
                <blockquote data-scroll data-scroll-speed={-0.55} className="blockquote blockquote--small">
                  <p>“{quote}”</p>
                  <figcaption>{quoteCaption} {quoteCite && (<cite>{quoteCite}</cite>)}</figcaption>
                </blockquote>
              </figure>
            </div>
          </section>
        </Container>
      )}
    </>
  )
}