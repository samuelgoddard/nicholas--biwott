import { useRef } from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import NavSection from '@/components/nav-section'
import Header from '@/components/header'
import Link from 'next/link'

export default function Menu() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Menu" />
      
      <LocomotiveScrollProvider
        options={{ smooth: false }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <Header menu />
            
            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {/* pt-[108px] md:pt-[136px] xl:pt-[156px] */}
                <m.main variants={fade}>
                  <section className="min-h-screen flex flex-wrap relative pt-[112px] md:pt-[138px]">
                    <div className="mt-auto w-full md:min-h-[600px] mb-12 md:mb-0">
                      <NavSection backTextFirst="Nicholas" backTextSecond="Biwott" metaText="The Life Of Nicholas" />
                    </div>

                    <div className="mt-auto w-full pb-12">
                      <Container>
                        <ul className="flex flex-wrap text-sm md:text-base justify-center">
                          {/* <li className="w-1/2 md:w-1/4 py-2 text-center uppercase">
                            <Link href="/quotes">
                              <a className="block hover:opacity-70 focus:opacity-70 ease-in-out duration-300 transition-opacity">
                                Quotes
                              </a>
                            </Link>
                          </li> */}
                          {/* <li className="w-1/2 md:w-1/4 py-2 text-center uppercase">
                            <Link href="/sources">
                              <a className="block hover:opacity-70 focus:opacity-70 ease-in-out duration-300 transition-opacity">
                                Sources
                              </a>
                            </Link>
                          </li> */}
                          <li className="w-1/2 md:w-1/4 py-2 text-center uppercase">
                            <a className="block" href="mailto:contact@nicholasbiwott.com">
                              Contact
                            </a>
                          </li>
                          {/* <li className="w-1/2 md:w-1/4 py-2 text-center uppercase">
                            <Link href="/copyright">
                              <a className="block hover:opacity-70 focus:opacity-70 ease-in-out duration-300 transition-opacity">
                                Copyright
                              </a>
                            </Link>
                          </li> */}
                        </ul>
                      </Container>
                    </div>
                  </section>
                </m.main>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
