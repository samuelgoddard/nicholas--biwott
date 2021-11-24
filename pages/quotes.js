import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import NavSection from '@/components/nav-section'
import Hero from '@/components/hero'
import Header from '@/components/header'
import ImageWrapper from '@/components/image-wrapper'
import SanityImageWrapper from '@/components/sanity-image-wrapper'
import SanityPageService from '@/services/sanityPageService'

// Test these queries...
const query = `{
  "quotes": *[_type == "quotes"][0]{
    title,
    hero {
      heroMetaText,
      heroWord1,
      heroWord2,
      heroWord3,
      heroQuote {
        quoteText,
        author,
        authorTitle,
        quoteImage {
          asset -> {
            ...
          },
          caption,
          alt
        },
      }
    },
    quotes[] {
      quoteText,
      author,
      authorTitle,
      quoteImage {
        asset -> {
          ...
        },
        caption,
        alt
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
}`

const pageService = new SanityPageService(query)

export default function Quotes(initialData) {
  const { data: { quotes } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title={quotes.seo?.metaTitle ? quotes.seo.metaTitle : quotes.title }
        description={quotes.seo?.metaDesc ? quotes.seo.metaDesc : null }
      />
      
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
                    metaText={quotes.hero.heroMetaText}
                    firstWord={quotes.hero.heroWord1}
                    secondWord={quotes.hero.heroWord2}
                    thirdWord={quotes.hero.heroWord3}
                    image={quotes.hero.heroQuote.quoteImage.asset}
                    imageCaption={quotes.hero.heroQuote.quoteImage.caption}
                    quote={quotes.hero.heroQuote.quoteText}
                    quoteCaption={quotes.hero.heroQuote.author}
                    quoteCite={quotes.hero.heroQuote.authorTitle}
                    reverse
                  />

                  {quotes.quotes.map((quote, i) => {
                    return (
                      <Container key={i}>
                        <section className={`flex flex-wrap mb-12 md:mb-24 xl:mb-32 items-center ${i%2 !== 0 ? 'flex-row-reverse' : ''}`}>
                          <div className="w-full md:w-5/12 relative content mb-6 md:mb-0 md:pr-8 xl:pr-12">
                            <figure>
                              <SanityImageWrapper
                                className="w-full"
                                alt={quote.quoteImage.alt}
                                image={quote.quoteImage.asset}
                                baseWidth={720}
                                baseHeight={900}
                              />
                              {quote.quoteImage.caption && (<figcaption>{quote.quoteImage.caption}</figcaption>)}
                            </figure>
                          </div>

                          <div className="w-full md:w-7/12 content">
                            <figure className="block">
                              <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                                <p>{quote.quoteText}</p>

                                <figcaption>{quote.author}{quote.authorTitle && (<>,<cite>{quote.authorTitle}</cite></>)}</figcaption>
                              </blockquote>
                            </figure>
                          </div>
                        </section>
                      </Container>    
                    )
                  })}

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

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}