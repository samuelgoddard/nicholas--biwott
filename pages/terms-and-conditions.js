import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Header from '@/components/header'
import Hero from '@/components/hero'

export default function Terms() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Terms &amp; Conditions" />
      
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
                  
                  <div className="mb-12 md:mb-0">
                    <Hero metaText="Terms" firstWord="Terms &amp; Conditions" />
                  </div>

                  <Container thinnest>
                    <section className="mb-12 md:mb-24 xl:mb-32 content">

                      <h2>Testing Content</h2>
                      <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”.</p>
                      
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc est. Donec viverra, nibh et lobortis vehicula, ex velit commodo nulla, vel blandit quam nibh vitae purus. Nam pellentesque tellus nec odio consectetur suscipit. Sed tempus egestas sapien eu maximus. Aenean ac dolor vitae ipsum lacinia pharetra. Curabitur est quam, tincidunt ac justo sit amet, porttitor placerat est. Ut sed mi ex. Nulla luctus sem justo, sed condimentum tortor scelerisque vel. Donec a accumsan tellus. Phasellus quis massa ac orci viverra vestibulum. In eu aliquam eros. Suspendisse tempus sapien enim, in egestas neque luctus at. Donec eu nibh diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur at libero a risus semper bibendum.</p>
                      
                      <p>Morbi eu metus commodo, vulputate metus quis, rhoncus dolor. Sed fringilla rutrum libero at blandit. Pellentesque aliquam ac nisi nec lobortis. Vivamus tempor sagittis est, at consequat diam eleifend sed. Cras tristique sed sapien et dictum. Maecenas nulla libero, tincidunt ac fringilla eget, rutrum nec justo. Fusce semper gravida pharetra.</p>
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
