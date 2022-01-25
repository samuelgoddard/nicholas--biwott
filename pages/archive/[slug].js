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
import Hero from '@/components/hero'
import ImageWrapper from '@/components/image-wrapper'
import BlockContent from '@sanity/block-content-to-react'
import SanityPageService from '@/services/sanityPageService'

// Test these queries...
const query = `*[_type == "press" && slug.current == $slug][0]{
  title,
  category-> {
    title
  },
  postDate,
  content,
  slug {
    current
  },
  seo {
    ...,
    shareGraphic {
        asset->
    }
  }
}`
  
const pageService = new SanityPageService(query)
  
export default function PressSlug(initialData) {
  const { data: { seo, title, content, postDate, category } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title={seo?.metaTitle ? seo.metaTitle : title }
        description={seo?.metaDesc ? seo.metaDesc : null }
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
                  
                  <div className="mb-12 md:mb-0">
                    <Hero metaText="Archive" firstWord={title} secondMetaText={`${postDate} • ${ category ? category.title : '' }`} /> 
                  </div>

                  <Container thinnest>
                    <section className="mb-12 md:mb-24 xl:mb-32 content">
                      <BlockContent serializers={{ container: ({ children }) => children }} blocks={content} />
                    </section>
                  </Container>
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

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('press')
  return {
    paths: paths,
    fallback: true,
  };
}