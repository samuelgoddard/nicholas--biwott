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
import BlockContent from '@sanity/block-content-to-react'
import SanityPageService from '@/services/sanityPageService'

// Test these queries...
const query = `{
  "businessman": *[_type == "businessman"][0]{
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
    section1Heading,
    section1Text,
    section1Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    section2Heading,
    section2Text,
    section2Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    section3Quote {
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
    section4Heading,
    section4Text,
    section4Image {
      asset -> {
        ...
      },
      caption,
      alt
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

export default function BusinessMan(initialData) {
  const { data: { businessman } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title={businessman.seo?.metaTitle ? businessman.seo.metaTitle : businessman.title }
        description={businessman.seo?.metaDesc ? businessman.seo.metaDesc : null }
      />
      
      <LocomotiveScrollProvider
        options={{ smooth: false }}
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
                    metaText={businessman.hero.heroMetaText}
                    firstWord={businessman.hero.heroWord1}
                    secondWord={businessman.hero.heroWord2}
                    thirdWord={businessman.hero.heroWord3}
                    image={businessman.hero.heroQuote.quoteImage.asset}
                    imageCaption={businessman.hero.heroQuote.quoteImage.caption}
                    quote={businessman.hero.heroQuote.quoteText}
                    quoteCaption={businessman.hero.heroQuote.author}
                    quoteCite={businessman.hero.heroQuote.authorTitle}
                    reverse
                  />

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">{businessman.section1Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content mb-8 md:mb-0 overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              className="w-full"
                              alt={businessman.section1Image.alt}
                              image={businessman.section1Image.asset}
                              baseWidth={720}
                              baseHeight={720}
                            />
                            {businessman.section1Image.caption && (<figcaption>{businessman.section1Image.caption}</figcaption>)}
                          </figure>
                        </div>
                        <div className="w-full md:w-1/2 content md:px-12 xl:px-16 max-w-2xl">

                          <div className="content">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={businessman.section1Text} />
                          </div>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-11/12 md:w-10/12 mb-8 md:mb-12 xl:mb-16 md:ml-auto">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">{businessman.section2Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                      <div className="w-full md:w-7/12 relative content mb-8 md:mb-0">
                          <figure>
                            <SanityImageWrapper
                              className="w-full"
                              alt={businessman.section2Image.alt}
                              image={businessman.section2Image.asset}
                              baseWidth={720}
                              baseHeight={550}
                            />
                            {businessman.section2Image.caption && (<figcaption>{businessman.section2Image.caption}</figcaption>)}
                          </figure>
                        </div>

                        <div className="w-full md:w-5/12 content md:pl-12 xl:pl-16 max-w-2xl">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={businessman.section2Text} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                      <div className="w-full md:w-7/12 content order-2 md:order-1">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>{businessman.section3Quote.quoteText}</p>

                            <figcaption>{businessman.section3Quote.author}{businessman.section3Quote.authorTitle && (<>,<cite>{businessman.section3Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 relative content order-1 md:order-2 mb-6 md:mb-0">
                      
                        <figure>
                          <SanityImageWrapper
                            className="w-full"
                            alt={businessman.section3Quote.quoteImage.alt}
                            image={businessman.section3Quote.quoteImage.asset}
                            baseWidth={720}
                            baseHeight={900}
                          />
                          {businessman.section3Quote.quoteImage.caption && (<figcaption>{businessman.section3Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-12/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 ml-auto">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{businessman.section4Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12 content md:pr-16 xl:pr-24 max-w-2xl mb-8 md:mb-0 order-2 md:order-1">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={businessman.section4Text} />
                        </div>

                        <div className="w-full md:w-7/12 relative content order-1 md:order-2">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              className="w-full"
                              alt={businessman.section4Image.alt}
                              image={businessman.section4Image.asset}
                              baseWidth={900}
                              baseHeight={700}
                            />
                            {businessman.section4Image.caption && (<figcaption>{businessman.section4Image.caption}</figcaption>)}
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

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}