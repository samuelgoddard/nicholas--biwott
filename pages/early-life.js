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
  "earlyLife": *[_type == "earlyLife"][0]{
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
    section1Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    section1LeftText,
    section1RightText,
    section2Heading,
    section2Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    section2LeftText,
    section3Heading,
    section3Text,
    section3Image {
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

export default function EarlyLife(initialData) {
  const { data: { earlyLife } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title={earlyLife.seo?.metaTitle ? earlyLife.seo.metaTitle : earlyLife.title }
        description={earlyLife.seo?.metaDesc ? earlyLife.seo.metaDesc : null }
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
                    metaText={earlyLife.hero.heroMetaText}
                    firstWord={earlyLife.hero.heroWord1}
                    secondWord={earlyLife.hero.heroWord2}
                    thirdWord={earlyLife.hero.heroWord3}
                    image={earlyLife.hero.heroQuote.quoteImage.asset}
                    imageCaption={earlyLife.hero.heroQuote.quoteImage.caption}
                    quote={earlyLife.hero.heroQuote.quoteText}
                    quoteCaption={earlyLife.hero.heroQuote.author}
                    quoteCite={earlyLife.hero.heroQuote.authorTitle}
                  />

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">{earlyLife.section1Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content mb-8 md:mb-0 overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              className="w-full"
                              alt={earlyLife.section1Image.alt}
                              image={earlyLife.section1Image.asset}
                              baseWidth={900}
                              baseHeight={600}
                            />
                          </figure>

                          <div className="content content--small css-cols">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={earlyLife.section1LeftText} />
                          </div>  
                        </div>
                        <div className="w-full md:w-1/2 content md:px-12 xl:px-16 max-w-2xl">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={earlyLife.section1RightText} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 md:ml-auto">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">{earlyLife.section2Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12 content md:pr-16 xl:pr-24 max-w-2xl mb-8 md:mb-0 order-2 md:order-1">
                          <div className="content">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={earlyLife.section2LeftText} />
                          </div>
                        </div>

                        <div className="w-full md:w-7/12 relative content order-1 md:order-2">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              className="w-full"
                              alt={earlyLife.section2Image.alt}
                              image={earlyLife.section2Image.asset}
                              baseWidth={900}
                              baseHeight={580}
                            />
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-7/12 content md:pr-16 xl:pr-24 mb-8 md:mb-0">
                          <h2 className="block text-3xl md:text-4xl xl:text-5xl font-normal text-navy">{earlyLife.section3Heading}</h2>

                          <div className="content">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={earlyLife.section3Text} />
                          </div>
                        </div>

                        <div className="w-full md:w-5/12 relative content">
                          <figure className="mb-6 md:mb-8 xl:mb-10 w-full md:max-w-[450px] ml-auto">
                            <ImageWrapper
                              className="w-full"
                              alt={earlyLife.section3Image.alt}
                              src={earlyLife.section3Image.asset.url}
                              width={720}
                              height={1060}
                            />
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