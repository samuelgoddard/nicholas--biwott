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

export default function EarlyLife() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Early Life" />
      
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
                    metaText="Early Life"
                    firstWord="Diligence"
                    secondWord="Aspiration"
                    thirdWord="Dedication"
                    image="https://placedog.net/640/460"
                    imageCaption="An Image Caption"
                    quote="I was sent to school at a young age at the insistence of my mother, who instilled in us the importance of discipline and education. I well remember my father carrying me on his back through swollen rivers to make sure I got to school! And he encouraged me to continue my education through to university."
                    quoteCaption="Nicholas Biwott"
                  />

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">Kipyator Nicholas Kiprono arap Biwott was born in 1940, into the Kalenjin tribe in Chebior Village, Keiyo District, in what was then British Kenya.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content mb-8 md:mb-0 overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <img className="w-full" src="https://placedog.net/640/450" alt="Placeholder" />
                          </figure>

                          <div className="flex flex-wrap content content--small md:-mx-3">
                            <p className="w-full md:w-1/2 md:px-3">His parents, Maria Soti (1911-1986) and Cheserem (1908-2009), had a strong influence on his early years. At a time when few Kenyans went to school, his parents instilled in him the fundamental value of education, as the key to greater opportunity, personal liberty and a better life, as well as a belief in the necessity of education for all.</p>
                            
                            <p className="w-full md:w-1/2 md:px-3">They even educated other children and provided shelter for those on their way to boarding school, while Cheserem founded and served as Chairman of the Biwott School. His parents’ influence would inspire him to devote a large part of his life to.</p>
                          </div>  
                        </div>
                        <div className="w-full md:w-1/2 content md:px-12 xl:px-16 max-w-2xl">
                          <p>His parents, Maria Soti (1911-1986) and Cheserem (1908-2009), had a strong influence on his early years. At a time when few Kenyans went to school, his parents instilled in him the fundamental value of education, as the key to greater opportunity, personal liberty and a better life, as well as a belief in the necessity of education for all.</p>
                          
                          <p>They even educated other children and provided shelter for those on their way to boarding school, while Cheserem founded and served as Chairman of the Biwott School. His parents’ influence would inspire him to devote a large part of his life to supporting and developing educational projects in Kenya culminating in the building of the Maria Soti Girls Secondary School, a model school for girls, which he developed and paid for as a tribute to his mother.</p>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 md:ml-auto">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">Biwott started school at Mokwo Primary, heading to Tambach Intermediate School (1951-54) and then boarded at Kapsabet High School (1955-58), which remains to this day one of Kenya’s leading boys’ educational establishments.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12 content md:pr-16 xl:pr-24 max-w-2xl mb-8 md:mb-0 order-2 md:order-1">
                          <p>His parents, Maria Soti (1911-1986) and Cheserem (1908-2009), had a strong influence on his early years. At a time when few Kenyans went to school, his parents instilled in him the fundamental value of education, as the key to greater opportunity, personal liberty and a better life, as well as a belief in the necessity of education for all.</p>
                          
                          <p>They even educated other children and provided shelter for those on their way to boarding school, while Cheserem founded and served as Chairman of the Biwott School. His parents’ influence would inspire him to devote a large part of his life to supporting and developing educational projects in Kenya culminating in the building of the Maria Soti Girls Secondary School, a model school for girls, which he developed and paid for as a tribute to his mother.</p>
                        </div>

                        <div className="w-full md:w-7/12 relative content order-1 md:order-2">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <img className="w-full" src="https://placedog.net/640/400" alt="Placeholder" />
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-7/12 content md:pr-16 xl:pr-24 mb-8 md:mb-0">
                          <h2 className="block text-3xl md:text-4xl xl:text-5xl font-normal text-navy">Biwott started school at Mokwo Primary, heading to Tambach Intermediate School (1951-54) and then boarded at Kapsabet High School (1955-58), which remains to this day one of Kenya’s leading boys’ educational establishments.</h2>

                          <p>His parents, Maria Soti (1911-1986) and Cheserem (1908-2009), had a strong influence on his early years. At a time when few Kenyans went to school, his parents instilled in him the fundamental value of education, as the key to greater opportunity, personal liberty and a better life, as well as a belief in the necessity of education for all.</p>
                          
                          <p>They even educated other children and provided shelter for those on their way to boarding school, while Cheserem founded and served as Chairman of the Biwott School. His parents’ influence would inspire him to devote a large part of his life to supporting and developing educational projects in Kenya culminating in the building of the Maria Soti Girls Secondary School, a model school for girls, which he developed and paid for as a tribute to his mother.</p>
                        </div>

                        <div className="w-full md:w-5/12 relative content">
                          <figure className="mb-6 md:mb-8 xl:mb-10 w-full md:max-w-[450px] ml-auto">
                            <img className="w-full" src="https://placedog.net/550/800" alt="Placeholder" />
                          </figure>
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
