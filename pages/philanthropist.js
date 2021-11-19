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

export default function Philanthropist() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Philanthropist" />
      
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
                    metaText="Philanthropist"
                    firstWord="Healthcare"
                    secondWord="Community"
                    thirdWord="Entrepreneurship"
                    image="/images/businessman/1.jpg"
                    imageCaption="An Image Caption"
                    quote="He spent decades building schools and hospitals, and spearheading every other kind of development."
                    quoteCaption="Uhuru Kenyatta"
                    quoteCite="President of Kenya (2013 -)"
                    reverse
                    wide
                  />

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">Nicholas Biwott was a dedicated philanthropist whose passion focused on three critical areas – education, healthcare, and entrepreneurialism. For over half a century, he raised the funds, spearheaded the initiatives and built the resources that Kenya needed to become a modern, just and successful nation.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content mb-8 md:mb-0 overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <ImageWrapper
                              className="w-full"
                              alt="placeholder"
                              src={"/images/businessman/2.jpg"}
                              width={720}
                              height={720}
                            />
                          </figure>
                        </div>
                        <div className="w-full md:w-1/2 content md:px-12 xl:px-16 max-w-2xl">
                          <p>Understanding the country’s future lay in the hands of successive generations ahead, education was his greatest passion, its importance having been instilled in him by his parents.</p>
                          
                          <p>He helped – directly and indirectly – train and educate many thousands of young Kenyans, equipping them with the skills and knowledge to take the country forward. His fundraising efforts and contributions saw the building of sixteen schools, many of which he served as Chairman of the Board of Governors.</p>
                          
                          <p>He built and funded in its entirety the Maria Soti Educational Centre in Eldoret – a school for girls from all backgrounds and areas of Kenya, named after his mother – and was the founder and patron of the Keiyo South Education Foundation, providing bursaries to thousands of students at all levels of education. He took tremendous pride in elevating Elgeyo Marakwet to one of the nation’s top ranked school districts.</p>
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
                            <p>Biwott was a father to me and many of us from Elgeyo Marakwet County and he took care of all of us when we were in Nairobi for college, when we were in primary and secondary school and all those who later were in Nairobi looking for employment.</p>

                            <figcaption>Alex Tolgos,<cite>Governor of Elgeyo-Marakwet County (2013 - )</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-12/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 ml-auto">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">An equally energetic fundraiser to improve the health of Kenyans, he raised and contributed money for the construction and expansion of two hospitals, three health centres and eight medical dispensaries.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12 content md:pr-16 xl:pr-24 max-w-2xl mb-8 md:mb-0 order-2 md:order-1">
                          <p>For close to 40 years, he worked quietly to support the National Fund for the Disabled of Kenya, serving as a founding trustee and member of its various committees.</p>
                          
                          <p>His closeness to this cause was such that when he died, the Fund donated the coffin that would be used.</p>
                        </div>

                        <div className="w-full md:w-7/12 relative content order-1 md:order-2">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <ImageWrapper
                              className="w-full"
                              alt="placeholder"
                              src={"/images/businessman/5.jpg"}
                              width={900}
                              height={700}
                            />
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32 items-center">
                      <div className="w-full md:w-7/12 content order-2 md:order-1">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>“He has been a committed and dedicated trustee in helping the Fund achieve its mandate, mission, vision and core objectives despite his other overwhelming official and personal commitments. Those of us who have worked with him knew him as a kind man whose love, passion and generosity to the less-abled will be solely missed. His quest and participation in the fights for the rights of economic empowerment of persons living with disabilities will also be missed.”</p>
                            <figcaption>Kristina Pratt,<cite>Chairwoman of the National Fund for the Disabled of Kenya</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 relative content order-1 md:order-2 mb-6 md:mb-0">
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
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-12/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 ml-auto">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">Stemming from his own days as an entrepreneur, Biwott was always keen to help small businesses grow, to boost the nation’s economy and create jobs.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-7/12 relative content">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <ImageWrapper
                              className="w-full"
                              alt="placeholder"
                              src={"/images/businessman/5.jpg"}
                              width={900}
                              height={700}
                            />
                          </figure>
                        </div>

                        <div className="w-full md:w-5/12 content md:pl-8 xl:pl-12 max-w-2xl mb-8 md:mb-0">
                          <p>He founded, and served as patron of, Keiyo Trade Winds, to promote and assist community businesses, young firms, and small-scale farming.</p>
                          
                          <p>After retiring from front line politics, he established the Mgebu Charitable Trust to carry on fulfilling his mission of promoting regional cooperation and ‘sowing the seeds of education, enterprise and opportunity in East Africa’.</p>
                        </div>
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
