import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import ButtonLink from '@/components/buttonLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import NavSection from '@/components/nav-section'
import Hero from '@/components/hero'
import Header from '@/components/header'
import TimelineNav from '@/components/timeline-nav'

export default function Timeline() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Timeline" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <Header timeline />

            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {/* pt-[108px] md:pt-[136px] xl:pt-[156px] */}
                <m.main variants={fade} className="mb-12 md:mb-16 xl:mb-24 pt-[112px] md:pt-[138px]">
                  <section className="mb-16 md:mb-20 xl:mb-24 relative">
                    <div className="w-full mb-6 md:mb-8 xl:mb-10">
                      <Container>
                        <div className="text-center max-w-[600px] md:max-w-[740px] xl:max-w-[900px] mx-auto">
                          <span className="block text-sm uppercase text-gold mb-5">Timeline</span>
                          <h1 className="text-5xl md:text-7xl xl:text-8xl xl:leading-[1.09] font-normal">
                            <span className="inline-block text-black mr-1">The life of Nicholas</span>
                          </h1>
                        </div>
                      </Container>

                      <TimelineNav small />
                    </div>
                  </section>

                  <Container thinner>
                    <section className="relative mb-12 md:mb-24 xl:mb-32 pb-12 md:pb-16 xl:pb-24 pt-5 md:pt-8 xl:pt-12 px-12">
                      <div className="absolute top-0 bottom-0 left-0 ml-[49%]">
                        <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold opacity-25 rotate-45 block absolute top-0 left-0 mt-[-14px] md:mt-[-18px] ml-[-5px] md:ml-[-7px] bg-gold"></span>
                        <div className="h-full w-[2px] bg-gold bg-opacity-25"></div>
                        <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold opacity-25 rotate-45 block absolute bottom-0 left-0 mb-[-14px] md:mb-[-18px] ml-[-5px] md:ml-[-7px] bg-gold"></span>
                      </div>
                      
                      <div className="flex flex-wrap md:-mx-12">
                        <div className="w-full md:w-1/2 md:px-12 mb-8 relative" data-scroll data-scroll-speed={1.25}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1940</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 mt-6 md:mt-20 xl:mt-28 relative" data-scroll data-scroll-speed={1}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1948-1952</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 relative" data-scroll data-scroll-speed={1.25}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1940</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 mt-6 md:mt-20 xl:mt-28 relative" data-scroll data-scroll-speed={1}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>
                        
                          <span className="block uppercase text-gold mb-5">1948-1952</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 relative" data-scroll data-scroll-speed={1.25}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1940</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 mt-6 md:mt-20 xl:mt-28 relative" data-scroll data-scroll-speed={1}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1948-1952</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 relative" data-scroll data-scroll-speed={1.25}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1940</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 mt-6 md:mt-20 xl:mt-28 relative" data-scroll data-scroll-speed={1}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1948-1952</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 relative" data-scroll data-scroll-speed={1.25}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1940</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 mt-6 md:mt-20 xl:mt-28 relative" data-scroll data-scroll-speed={1}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1948-1952</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 relative" data-scroll data-scroll-speed={1.25}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1940</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 mt-6 md:mt-20 xl:mt-28 relative" data-scroll data-scroll-speed={1}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1948-1952</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 relative" data-scroll data-scroll-speed={1.25}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1940</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 mt-6 md:mt-20 xl:mt-28 relative" data-scroll data-scroll-speed={1}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1948-1952</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 relative" data-scroll data-scroll-speed={1.25}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1940</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 mt-6 md:mt-20 xl:mt-28 relative" data-scroll data-scroll-speed={1}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1948-1952</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 relative" data-scroll data-scroll-speed={1.25}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1940</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>

                        <div className="w-full md:w-1/2 md:px-12 mb-8 mt-6 md:mt-20 xl:mt-28 relative" data-scroll data-scroll-speed={1}>
                          <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>

                          <span className="block uppercase text-gold mb-5">1948-1952</span>
                          <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">Nicholas Biwott is born to Cheserem and Maria Soti in Chebior Village, British Kenya,</span>
                        </div>
                      </div>
                    </section>
                  </Container>
                </m.main>
                
                <m.div variants={fade}>
                  <Footer />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
