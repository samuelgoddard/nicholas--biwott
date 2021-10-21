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
import Header from '@/components/header'

export default function Menu() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Menu" />
      
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
                <m.main variants={fade}>
                  <section className="min-h-screen flex flex-wrap mb-12 md:mb-24 xl:mb-32 relative pt-[112px] md:pt-[138px]">
                    <div className="mt-auto w-full md:min-h-[600px] mb-12 md:mb-0">
                      <NavSection backTextFirst="Nicholas" backTextSecond="Biwott" metaText="The Life Of Nicholas" />
                    </div>

                    <div className="mt-auto w-full pb-12">
                      <Container>
                        <ul className="flex flex-wrap text-sm md:text-base justify-center">
                          <li className="w-1/2 md:w-1/4 py-2 text-center uppercase">Quote</li>
                          <li className="w-1/2 md:w-1/4 py-2 text-center uppercase">Press</li>
                          <li className="w-1/2 md:w-1/4 py-2 text-center uppercase">Sources</li>
                          <li className="w-1/2 md:w-1/4 py-2 text-center uppercase">Contact</li>
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
