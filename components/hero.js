import Container from "./container";
import TimelineNav from "./timeline-nav";
import { m } from 'framer-motion'
import { reveal } from '@/helpers/transitions'

export default function Hero({ metaText, firstWord, secondWord, thirdWord, image, imageCaption, quote, quoteCaption, quoteCite, timeline, reverse}) {
  return (
    <>
      <section className="mb-8 md:mb-16 xl:mb-24 relative">
        <div className="w-full mb-6 md:mb-8 xl:mb-10">
          <Container>
            <div className="text-center max-w-[600px] md:max-w-[740px] xl:max-w-[900px] mx-auto">
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
                <span className="inline-block overflow-hidden mx-1">
                  <m.span variants={reveal} className="block text-black">{firstWord}.</m.span>
                </span>
                <span className="inline-block overflow-hidden mx-1">
                  <m.span variants={reveal} className="block text-green">{secondWord}.</m.span>
                </span>
                <span className="inline-block overflow-hidden mx-1">
                  <m.span variants={reveal} className="block text-red">{thirdWord}.</m.span>
                </span>
              </m.h1>
            </div>
          </Container>
        </div>

        {timeline && (
          <Container>
            <TimelineNav />
          </Container>
        )}
      </section>

      <Container>
        <section className={`flex flex-wrap mb-12 md:mb-24 xl:mb-32 ${reverse ? 'flex-row-reverse' : '' }`}>
          <div className={`w-full md:w-7/12 relative content ${reverse ? 'mb-6 md:mb-0' : '' }`}>
            <figure>
              <img className="w-full" src={image} alt="Placeholder" />
              <figcaption>{imageCaption}</figcaption>
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
    </>
  )
}