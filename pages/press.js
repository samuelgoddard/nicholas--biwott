import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import ButtonLink from '@/components/buttonLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import NavSection from '@/components/nav-section'
import Hero from '@/components/hero'
import Header from '@/components/header'
import TimelineNav from '@/components/timeline-nav'

export default function Press() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Press" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <Header />

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
                          <span className="block text-sm uppercase text-gold mb-5">Press</span>
                          <h1 className="text-5xl md:text-7xl xl:text-8xl xl:leading-[1.09] font-normal">
                            <span className="inline-block text-black mr-1">Press</span>
                          </h1>
                        </div>
                      </Container>
                    </div>
                  </section>

                  <Container>
                    <section className="relative mb-8 md:mb-20 xl:mb-24 pb-12 md:pb-16 xl:pb-24 pt-5 md:pt-8 xl:pt-12 xl:px-12">
                      <div className="flex flex-wrap w-full">
                        <div className="w-full md:w-[300px] mb-5 md:mb-0">
                          <div className="w-full md:w-[250px]">
                            <span className="block text-sm text-navy mb-5 font-medium">Categories</span>

                            <span className="inline-block text-sm text-gold underline mb-3 mr-5 font-medium">Life</span>
                            <span className="inline-block text-sm text-gold underline mb-3 mr-5 font-medium">Recent</span>
                            <span className="inline-block text-sm text-gold underline mb-3 mr-5 font-medium">Public Servant</span>
                            <span className="inline-block text-sm text-gold underline mb-3 mr-5 font-medium">Other</span>
                          </div>
                        </div>
                        <div className="w-full md:flex-1">
                          <ul className="border-t border-off-black border-opacity-20">
                            <li className="block">
                              <Link href="/press-template">
                                <a className="flex border-b border-off-black border-opacity-20 py-5 md:py-8">
                                  <span className="text-2xl md:text-3xl xl:text-4xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">Once a Lace Capital, Now Riven by French Politics</span>

                                  <span className="block w-auto text-right ml-8 md:ml-12 xl:ml-24">
                                    <span className="block text-sm text-gold mb-2 font-medium">11.11.21</span>
                                    <span className="block text-sm text-gold underline font-medium">Recent</span>
                                  </span>
                                </a>
                              </Link>
                            </li>

                            <li className="block">
                              <Link href="/press-template">
                                <a className="flex border-b border-off-black border-opacity-20 py-5 md:py-8">
                                  <span className="text-2xl md:text-3xl xl:text-4xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">HNA Group, Secretive Chinese Conglomerate, Takes Top Stake in Deutsche Bank</span>

                                  <span className="block w-auto text-right ml-8 md:ml-12 xl:ml-24">
                                    <span className="block text-sm text-gold mb-2 font-medium">11.11.21</span>
                                    <span className="block text-sm text-gold underline font-medium">Recent</span>
                                  </span>
                                </a>
                              </Link>
                            </li>

                            <li className="block">
                              <Link href="/press-template">
                                <a className="flex border-b border-off-black border-opacity-20 py-5 md:py-8">
                                  <span className="text-2xl md:text-3xl xl:text-4xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">A Spring Thaw? Trump Now Has ‘Very Good’ Words for China’s Leader</span>

                                  <span className="block w-auto text-right ml-8 md:ml-12 xl:ml-24">
                                    <span className="block text-sm text-gold mb-2 font-medium">11.11.21</span>
                                    <span className="block text-sm text-gold underline font-medium">Recent</span>
                                  </span>
                                  </a>
                                </Link>
                            </li>

                            <li className="block">
                              <Link href="/press-template">
                                <a className="flex border-b border-off-black border-opacity-20 py-5 md:py-8">
                                  <span className="text-2xl md:text-3xl xl:text-4xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">Marine Le Pen Draws Cheers in Macron’s Hometown, and He Gets Boos</span>

                                  <span className="block w-auto text-right ml-8 md:ml-12 xl:ml-24">
                                    <span className="block text-sm text-gold mb-2 font-medium">11.11.21</span>
                                    <span className="block text-sm text-gold underline font-medium">Recent</span>
                                  </span>
                                </a>
                              </Link>
                            </li>

                            <li className="block">
                              <Link href="/press-template">
                                <a className="flex border-b border-off-black border-opacity-20 py-5 md:py-8">
                                  <span className="text-2xl md:text-3xl xl:text-4xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">Why Trump’s Budding Bromance With Xi Is Doomed</span>

                                  <span className="block w-auto text-right ml-8 md:ml-12 xl:ml-24">
                                    <span className="block text-sm text-gold mb-2 font-medium">11.11.21</span>
                                    <span className="block text-sm text-gold underline font-medium">Recent</span>
                                  </span>
                                </a>
                              </Link>
                            </li>

                            <li className="block">
                              <Link href="/press-template">
                                <a className="flex py-5 md:py-8">
                                  <span className="text-2xl md:text-3xl xl:text-4xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">Trump’s 100 Days on World Stage: Rallying Some and Repelling Others</span>

                                  <span className="block w-auto text-right ml-8 md:ml-12 xl:ml-24">
                                    <span className="block text-sm text-gold mb-2 font-medium">11.11.21</span>
                                    <span className="block text-sm text-gold underline font-medium">Recent</span>
                                  </span>
                                </a>
                              </Link>
                            </li>
                          </ul>
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
