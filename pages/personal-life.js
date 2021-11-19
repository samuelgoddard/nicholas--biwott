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
import ImageWrapper from '@/components/image-wrapper'

export default function PersonalLife() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Personal Life" />
      
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
                    metaText="Personal Life"
                    firstWord="Vision"
                    secondWord="Energy"
                    thirdWord="Duty"
                    image="/images/early-life/1.jpg"
                    imageCaption="An Image Caption"
                    quote="Nicholas Biwott managed to do something which many of us have not succeeded in doing. He managed to have a robust public life but managed to keep his family away and secure."
                    quoteCaption="William Ruto"
                    quoteCite="Deputy President of Kenya (2013 - )"
                  />

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">During his time studying in Australia, Biwott met Dutch-born Hannie, whom he married in 1963 and with whom he had two children. He also had five other children by three women.</h2>
                      </div>

                      <div className="flex flex-wrap mb-12 md:mb-24 xl:mb-32 items-center">
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
                              <p>Hannie, be strong and have faith in the fact that those few who threw stones, and said hurtful things, they did it because Nicholas Biwott was a strong man and a strong institution in this country. Take courage in the knowledge that nobody throws stones at a tree that bears no fruit. They only throw stones at the tree that has fruit. Nicholas Biwott was a tree that had fruit that will bear for this country for many, many, many years to come.</p>

                              <figcaption>Uhuru Kenyatta,<cite>President of Kenya (2013 - )</cite></figcaption>
                            </blockquote>
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 md:ml-auto">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">Suffering from the effects of end-stage kidney disease, Nicholas Biwott spent his last months surrounded by his family and friends. He died aged 77, on 11th July 2017, at The Nairobi Hospital.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12 content md:pr-16 xl:pr-24 max-w-2xl mb-8 md:mb-0 order-2 md:order-1">
                          <p>His funeral service was held at AIC Milimani Church in Nairobi on 18th July 2017, presided over by the Rev. Dr. Matthews Mwalw’a. Such was the demand for a hero’s send-off to be given to Biwott, community leaders and clergy of different denominations and faiths organised an event to honour him in his constituency, followed by a larger memorial service at the girls’ school Biwott built in memory his mother, the Maria Soti Educational Centre. In all, over 20,000 people attended these three commemorations of Biwott’s life, including President Kenyatta; the Leader of the Opposition, Raila Odinga; the Kenyan Cabinet, past and present; dignitaries from East Africa, such as the former President of Tanzania, Jakaya Kikwete; Heads of the Civil Service, industry and charities, as well as friends and thousands of constituents, young and old.</p>
                        </div>

                        <div className="w-full md:w-7/12 relative content order-1 md:order-2">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <ImageWrapper
                              className="w-full"
                              alt="placeholder"
                              src={"/images/early-life/3.jpg"}
                              width={900}
                              height={600}
                            />
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="flex justify-center">
                        <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 md:mx-auto text-center">
                          <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.12] font-normal text-navy">Lasting three days (and televised live on six major stations across Kenya, such was the interest in him), the public farewell to Biwott ensured that, in the words of one person present, “in death, his life spoke loudest.”</h2>
                        </div>
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
