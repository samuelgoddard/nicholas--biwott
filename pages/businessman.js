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

export default function BusinessMan() {
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
                    metaText="Businessman"
                    firstWord="Growth"
                    secondWord="Jobs"
                    thirdWord="Entrepreneurship"
                    image="/images/businessman/1.jpg"
                    imageCaption="An Image Caption"
                    quote="Nicholas Biwott was a true giant in the business community…very rarely do we speak of a person who was not just a great public servant, a great politician, but also a great businessman. The man’s industry was truly legendary…it provided employment to thousands of Kenyans and also contributed immensely to the economy of this country."
                    quoteCaption="Kiprono Kittony"
                    quoteCite="Chairman of the Kenya National Chamber of Commerce and Industry (2012-19)"
                    reverse
                  />

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">Following Kenya’s independence in 1963, the Government wanted to encourage the first generation of independent Kenyans, many of whom were civil servants, to support and grow the country’s emerging economy.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content mb-8 md:mb-0 overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <img className="w-full" src="/images/businessman/2.jpg" alt="Placeholder" />
                          </figure>
                        </div>
                        <div className="w-full md:w-1/2 content md:px-12 xl:px-16 max-w-2xl">
                          <p>Working with the nation’s banks, it introduced a favourable loan scheme to incentivise Kenyans to purchase assests formerly held by British and European settlers, and to invest in agriculture and business.</p>
                          
                          <p>To further boost growth in the nascent Kenyan economy, public servants were encouraged to be active in the private sector. The state wanted to draw on their knowledge and experience, and also to avoid a mass exodus of the talented people building the new nation to the private sector by allowing them to supplement their public sector income with legitimate business interests, following a commission led by the Governor of the Central Bank of Kenya, Duncan Ndegwa.</p>
                          
                          <p>Biwott formed part of this notable generation of prominent public servants who also worked in business, alongside names including Kenneth Matiba, Jeremiah Kiereini, Bruce McKenzie and Charles Njonjo.</p>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-10/12 mb-8 md:mb-12 xl:mb-16 md:ml-auto">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">Drawing on his experience working with his entrepreneurial father, Biwott started, bought, invested in and operated several business ventures, mainly in Kenya’s growing number of farms and small businesses, over the next few years.</h2>
                      </div>

                      <div className="flex flex-wrap">
                      < div className="w-full md:w-7/12 relative content mb-8 md:mb-0">
                          <figure>
                            <img className="w-full" src="/images/businessman/3.jpg" alt="Placeholder" />
                          </figure>
                        </div>

                        <div className="w-full md:w-5/12 content md:pl-12 xl:pl-16 max-w-2xl">
                          <p>In 1969, he purchased the Eldoret Town International Harvester franchise, as well as the Kipsinende dairy farm. About this time, he also began to build a real estate portfolio in Eldoret and Nairobi, and invested in wheat and maize commercial farming. He started an import-export food and agriculture business in 1972, bought two wheat farms in 1974 (one of which was the locally renowned Karo Farm), and acquired a small safari aircraft operator in 1977, now thriving as the bush safari airline, Air Kenya.</p>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32 items-center">
                      <div className="w-full md:w-7/12 content order-2 md:order-1">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>“Nicholas Biwott and I were friends for 40 years. He always saw the bigger picture and was a man who followed through on promises, a man who kept his word. He was a man of deeds. He spoke less and did more. When people were busy talking about how things should be done, and debating pros and cons, my friend, Nicholas, quietly went about getting the job done. In many ways, he epitomized action. He focused on getting things done - I am not surprised that he is still remembered as the “Total man”.”</p>
                            <figcaption>Pius Ngugi,<cite>Chairman of the Thika Coffee Mills</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 relative content order-1 md:order-2 mb-6 md:mb-0">
                        <figure>
                          <img className="w-full" src="/images/businessman/4.jpg" alt="Placeholder" />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-12/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 ml-auto">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">Over the decades, and even though there were some failures, Biwott’s development of his businesses, and his model of starting, buying and reinvesting in small or struggling Kenyan businesses run by professional management teams and independent boards, created jobs and increased prosperity for thousands of people. It also generated significant revenue for Kenya and opportunities for foreign investment in the country.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12 content md:pr-16 xl:pr-24 max-w-2xl mb-8 md:mb-0 order-2 md:order-1">
                          <p>For example, in 1981, Biwott purchased shares in Kenol, an insolvent publicly listed oil firm, eventually becoming one of its largest shareholders. Over the next four decades, the company was rebuilt and slowly grew to become one of Africa’s largest downstream oil companies, one of Kenya’s largest corporate taxpayers and a pan-African firm. Kenol’s significant growth coincided with the stock market boom following the 2002 General Election (when Biwott lost his Government position) - foreign investment poured into the country and exchange controls and foreign ownership restrictions were lifted. In the 1980s, there were no foreign investors in Kenol, but by the time French listed company, Rubis, took over the company in 2019, foreign institutional investors held over 50% of Kenol’s shares.</p>
                        </div>

                        <div className="w-full md:w-7/12 relative content order-1 md:order-2">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <img className="w-full" src="/images/businessman/5.jpg" alt="Placeholder" />
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
