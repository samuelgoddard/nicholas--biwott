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
  "philanthropist": *[_type == "philanthropist"][0]{
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
    section15Heading,
    section15Text,
    section1Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    section2Quote {
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
    section3Heading,
    section3Text,
    section3Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    section4Text,
    section4Quote {
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
    section5Heading,
    section5Text,
    section5Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    section6Quote {
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

export default function Philanthropist(initialData) {
  const { data: { philanthropist } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title={philanthropist.seo?.metaTitle ? philanthropist.seo.metaTitle : philanthropist.title }
        description={philanthropist.seo?.metaDesc ? philanthropist.seo.metaDesc : null }
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
                    metaText={philanthropist.hero.heroMetaText}
                    firstWord={philanthropist.hero.heroWord1}
                    secondWord={philanthropist.hero.heroWord2}
                    thirdWord={philanthropist.hero.heroWord3}
                    image={philanthropist.hero.heroQuote.quoteImage.asset}
                    imageCaption={philanthropist.hero.heroQuote.quoteImage.caption}
                    quote={philanthropist.hero.heroQuote.quoteText}
                    quoteCaption={philanthropist.hero.heroQuote.author}
                    quoteCite={philanthropist.hero.heroQuote.authorTitle}
                    reverse
                    wide
                  />

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">{philanthropist.section1Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content mb-8 md:mb-0 overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={philanthropist.section1Image.alt}
                              image={philanthropist.section1Image.asset}
                              baseWidth={720}
                              baseHeight={720}
                            />
                            {philanthropist.section1Image.caption && (<figcaption>{philanthropist.section1Image.caption}</figcaption>)}
                          </figure>
                        </div>
                        <div className="w-full md:w-1/2 content md:px-12 xl:px-16 max-w-2xl">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={philanthropist.section1Text} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-12/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 ml-auto">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{philanthropist.section15Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-3/12 content md:pr-16 xl:pr-24 max-w-2xl mb-8 md:mb-0 order-2 md:order-1">
                        </div>

                        <div className="w-full md:w-9/12 relative content order-1 md:order-2">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={philanthropist.section15Text} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0 md:pr-8 xl:pr-12">
                        <figure>
                          <SanityImageWrapper
                            className="w-full"
                            alt={philanthropist.section2Quote.quoteImage.alt}
                            image={philanthropist.section2Quote.quoteImage.asset}
                            baseWidth={720}
                            baseHeight={900}
                          />
                          {philanthropist.section2Quote.quoteImage.caption && (<figcaption>{philanthropist.section2Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>

                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>{philanthropist.section2Quote.quoteText}</p>

                            <figcaption>{philanthropist.section2Quote.author}{philanthropist.section2Quote.authorTitle && (<>,<cite>{philanthropist.section2Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-12/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 ml-auto">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{philanthropist.section3Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12 content md:pr-16 xl:pr-24 max-w-2xl mb-8 md:mb-0 order-2 md:order-1">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={philanthropist.section3Text} />
                        </div>

                        <div className="w-full md:w-7/12 relative content order-1 md:order-2">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={philanthropist.section3Image.alt}
                              image={philanthropist.section3Image.asset}
                              baseWidth={900}
                              baseHeight={700}
                            />
                            {philanthropist.section3Image.caption && (<figcaption>{philanthropist.section3Image.caption}</figcaption>)}
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48">
                      <div className="w-full md:w-8/12 content order-2 md:order-1 mt-24 md:mt-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>{philanthropist.section4Quote.quoteText}</p>

                            <figcaption>{philanthropist.section4Quote.author}{philanthropist.section4Quote.authorTitle && (<>,<cite>{philanthropist.section4Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>
                      <div className="w-full md:w-4/12  relative content order-1 md:order-2 mb-6 md:mb-0">
                        <BlockContent serializers={{ container: ({ children }) => children }} blocks={philanthropist.section4Text} />
                        {/* <figure>
                          <SanityImageWrapper
                            alt={philanthropist.section4Quote.quoteImage.alt}
                            image={philanthropist.section4Quote.quoteImage.asset}
                            baseWidth={720}
                            baseHeight={900}
                          />
                          {philanthropist.section4Quote.quoteImage.caption && (<figcaption>{philanthropist.section4Quote.quoteImage.caption}</figcaption>)}
                        </figure> */}
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-12/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 ml-auto">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{philanthropist.section5Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-7/12 relative content">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={philanthropist.section5Image.alt}
                              image={philanthropist.section5Image.asset}
                              baseWidth={900}
                              baseHeight={700}
                            />
                            {philanthropist.section5Image.caption && (<figcaption>{philanthropist.section5Image.caption}</figcaption>)}
                          </figure>
                        </div>

                        <div className="w-full md:w-5/12 content md:pl-8 xl:pl-12 max-w-2xl mb-8 md:mb-0">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={philanthropist.section5Text} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                      <div className="w-full md:w-7/12 content order-2 md:order-1">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>{philanthropist.section6Quote.quoteText}</p>

                            <figcaption>{philanthropist.section6Quote.author}{philanthropist.section6Quote.authorTitle && (<>,<cite>{philanthropist.section6Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 relative content order-1 md:order-2 mb-6 md:mb-0">
                        <figure>
                          <SanityImageWrapper
                            alt={philanthropist.section6Quote.quoteImage.alt}
                            image={philanthropist.section6Quote.quoteImage.asset}
                            baseWidth={720}
                            baseHeight={900}
                          />
                          {philanthropist.section6Quote.quoteImage.caption && (<figcaption>{philanthropist.section6Quote.quoteImage.caption}</figcaption>)}
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

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}