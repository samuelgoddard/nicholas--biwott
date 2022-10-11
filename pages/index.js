import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import ButtonLink from '@/components/buttonLink'
import { fade, reveal } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import NavSection from '@/components/nav-section'
import Header from '@/components/header'
import ImageWrapper from '@/components/image-wrapper'
import SanityImageWrapper from '@/components/sanity-image-wrapper'
import BlockContent from '@sanity/block-content-to-react'
import SanityPageService from '@/services/sanityPageService'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    heroWord1,
    heroWord2,
    heroWord3,
    heroText,
    heroImage {
      asset -> {
        ...
      },
      caption,
      alt
    },
    supportingContentImage {
      asset -> {
        ...
      },
      caption,
      alt
    },
    supportingContent,
    supportingQuote {
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

export default function Home(initialData) {
  const { data: { home, products } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      {/* @TODO Test this works... */}
      <NextSeo
        title={home.seo?.metaTitle ? home.seo.metaTitle : home.title }
        description={home.seo?.metaDesc ? home.seo.metaDesc : null }
        openGraph={{
          title: home.seo?.metaTitle ? home.seo.metaTitle : home.title,
          description: home.seo?.metaDesc ? home.seo.metaDesc : null,
        }}
      />
      
      <LocomotiveScrollProvider
        options={{ smooth: false }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>            
            <Header/>

            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {/* pt-[108px] md:pt-[136px] xl:pt-[156px] */}
                <m.main variants={fade} className="mb-12 md:mb-16 xl:mb-24 md:pt-0">
                  <section className="md:min-h-screen flex flex-wrap md:items-center mb-12 md:mb-24 xl:mb-32 relative">
                    <div className="md:absolute md:inset-0 flex flex-wrap items-center order-2 md:order-1">
                      <div className="w-full" data-scroll data-scroll-speed={0.45}>
                        <div className="px-6 md:pl-10 md:pr-0 xl:pl-12 xl:pr-0 xl:pt-32">
                          <m.h1 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={{
                              enter: { transition: { staggerChildren: 0.5 } }
                            }}
                            className="text-5xl md:text-6xl xl:text-7xl 3xl:text-8xl leading-[1.2] md:leading-[1.1] xl:leading-[1.1] 3xl:leading-[1.12] font-normal"
                          >
                            <span className="block overflow-hidden">
                              <m.span variants={reveal} className="block text-black">{home.heroWord1}.</m.span>
                            </span>
                            <span className="block overflow-hidden">
                              <m.span variants={reveal} className="block text-green">{home.heroWord2}.</m.span>
                            </span>
                            <span className="block overflow-hidden">
                              <m.span variants={reveal} className="block text-red">{home.heroWord3}.</m.span>
                            </span>
                          </m.h1>
                          
                          <m.div
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={{
                              enter: { transition: { delayChildren: 1.75 } }
                            }}
                            className="content md:max-w-[330px] xl:max-w-[490px]"
                          >
                            <m.div variants={fade} className="content">
                              <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.heroText} />

                              <a href="#content" className="mt-12 md:mt-16 md:-mb-16 xl:mt-16 xl:-mb-16 block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                                <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g stroke="#8E7E62" fill="none" fill-rule="evenodd"><path d="M54.586 28 28 54.586 1.414 28 28 1.414 54.586 28Z" stroke-width="2" opacity=".5"/><path fill="#8E7E62" fill-rule="nonzero" d="m34.977 29.02-7.24 7.246-7.242-7.244.851-.853 5.787 5.787V19.37h1.206v14.586l5.79-5.789z"/></g></svg>
                              </a>
                            </m.div>
                          </m.div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 xl:w-7/12 ml-auto h-[50vh] md:h-full md:min-h-screen relative  order-1 md:order-2 mb-8 md:mb-0">
                      <div className="w-full h-full absolute inset-0 bg-grey">
                        <ImageWrapper
                          className="w-full h-full object-cover"
                          alt="placeholder"
                          src={home.heroImage.asset.url}
                          fill
                        />
                      </div>
                    </div>
                  </section>

                  <Container>
                    <section className="flex flex-wrap items-center mb-12 md:mb-24 xl:mb-32" id="content">
                      <div className="w-full md:w-1/2 relative content order-2 md:order-1">
                        <figure>
                          <SanityImageWrapper
                            alt={home.supportingContentImage.alt}
                            image={home.supportingContentImage.asset}
                            baseWidth={900}
                            baseHeight={900}
                          />
                          {home.supportingContentImage.caption && (
                            <figcaption>{home.supportingContentImage.caption}</figcaption>
                          )}
                        </figure>
                      </div>
                      <div className="w-full md:w-1/2 content md:px-12 lg:px-20 xl:px-24 order-1 md:order-2 mb-6 md:mb-0 max-w-2xl" data-scroll data-scroll-speed={0.25}>
                        <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.supportingContent} />

                        <div className="mt-5">
                          <ButtonLink destination="/public-servant" a11yText="Find Out More" label="Find Out More" />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative py-10 md:py-24 xl:py-32">
                      <figure className="w-11/12 relative z-10 mb-5 md:mb-0">
                        <blockquote data-scroll data-scroll-speed={0.55}>
                          <p>{home.supportingQuote.quoteText}.”</p>
                          <figcaption>{home.supportingQuote.author}<cite>{home.supportingQuote.authorTitle}</cite></figcaption>
                        </blockquote>
                      </figure>

                      <figure className="md:absolute md:top-0 md:right-0 md:bottom-0 z-0 opacity-60 w-full md:w-1/2">
                        <div className='hidden md:block'>
                          <SanityImageWrapper
                            alt={home.supportingQuote.quoteImage.alt}
                            image={home.supportingQuote.quoteImage.asset}
                            fill
                          />
                        </div>
                        
                        <div className='block md:hidden'>
                          <SanityImageWrapper
                            alt={home.supportingQuote.quoteImage.alt}
                            image={home.supportingQuote.quoteImage.asset}
                            baseWidth={750}
                            baseHeight={750}
                          />
                        </div>
                      </figure>
                    </section>
                  </Container>

                  <section className="relative pt-12 pb-6 md:pt-24 md:pb-8 xl:pt-40 2xl:pb-24">
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