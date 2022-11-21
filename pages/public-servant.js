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
  "publicServant": *[_type == "publicServant"][0]{
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
    sixtiesSection1Heading,
    sixtiesSection1Text,
    sixtiesSection1Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    sixtiesSection1TextRight,
    sixtiesSection2Quote {
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
    sixtiesSection3Text,
    sixtiesSection3Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    sixtiesSection4Quote {
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
    seventiesSection1Heading,
    seventiesSection1Text,
    seventiesSection1Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    seventiesSection2Heading,
    seventiesSection2Text,
    seventiesSection2Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    seventiesSection3Quote {
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
    eightiesSection1Heading,
    eightiesSection1Text,
    eightiesSection1Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    eightiesSection1Image2 {
      asset -> {
        ...
      },
      caption,
      alt
    },
    eightiesSection2Quote {
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
    ninetiesSection1Heading,
    ninetiesSection1Text,
    ninetiesSection1TextRight,
    ninetiesSection15Quote {
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
    ninetiesSection1Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    ninetiesSection2Quote {
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
    ninetiesSection3Heading,
    ninetiesSection3Text,
    ninetiesSection3Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    ninetiesSection4Quote1 {
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
    ninetiesSection4Quote2 {
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
    ninetiesSection4Quote3 {
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
    ninetiesSection4QuoteHeading,
    ninetiesSection4QuoteAuthor,
    ninetiesSection4QuoteAuthorTitle,
    ninetiesSection5Heading,
    ninetiesSection5Text,
    ninetiesSection5Image {
      asset -> {
        ...
      },
      caption,
      alt
    },
    ninetiesSection6Quote {
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
    ninetiesSection6VideoEmbed,
    ninetiesSection6VideoCaption,
    noughtiesSection1Heading,
    noughtiesSection1Text,
    noughtiesSection1TextRight,
    noughtiesSection1QuoteImage {
      asset -> {
        ...
      },
      caption,
      alt
    },
    noughtiesSection1QuoteHeading,
    noughtiesSection1QuoteAuthor,
    noughtiesSection1QuoteAuthorTitle,
    noughtiesSection1Quote {
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
    noughtiesSection2Quote {
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

export default function PublicServant(initialData) {
  const { data: { publicServant } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title={publicServant.seo?.metaTitle ? publicServant.seo.metaTitle : publicServant.title }
        description={publicServant.seo?.metaDesc ? publicServant.seo.metaDesc : null }
      />
      
      <LocomotiveScrollProvider
        options={{ smooth: false }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>            
            <Header timeline />

            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {/* pt-[108px] md:pt-[136px] xl:pt-[156px] */}
                <m.main variants={fade} className="mb-12 md:mb-16 xl:mb-24 pt-[112px] md:pt-[138px] overflow-hidden">
                  <Hero
                    metaText={publicServant.hero.heroMetaText}
                    firstWord={publicServant.hero.heroWord1}
                    secondWord={publicServant.hero.heroWord2}
                    thirdWord={publicServant.hero.heroWord3}
                    image={publicServant.hero.heroQuote.quoteImage.asset}
                    imageCaption={publicServant.hero.heroQuote.quoteImage.caption}
                    quote={publicServant.hero.heroQuote.quoteText}
                    quoteCaption={publicServant.hero.heroQuote.author}
                    quoteCite={publicServant.hero.heroQuote.authorTitle}
                    reverse
                    timeline
                  />

                  {/* SIXTIES */}
                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48" id="sixties" data-scroll data-scroll-repeat data-scroll-call="sixties">
                      <div className="absolute top-0 left-0 ml-[-10%] 3xl:ml-[-15%] mt-[-15%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">60's</span>
                      </div>

                      <div className="w-11/12 md:w-9/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{publicServant.sixtiesSection1Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 content md:pr-12 xl:pr-16 max-w-2xl mb-8 md:mb-0">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.sixtiesSection1Text} />
                        </div>

                        <div className="w-full md:w-1/2 relative content overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={publicServant.sixtiesSection1Image.alt}
                              image={publicServant.sixtiesSection1Image.asset}
                              baseWidth={900}
                              baseHeight={1200}
                            />
                            {publicServant.sixtiesSection1Image.caption && (
                              <figcaption>{publicServant.sixtiesSection1Image.caption}</figcaption>
                            )}
                          </figure>

                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.sixtiesSection1TextRight} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0">
                        <figure>
                          <SanityImageWrapper
                            alt={publicServant.sixtiesSection2Quote.quoteImage.alt}
                            image={publicServant.sixtiesSection2Quote.quoteImage.asset}
                            baseWidth={720}
                            baseHeight={900}
                          />
                          {publicServant.sixtiesSection2Quote.quoteImage.caption && (<figcaption>{publicServant.sixtiesSection2Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-16 xl:pl-24">
                            <p>{publicServant.sixtiesSection2Quote.quoteText}</p>

                            <figcaption>{publicServant.sixtiesSection2Quote.author}{publicServant.sixtiesSection2Quote.authorTitle && (<>,<cite>{publicServant.sixtiesSection2Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 content md:pr-12 xl:pr-16 max-w-2xl mb-8 md:mb-0">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.sixtiesSection3Text} />
                        </div>

                        <div className="w-full md:w-1/2 relative content overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={publicServant.sixtiesSection3Image.alt}
                              image={publicServant.sixtiesSection3Image.asset}
                              baseWidth={900}
                              baseHeight={600}
                            />
                            {publicServant.sixtiesSection3Image.caption && (
                              <figcaption>{publicServant.sixtiesSection3Image.caption}</figcaption>
                            )}
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  {/* SEVENTIES */}
                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48" id="seventies" data-scroll data-scroll-repeat data-scroll-call="seventies">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure>
                          <SanityImageWrapper
                            alt={publicServant.sixtiesSection4Quote.quoteImage.alt}
                            image={publicServant.sixtiesSection4Quote.quoteImage.asset}
                            baseWidth={900}
                            baseHeight={680}
                          />
                          {publicServant.sixtiesSection4Quote.quoteImage.caption && (<figcaption>{publicServant.sixtiesSection4Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>{publicServant.sixtiesSection4Quote.quoteText}</p>

                            <figcaption>{publicServant.sixtiesSection4Quote.author}{publicServant.sixtiesSection4Quote.authorTitle && (<>,<cite>{publicServant.sixtiesSection4Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                              
                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="absolute top-0 right-0 mr-[-7%] 3xl:mr-[-15%] mt-[-8%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">70's</span>
                      </div>

                      <div className="w-11/12 md:w-9/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{publicServant.seventiesSection1Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={publicServant.seventiesSection1Image.alt}
                              image={publicServant.seventiesSection1Image.asset}
                              baseWidth={900}
                              baseHeight={700}
                            />
                            {publicServant.seventiesSection1Image.caption && (
                              <figcaption>{publicServant.seventiesSection1Image.caption}</figcaption>
                            )}
                          </figure>
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.seventiesSection1Text} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-7/12 content md:pr-16 xl:pr-24 mb-8 md:mb-0">
                          <h2 className="block text-3xl md:text-4xl xl:text-5xl font-normal text-navy">{publicServant.seventiesSection2Heading}</h2>

                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.seventiesSection2Text} />
                        </div>

                        <div className="w-full md:w-5/12 relative content">
                          <figure className="mb-6 md:mb-8 xl:mb-10 w-full md:max-w-[450px] ml-auto">
                            <SanityImageWrapper
                              alt={publicServant.seventiesSection2Image.alt}
                              image={publicServant.seventiesSection2Image.asset}
                              baseWidth={900}
                              baseHeight={1100}
                            />
                            {publicServant.seventiesSection2Image.caption && (
                              <figcaption>{publicServant.seventiesSection2Image.caption}</figcaption>
                            )}
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48" id="eighties" data-scroll data-scroll-repeat data-scroll-call="eighties">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure>
                          <SanityImageWrapper
                            alt={publicServant.seventiesSection3Quote.quoteImage.alt}
                            image={publicServant.seventiesSection3Quote.quoteImage.asset}
                            baseWidth={720}
                            baseHeight={550}
                          />
                          {publicServant.seventiesSection3Quote.quoteImage.caption && (<figcaption>{publicServant.seventiesSection3Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>{publicServant.seventiesSection3Quote.quoteText}</p>

                            <figcaption>{publicServant.seventiesSection3Quote.author}{publicServant.seventiesSection3Quote.authorTitle && (<>,<cite>{publicServant.seventiesSection3Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>
                  
                  {/* EIGHTIES */}
                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="absolute top-0 right-0 mr-[-7%] 3xl:mr-[-15%] mt-[-8%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">80's</span>
                      </div>

                      <div className="w-11/12 md:w-9/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{publicServant.eightiesSection1Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={publicServant.eightiesSection1Image.alt}
                              image={publicServant.eightiesSection1Image.asset}
                              baseWidth={900}
                              baseHeight={600}
                            />
                            {publicServant.eightiesSection1Image.caption && (
                              <figcaption>{publicServant.eightiesSection1Image.caption}</figcaption>
                            )}
                          </figure>
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.eightiesSection1Text} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-2/3 relative content overflow-hidden mb-8 md:mb-0">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={publicServant.eightiesSection1Image2.alt}
                              image={publicServant.eightiesSection1Image2.asset}
                              baseWidth={900}
                              baseHeight={600}
                            />
                            {publicServant.eightiesSection1Image2.caption && (
                              <figcaption>{publicServant.eightiesSection1Image2.caption}</figcaption>
                            )}
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>


                  {/* NINETIES */}
                  

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48" id="nineties" data-scroll data-scroll-repeat data-scroll-call="nineties">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure>
                          <SanityImageWrapper
                            className="w-full"
                            alt={publicServant.eightiesSection2Quote.quoteImage.alt}
                            image={publicServant.eightiesSection2Quote.quoteImage.asset}
                            baseWidth={900}
                            baseHeight={650}
                          />
                          {publicServant.eightiesSection2Quote.quoteImage.caption && (<figcaption>{publicServant.eightiesSection2Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>{publicServant.eightiesSection2Quote.quoteText}</p>

                            <figcaption>{publicServant.eightiesSection2Quote.author}{publicServant.eightiesSection2Quote.authorTitle && (<>,<cite>{publicServant.eightiesSection2Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>


                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="absolute top-0 right-0 mr-[-7%] 3xl:mr-[-15%] mt-[-8%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">90's</span>
                      </div>

                      <div className="w-11/12 md:w-8/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{publicServant.ninetiesSection1Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.ninetiesSection1Text} />
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.ninetiesSection1TextRight} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 overflow-hidden" id="nineties" data-scroll data-scroll-repeat data-scroll-call="nineties">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-12 xl:pr-16">
                            <p>{publicServant.ninetiesSection15Quote.quoteText}</p>

                            <figcaption>{publicServant.ninetiesSection15Quote.author}{publicServant.ninetiesSection15Quote.authorTitle && (<>,<cite>{publicServant.ninetiesSection15Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                      <figure>
                        <SanityImageWrapper
                          className="w-full"
                          alt={publicServant.ninetiesSection15Quote.quoteImage.alt}
                          image={publicServant.ninetiesSection15Quote.quoteImage.asset}
                          baseWidth={659}
                          baseHeight={900}
                        />
                        {publicServant.ninetiesSection15Quote.quoteImage.caption && (<figcaption>{publicServant.ninetiesSection15Quote.quoteImage.caption}</figcaption>)}
                      </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-2/3 relative content overflow-hidden mb-8 md:mb-0">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={publicServant.ninetiesSection1Image.alt}
                              image={publicServant.ninetiesSection1Image.asset}
                              baseWidth={900}
                              baseHeight={600}
                            />
                            {publicServant.ninetiesSection1Image.caption && (
                              <figcaption>{publicServant.ninetiesSection1Image.caption}</figcaption>
                            )}
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0">
                        <figure>
                          <SanityImageWrapper
                            className="w-full"
                            alt={publicServant.ninetiesSection2Quote.quoteImage.alt}
                            image={publicServant.ninetiesSection2Quote.quoteImage.asset}
                            baseWidth={900}
                            baseHeight={1000}
                          />
                          {publicServant.ninetiesSection2Quote.quoteImage.caption && (<figcaption>{publicServant.ninetiesSection2Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>{publicServant.ninetiesSection2Quote.quoteText}</p>

                            <figcaption>{publicServant.ninetiesSection2Quote.author}{publicServant.ninetiesSection2Quote.authorTitle && (<>,<cite>{publicServant.ninetiesSection2Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="w-11/12 md:w-8/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{publicServant.ninetiesSection3Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.ninetiesSection3Text} />
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <figure className="w-full content md:pl-12 xl:pl-16 max-w-2xl">
                            <SanityImageWrapper
                              className="w-full"
                              alt={publicServant.ninetiesSection3Image.alt}
                              image={publicServant.ninetiesSection3Image.asset}
                              baseWidth={720}
                              baseHeight={720}
                            />
                            {publicServant.ninetiesSection3Image.caption && (
                              <figcaption>{publicServant.ninetiesSection3Image.caption}</figcaption>
                            )}
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0">
                        <figure>
                          <SanityImageWrapper
                            className="w-full"
                            alt={publicServant.ninetiesSection4Quote1.quoteImage.alt}
                            image={publicServant.ninetiesSection4Quote1.quoteImage.asset}
                            baseWidth={900}
                            baseHeight={1000}
                          />
                          {publicServant.ninetiesSection4Quote1.quoteImage.caption && (<figcaption>{publicServant.ninetiesSection4Quote1.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>{publicServant.ninetiesSection4Quote1.quoteText}</p>

                            <figcaption>{publicServant.ninetiesSection4Quote1.author}{publicServant.ninetiesSection4Quote1.authorTitle && (<>,<cite>{publicServant.ninetiesSection4Quote1.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0 order-1 md:order-2">
                        <figure>
                          <SanityImageWrapper
                            className="w-full"
                            alt={publicServant.ninetiesSection4Quote2.quoteImage.alt}
                            image={publicServant.ninetiesSection4Quote2.quoteImage.asset}
                            baseWidth={900}
                            baseHeight={1000}
                          />
                          {publicServant.ninetiesSection4Quote2.quoteImage.caption && (<figcaption>{publicServant.ninetiesSection4Quote2.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pr-12 xl:pr-16 order-2 md:text-right md:order-1">
                            <p>{publicServant.ninetiesSection4Quote2.quoteText}</p>

                            <figcaption>{publicServant.ninetiesSection4Quote2.author}{publicServant.ninetiesSection4Quote2.authorTitle && (<>,<cite>{publicServant.ninetiesSection4Quote2.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48" id="seventies" data-scroll data-scroll-repeat data-scroll-call="seventies">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure>
                          <SanityImageWrapper
                            alt={publicServant.ninetiesSection4Quote3.quoteImage.alt}
                            image={publicServant.ninetiesSection4Quote3.quoteImage.asset}
                            baseWidth={680}
                            baseHeight={900}
                          />
                          {publicServant.ninetiesSection4Quote3.quoteImage.caption && (<figcaption>{publicServant.ninetiesSection4Quote3.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>{publicServant.ninetiesSection4Quote3.quoteText}</p>

                            <figcaption>{publicServant.ninetiesSection4Quote3.author}{publicServant.ninetiesSection4Quote3.authorTitle && (<>,<cite>{publicServant.ninetiesSection4Quote3.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container>
                    <section className="content relative my-12 md:my-24 xl:my-32 py-8 md:py-12 xl:py-16 ">
                      <span className="block absolute top-0 left-0 h-10 ml-[48%] bg-off-white px-3 text-7xl font-display leading-none -mt-4 text-gold text-opacity-50">“</span>

                      <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-2/3 xl:w-1/2 text-center">
                          <figure className="block">
                            <blockquote className="blockquote blockquote--small">
                              <p>“{publicServant.ninetiesSection4QuoteHeading}”</p>
                              <figcaption>{publicServant.ninetiesSection4QuoteAuthor},<cite>{publicServant.ninetiesSection4QuoteAuthorTitle}</cite></figcaption>
                            </blockquote>
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{publicServant.ninetiesSection5Heading}</h2>
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <figure className="mb-8">
                            <SanityImageWrapper
                              alt={publicServant.ninetiesSection5Image.alt}
                              image={publicServant.ninetiesSection5Image.asset}
                              baseWidth={900}
                              baseHeight={680}
                            />
                            {publicServant.ninetiesSection5Image.caption && (<figcaption>{publicServant.ninetiesSection5Image.caption}</figcaption>)}
                          </figure>
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.ninetiesSection5Text} />
                        </div>
                      </div>
                    </section>
                  </Container>


                  {/* Noughties */}
                  <Container thin>
                    <section className="content relative mb-0 md:mb-0">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-2/3 relative content overflow-hidden mb-8 md:mb-0">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <SanityImageWrapper
                              alt={publicServant.noughtiesSection1QuoteImage.alt}
                              image={publicServant.noughtiesSection1QuoteImage.asset}
                              baseWidth={900}
                              baseHeight={600}
                            />
                            {publicServant.noughtiesSection1QuoteImage.caption && (
                              <figcaption>{publicServant.noughtiesSection1QuoteImage.caption}</figcaption>
                            )}
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="content relative mt-1 mb-12 md:mt-5 md:mb-24 xl:mt-8 xl:mb-32 pb-8 md:pb-12 xl:pb-16">
                      {/* <span className="block absolute top-0 left-0 h-10 ml-[48%] bg-off-white px-3 text-7xl font-display leading-none -mt-4 text-gold text-opacity-50">“</span> */}

                      <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-2/3 xl:w-1/2 text-center">
                          <figure className="block">
                            <blockquote className="blockquote blockquote--small">
                              <p>“{publicServant.noughtiesSection1QuoteHeading}”</p>
                              <figcaption>{publicServant.noughtiesSection1QuoteAuthor},<cite>{publicServant.noughtiesSection1QuoteAuthorTitle}</cite></figcaption>
                            </blockquote>
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0">
                        <figure>
                          <SanityImageWrapper
                            className="w-full"
                            alt={publicServant.noughtiesSection1Quote.quoteImage.alt}
                            image={publicServant.noughtiesSection1Quote.quoteImage.asset}
                            baseWidth={900}
                            baseHeight={1000}
                          />
                          {publicServant.noughtiesSection1Quote.quoteImage.caption && (<figcaption>{publicServant.noughtiesSection1Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>{publicServant.noughtiesSection1Quote.quoteText}</p>

                            <figcaption>{publicServant.noughtiesSection1Quote.author}{publicServant.noughtiesSection1Quote.authorTitle && (<>,<cite>{publicServant.noughtiesSection1Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-24 md:mb-32 xl:mb-48" id="noughties" data-scroll data-scroll-repeat data-scroll-call="noughties">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure>
                          <SanityImageWrapper
                            className="w-full"
                            alt={publicServant.ninetiesSection6Quote.quoteImage.alt}
                            image={publicServant.ninetiesSection6Quote.quoteImage.asset}
                            baseWidth={900}
                            baseHeight={630}
                          />
                          {publicServant.ninetiesSection6Quote.quoteImage.caption && (<figcaption>{publicServant.ninetiesSection6Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>{publicServant.ninetiesSection6Quote.quoteText}</p>

                            <figcaption>{publicServant.ninetiesSection6Quote.author}{publicServant.ninetiesSection6Quote.authorTitle && (<>,<cite>{publicServant.ninetiesSection6Quote.authorTitle}</cite></>)}</figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="flex justify-center">
                        <div className="w-11/12 md:w-9/12 mb-8 md:mb-12 xl:mb-16 md:mx-auto text-center">
                          <div className="video" dangerouslySetInnerHTML={{ __html: publicServant.ninetiesSection6VideoEmbed }} />

                          <figcaption>{publicServant.ninetiesSection6VideoCaption}</figcaption>
                        </div>
                      </div>
                    </section>
                  </Container>
                  

                  <Container thin>
                    <section className="content relative mb-24 md:mb-32 xl:mb-48">
                      <div className="absolute top-0 right-0 mr-[-7%] 3xl:mr-[-15%] mt-[-8%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">00's</span>
                      </div>

                      <div className="w-11/12 md:w-8/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">{publicServant.noughtiesSection1Heading}</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.noughtiesSection1Text} />
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={publicServant.noughtiesSection1TextRight} />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap items-center mb-24 md:mb-32 xl:mb-48" id="noughties">
                      <div className="w-full md:w-1/2 relative content order-2 md:order-1">
                        <figure>
                          <SanityImageWrapper
                            className="w-full"
                            alt={publicServant.noughtiesSection2Quote.quoteImage.alt}
                            image={publicServant.noughtiesSection2Quote.quoteImage.asset}
                            baseWidth={900}
                            baseHeight={900}
                          />
                          {publicServant.noughtiesSection2Quote.quoteImage.caption && (<figcaption>{publicServant.noughtiesSection2Quote.quoteImage.caption}</figcaption>)}
                        </figure>
                      </div>
                      <div className="w-full md:w-1/2 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-16 xl:pl-24">
                            <p>{publicServant.noughtiesSection2Quote.quoteText}</p>

                            <figcaption>{publicServant.noughtiesSection2Quote.author}{publicServant.noughtiesSection2Quote.authorTitle && (<>,<cite>{publicServant.noughtiesSection2Quote.authorTitle}</cite></>)}</figcaption>
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