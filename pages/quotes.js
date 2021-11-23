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
import ImageWrapper from '@/components/image-wrapper'

export default function Quotes() {
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
                  <Hero
                    metaText="Quotes"
                    firstWord="Something"
                    secondWord="About"
                    thirdWord="Quotes"
                    image="/images/businessman/1.jpg"
                    imageCaption="An Image Caption"
                    quote="Nicholas Biwott was a true giant in the business community…very rarely do we speak of a person who was not just a great public servant, a great politician, but also a great businessman. The man’s industry was truly legendary…it provided employment to thousands of Kenyans and also contributed immensely to the economy of this country."
                    quoteCaption="Kiprono Kittony"
                    quoteCite="Chairman of the Kenya National Chamber of Commerce and Industry (2012-19)"
                    reverse
                  />

                  <Container>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0 md:pr-8 xl:pr-12">
                        <figure>
                          <ImageWrapper
                            className="w-full"
                            alt="placeholder"
                            src={"/images/businessman/4.jpg"}
                            width={720}
                            height={900}
                          />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>

                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>“We are here to mourn a great Kenyan, a very intelligent Kenyan. In fact, in my life I have met intelligent people – one of them was Tom Mboya and the other is lying here. What Biwott has done to this country is there for everybody to see. Here lies a Kenyan who has touched the lives of very many people. I am glad that I represent the Western Kenyan people from Trans-Nzoia to speak here in honour of a great leader, a great politician, a great philosopher.”</p>

                            <figcaption>Dr. Noah Wekesa,<cite>Minister for Education, Science and Technology (2005-07) and Party of National Unity MP</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap flex-row-reverse mb-12 md:mb-24 xl:mb-32 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0 md:pr-8 xl:pr-12">
                        <figure>
                          <ImageWrapper
                            className="w-full"
                            alt="placeholder"
                            src={"/images/businessman/4.jpg"}
                            width={720}
                            height={900}
                          />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>

                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>“We are here to mourn a great Kenyan, a very intelligent Kenyan. In fact, in my life I have met intelligent people – one of them was Tom Mboya and the other is lying here. What Biwott has done to this country is there for everybody to see. Here lies a Kenyan who has touched the lives of very many people. I am glad that I represent the Western Kenyan people from Trans-Nzoia to speak here in honour of a great leader, a great politician, a great philosopher.”</p>

                            <figcaption>Dr. Noah Wekesa,<cite>Minister for Education, Science and Technology (2005-07) and Party of National Unity MP</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0 md:pr-8 xl:pr-12">
                        <figure>
                          <ImageWrapper
                            className="w-full"
                            alt="placeholder"
                            src={"/images/businessman/4.jpg"}
                            width={720}
                            height={900}
                          />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>

                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>“We are here to mourn a great Kenyan, a very intelligent Kenyan. In fact, in my life I have met intelligent people – one of them was Tom Mboya and the other is lying here. What Biwott has done to this country is there for everybody to see. Here lies a Kenyan who has touched the lives of very many people. I am glad that I represent the Western Kenyan people from Trans-Nzoia to speak here in honour of a great leader, a great politician, a great philosopher.”</p>

                            <figcaption>Dr. Noah Wekesa,<cite>Minister for Education, Science and Technology (2005-07) and Party of National Unity MP</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>
                    </section>
                  </Container>

                  <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
                    <NavSection />
                  </section>
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
