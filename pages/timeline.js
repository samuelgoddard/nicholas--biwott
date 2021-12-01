import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Header from '@/components/header'
import TimelineNav from '@/components/timeline-nav'
import SanityImageWrapper from '@/components/sanity-image-wrapper'
import SanityPageService from '@/services/sanityPageService'

// Test these queries...
const query = `{
  "timeline": *[_type == "timeline"][0]{
    title,
    timelineItems[] {
      timelineItemYear,
      timelineItemText
    }
  },
}`

const pageService = new SanityPageService(query)

export default function Timeline(initialData) {
  const { data: { timeline } } = pageService.getPreviewHook(initialData)()
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

                        {timeline.timelineItems.map((item, i) => {
                          return (
                            <div className={`w-full md:w-1/2 md:px-12 mb-8 relative ${i%2 !== 0 ? 'md:mt-16 xl:mt-20' : ''}`} data-scroll data-scroll-speed={i%2 !== 0 ? 1.25 : 1} key={i}>
                              
                              {i%2 !== 0 ? (
                                <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:right-auto mt-[4px] mx-auto md:ml-[-17px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-[-1px] bg-off-white"></span>
                              ) : (
                                <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold border-opacity-25 rotate-45 block absolute top-0 right-0 left-0 md:left-auto mt-[4px] mx-auto md:mr-[2px] translate-x-[-4px] md:translate-x-[3px] lg:translate-x-0 xl:translate-x-0 bg-off-white"></span>
                              )}

                              <span className="block uppercase text-gold mb-5">{item.timelineItemYear}</span>
                              <span className="block font-display text-2xl md:text-2xl xl:text-3xl text-navy leading-[1.25] md:leading-[1.25] xl:leading-[1.25]">{item.timelineItemText}</span>
                            </div>
                          )})
                        }
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

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}