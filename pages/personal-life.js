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
  "personalLife": *[_type == "personalLife"][0]{
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
    section1Qutoe {
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
    section2Heading,
    section2Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    section2Text,
    section3Heading,
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
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
}`

const pageService = new SanityPageService(query)

export default function PersonalLife(initialData) {
  const { data: { personalLife } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title={personalLife.seo?.metaTitle ? personalLife.seo.metaTitle : personalLife.title }
        description={personalLife.seo?.metaDesc ? personalLife.seo.metaDesc : null }
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
                    metaText={personalLife.hero.heroMetaText}
                    firstWord={personalLife.hero.heroWord1}
                    secondWord={personalLife.hero.heroWord2}
                    thirdWord={personalLife.hero.heroWord3}
                    image={personalLife.hero.heroQuote.quoteImage.asset}
                    imageCaption={personalLife.hero.heroQuote.quoteImage.caption}
                    quote={personalLife.hero.heroQuote.quoteText}
                    quoteCaption={personalLife.hero.heroQuote.author}
                    quoteCite={personalLife.hero.heroQuote.authorTitle}
                  />

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">{personalLife.section1Heading}</h2>
                      </div>

                      <div className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                        <div className="w-full md:w-5/12 relative content mb-6 md:mb-0 md:pr-8 xl:pr-12">
                          <figure>
                            <SanityImageWrapper
                              alt={personalLife.section1Qutoe.quoteImage.alt}
                              image={personalLife.section1Qutoe.quoteImage.asset}
                              baseWidth={900}
                              baseHeight={720}
                            />
                            {personalLife.section1Qutoe.quoteImage.caption && (<figcaption>{personalLife.section1Qutoe.quoteImage.caption}</figcaption>)}
                          </figure>
                        </div>

                        <div className="w-full md:w-7/12 content">
                          <figure className="block">
                            <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                              <p>{personalLife.section1Qutoe.quoteText}</p>

                              <figcaption>{personalLife.section1Qutoe.author}{personalLife.section1Qutoe.authorTitle && (<>,<cite>{personalLife.section1Qutoe.authorTitle}</cite></>)}</figcaption>
                            </blockquote>
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 md:ml-auto">
                        <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.09] font-normal text-navy">{personalLife.section2Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12 content md:pr-16 xl:pr-24 max-w-2xl mb-8 md:mb-0 order-2 md:order-1">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={personalLife.section2Text} />
                        </div>

                        <div className="w-full md:w-7/12 relative content order-1 md:order-2">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              
                              alt={personalLife.section2Image.alt}
                              image={personalLife.section2Image.asset}
                              baseWidth={900}
                              baseHeight={600}
                            />
                          </figure>
                          {personalLife.section2Image.caption && (<figcaption>{personalLife.section2Image.caption}</figcaption>)}
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="flex justify-center">
                        <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 md:mx-auto text-center">
                          <iframe className="video" width="100%" src="https://www.youtube.com/embed/EAABVhaWXl0" title="Nicholus Biwott dead: Murkomen speaks from Kaptarakwa, Keiyo South" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                          <h2 className="block text-3xl md:text-4xl xl:text-5xl xl:leading-[1.12] font-normal text-navy">{personalLife.section3Heading}</h2>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0 md:pr-8 xl:pr-12">
                        <figure>
                          <SanityImageWrapper
                            
                            alt={personalLife.section3Quote.quoteImage.alt}
                            image={personalLife.section3Quote.quoteImage.asset}
                            baseWidth={720}
                            baseHeight={900}
                          />
                          {personalLife.section3Quote.quoteImage.caption && (<figcaption>{personalLife.section3Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>

                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-16 xl:pr-24">
                            <p>{personalLife.section3Quote.quoteText}</p>

                            <figcaption>{personalLife.section3Quote.author}{personalLife.section3Quote.authorTitle && (<>,<cite>{personalLife.section3Quote.authorTitle}</cite></>)}</figcaption>
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

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}