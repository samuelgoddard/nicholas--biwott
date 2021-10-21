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

export default function PublicServant() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Public Servant" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
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
                <m.main variants={fade} className="mb-12 md:mb-16 xl:mb-24 pt-[112px] md:pt-[138px]">
                  <Hero
                    metaText="Public Servant"
                    firstWord="Energy"
                    secondWord="Vision"
                    thirdWord="Kenya"
                    image="https://placedog.net/640/460"
                    imageCaption="An Image Caption"
                    quote="Biwott played a central role in the formation of the modern Kenyan state at a critical moment in our history, when it was vital to have every hand on deck to ensure that Kenya’s first transfer of power went smoothly, and ensured national unity at a very tense and trying time."
                    quoteCaption="Raila Odinga"
                    quoteCite="Prime Minister of Kenya (2008-13)"
                    reverse
                    timeline
                  />

                  {/* SIXTIES */}
                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32" id="sixties">
                      <div className="absolute top-0 left-0 ml-[-10%] 3xl:ml-[-15%] mt-[-15%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">60's</span>
                      </div>

                      <div className="w-11/12 md:w-9/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">Nicholas Biwott’s five-decade long career of dedicated public service began upon his return to Kenya from university in Melbourne, in December 1964.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 content md:pr-12 xl:pr-16 max-w-2xl mb-8 md:mb-0">
                          <p>During the administration of the first President of Kenya, Jomo Kenyatta (1963-78) – the country’s hero of independence, and a towering figure of African nationalism whose name ranks alongside those of Julius Nyerere of Tanzania and Kwame Nkrumah of Ghana – Biwott served as District Officer for South Imenti and Theraki, Meru District from 1965 to 1966.</p>
                          
                          <p>As a young administrator, Biwott sought to hasten the development of the nascent country. Keenly aware of the need to support a wide range of projects, industries and infrastructure, he instituted community fund-raising programmes to support local services, grow the economy and create jobs. These enabled the building of schools in Nkubu and Kanyakini; a health centre at Nkwene; roads and irrigation projects across the District; as well as the promotion of coffee and tea plantations and employment at the quarries in Egoji.</p>
                        </div>

                        <div className="w-full md:w-1/2 relative content overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <img className="w-full" src="https://placedog.net/640/480" alt="Placeholder" />
                            <figcaption>Image caption</figcaption>
                          </figure>

                          <p>He also played a central role in dealing with the troublesome legacy of British colonial rule. Tasked with helping to rehabilitate the Mau Mau – the group which fought against the British Army, authorities and settlers in Kenya in an uprising from 1952 to 1960 – Biwott helped persuade them to renounce violence and, through the ‘Million Acre’ scheme, organized the resettlement of many on to their own land, previously owned by European settlers. He also coordinated the resistance to the ‘Shifta’ movement of ethnic Somalis living in the north of Kenya, who sought to secede and become part of the Somali Republic.</p>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0">
                        <figure>
                          <img className="w-full" src="https://placedog.net/420/570" alt="Placeholder" />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>
                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-16 xl:pl-24">
                            <p>“Mr. Biwott was invited as a District Officer to come and address us at school. He was talking to us about how we can join the public service, and he really gave me a lasting impression. He was very dignified, very analytical in thinking, and he presented himself…as a public administrator of higher calibre than the white District Officers we were used to. He got to really organize the community leadership, the development programmes that were necessary to pull us from the colonial background. Today, that District is one of the most developed in Kenya. I can say that without any fear of contradiction.”</p>
                            <figcaption>Francis Muthaura,<cite>Secretary-General of the East African Community (1996-2001) and Head of Civil Service and Secretary to the Cabinet (2005-2013)</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 content md:pr-12 xl:pr-16 max-w-2xl mb-8 md:mb-0">
                          <p>During the administration of the first President of Kenya, Jomo Kenyatta (1963-78) – the country’s hero of independence, and a towering figure of African nationalism whose name ranks alongside those of Julius Nyerere of Tanzania and Kwame Nkrumah of Ghana – Biwott served as District Officer for South Imenti and Theraki, Meru District from 1965 to 1966.</p>
                          
                          <p>As a young administrator, Biwott sought to hasten the development of the nascent country. Keenly aware of the need to support a wide range of projects, industries and infrastructure, he instituted community fund-raising programmes to support local services, grow the economy and create jobs. These enabled the building of schools in Nkubu and Kanyakini; a health centre at Nkwene; roads and irrigation projects across the District; as well as the promotion of coffee and tea plantations and employment at the quarries in Egoji.</p>
                        </div>

                        <div className="w-full md:w-1/2 relative content overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <img className="w-full" src="https://placedog.net/640/480" alt="Placeholder" />
                            <figcaption>Image caption</figcaption>
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>


                  {/* SEVENTIES */}
                  <Container>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32" id="seventies">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure>
                          <img className="w-full" src="https://placedog.net/640/500" alt="Placeholder" />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>“Beneath his quiet and thoughtful demeanour, lay a powerful spirit urging him to work harder both for the good of society and himself. His long and distinguished career as a District Officer, positions in various ministries, as a Member of Parliament and as a Cabinet Minister, equipped Biwott with tremendous knowledge of Kenya and the needs of our people. With this knowledge, Biwott became one of the most effective and dependable public servants.”</p>
                            <figcaption>Raila Odinga,<cite>Prime Minister of Kenya (2008-13)</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="absolute top-0 right-0 mr-[-7%] 3xl:mr-[-15%] mt-[-8%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">70's</span>
                      </div>

                      <div className="w-11/12 md:w-9/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">Moving to the Treasury - led by Mwai Kibaki, who would go on to become Kenya’s third President from 2002 to 2013 - as Senior Secretary in 1971, Biwott continued to drive Kenya’s international cooperation with countries near &amp; far.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <img className="w-full" src="https://placedog.net/640/480" alt="Placeholder" />
                            <figcaption>Image caption</figcaption>
                          </figure>
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <p>Following a personal recommendation from President Kenyatta, Biwott was transferred to the Ministry of Home Affairs in 1972, working with Kenyatta’s successor as President, Daniel arap Moi (1978-2002), who at the time was Vice-President and Minister of Home Affairs. Serving as Under Secretary from 1974, Biwott dedicated his tenure to deepening the links between Kenya and the emerging nations of the African continent, working closely with the Commonwealth and the Organisation of African Unity in Addis Ababa, and promoting the policy of ‘good neighbourliness’ towards the nations bordering Kenya.</p>
                          
                          <p>When arap Moi assumed the mantle of Kenya’s leader as her second President in 1978, Biwott was promoted to Deputy Permanent Secretary in the Office of the President, a position at the nerve centre of politics and the very heart of Kenyan public life.</p>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-7/12 content md:pr-16 xl:pr-24 mb-8 md:mb-0">
                          <h2 className="block text-3xl md:text-4xl xl:text-5xl font-normal text-navy">In 1979, Biwott was advanced to the position of Minister of State, with a wide-ranging portfolio encompassing matters from science and technology to cabinet affairs, land settlement &amp; immigration.</h2>

                          <p>Here, he established what is regarded as one of the country’s greatest modern achievements – the Kenya Medical Research Institute (KEMRI). This leading healthcare research and development facility, supported by major international donors such as the Bill and Melinda Gates Foundation and USAID, carries out vital medical research and for more than forty years, has saved and improved the lives of millions across sub-Saharan Africa in the fight against malaria, HIV/AIDS, and, currently, COVID-19.</p>
                          
                          <p>This decade also saw the start of Biwott’s 28-year long parliamentary career, when he was elected to the National Assembly as Member of Parliament for Keiyo-Marakwet, representing the Kenya African National Union party (KANU), in 1979. A notably dedicated Member of Parliament, he would return to his constituency every weekend from Nairobi, until he left Parliament in 2007.</p>
                        </div>

                        <div className="w-full md:w-5/12 relative content">
                          <figure className="mb-6 md:mb-8 xl:mb-10 w-full md:max-w-[450px] ml-auto">
                            <img className="w-full" src="https://placedog.net/550/800" alt="Placeholder" />
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>


                  {/* EIGHTIES */}
                  <Container>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32" id="eighties">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure>
                          <img className="w-full" src="https://placedog.net/640/500" alt="Placeholder" />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>“He had a lot of wisdom. Wherever we went with the President around the world, if foreign officials didn’t see him, somebody would say, “Where is Minister Biwott?” Because people felt that he was a great contributor when it comes to development.”</p>
                            <figcaption>Abraham Kiptanui,<cite>Former State House Comptroller and childhood friend</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="absolute top-0 right-0 mr-[-7%] 3xl:mr-[-15%] mt-[-8%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">80's</span>
                      </div>

                      <div className="w-11/12 md:w-9/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">Promoted to Minister of Regional Development, Science and Technology in 1982, Biwott continued to accelerate Kenya’s development, by learning from other international partners, such as Australia and the USA, and instituting their best practices in Kenya.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <img className="w-full" src="https://placedog.net/640/480" alt="Placeholder" />
                            <figcaption>Image caption</figcaption>
                          </figure>
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <p>He split the country’s sole regional development authority, creating localized bodies to deal with the needs of specific areas, such as the Lake Basin and Kerio Valley Development Authorities.</p>
                          
                          <p>Entering the busiest phase of his public life, Biwott was made Minister of Energy in 1983, a portfolio he would hold for the next eight years and when he was widely seen as one of the most effective Cabinet ministers of his time. He was an instrumental figure in the rapid advances Kenya’s energy industry and infrastructure underwent in the 1980s, presiding over the foundation of the National Oil Corporation, and the construction of storage and pipeline facilities from Mombassa in the south, and northwards to Kisumu and Eldoret. He also oversaw major improvements to Kenya’s electricity supply, with a rural electrification programme, and the building of several key dams – such as Sondu Mirei Dam, Kiambere Hydroelectric Dam and Turkwell Hydroelectric Dam (with the latter two still producing over 35% of Kenya’s Hydroelectricity today).,</p>
                        </div>
                      </div>
                    </section>
                  </Container>


                  {/* NINETIES */}
                  <Container>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32" id="nineties">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure>
                          <img className="w-full" src="https://placedog.net/640/500" alt="Placeholder" />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>“He was thoroughly disciplined and instilled a sense of purpose in all of us who worked closely with him. He never tired of defending our great country and never left a meeting room before business was over — just in case Kenya lost an opportunity.”</p>
                            <figcaption>Amina Mohamed,<cite>Cabinet Secretary for Foreign Affairs (2013-18)</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="absolute top-0 right-0 mr-[-7%] 3xl:mr-[-15%] mt-[-8%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">90's</span>
                      </div>

                      <div className="w-11/12 md:w-8/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">Biwott’s career in the Kenyan Government came to an abrupt halt in early 1991, however, when several false allegations were levelled against him.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <p>Kenya was undergoing a fractious period in the lead-up to a new era of multi-party politics at this time, and prominent figures behind the President, such as Biwott, were attacked as a way of discrediting arap Moi himself.</p>
                          
                          <p>Biwott brought several defamation actions in relation to these allegations. The actions were either not defended or the defendants were found to have no case, and Biwott was awarded millions of Kenyan Shillings, Kenya’s largest ever libel awards up to that point.</p>
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <p>From 1991 to 1997, Biwott was thus not part of the Kenyan Government and held no ministerial office, but continued to serve as an MP, now for Keiyo South, which he represented for KANU from 1992 to 2007 when he lost the seat in the General Election.</p>
                          
                          <p>Nevertheless, due to his unique experience, diplomatic relationships with many of East Africa’s ministers and convening power, the Ministry of Foreign Affairs repeatedly asked President arap Moi to once again give Biwott a position on the Kenyan Government’s front bench to lead on East African affairs.</p>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32 items-center">
                      <div className="w-full md:w-5/12 relative content mb-6 md:mb-0">
                        <figure>
                          <img className="w-full" src="https://placedog.net/480/620" alt="Placeholder" />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>
                      <div className="w-full md:w-7/12 content">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>“To protect the East African Community project, we decided we must go and persuade the President to appoint Nicholas Biwott back to cabinet. Biwott didn’t know, he didn’t ask for it. He was comfortable in the station he found himself in, never feeling let down by not having a flag on the front of his vehicle or a title. So we didn’t tell him, but we persuaded and cajoled the President. Eventually, he said, “You know the man is my friend”, so Biwott was appointed and he immediately embarked on the East African Community successfully.”</p>
                            <figcaption>Dr. Sally Kosgei,,<cite>Former Permanent Secretary at Ministry of Foreign Affairs and Head of the Public Service and Permanent Secretary to the Cabinet (2001-03)</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="w-11/12 md:w-8/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">Biwott returned to the Cabinet, initially as Minister of State in the President’s Office in 1997, and then to head up the newly created Ministry of East African and Regional Cooperation the following year.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <p>Revisiting the leitmotif of his career, African cooperation, he became Chairman of the East Africa Council of Ministers and was instrumental in developing a road network for the region, as Chairman of the Common Market for East and Central Africa (COMESA).</p>
                          
                          <p>Another major achievement in this field was his role in negotiating and drafting the Treaty of the East African Community, an intergovernmental organisation of six countries in the Great Lakes region – Kenya, Burundi, Rwanda, South Sudan, Uganda and Tanzania.</p>
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <figure>
                            <img className="w-full" src="https://placedog.net/550/550" alt="Placeholder" />
                            <figcaption>Something</figcaption>
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="content relative my-12 md:my-24 xl:my-32 py-8 md:py-12 xl:py-16 border-t border-b border-gold border-opacity-25">
                      <span className="block absolute top-0 left-0 h-10 ml-[48%] bg-off-white px-3 text-7xl font-display leading-none -mt-4 text-gold text-opacity-50">“</span>

                      <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-2/3 xl:w-1/2 text-center">
                          <figure className="block">
                            <blockquote className="blockquote blockquote--small">
                              <p>“He was thoroughly disciplined and instilled a sense of purpose in all of us who worked closely with him. He never tired of defending our great country and never left a meeting room before business was over — just in case Kenya lost an opportunity.”</p>
                              <figcaption>Amina Mohamed,<cite>Cabinet Secretary for Foreign Affairs (2013-18)</cite></figcaption>
                            </blockquote>
                          </figure>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">When his portfolio was expanded to include the Ministries of Trade, Industry and Tourism in 1999 – at which point he headed more ministries than any other Cabinet colleague – Biwott energetically established initiatives for Kenya’s burgeoning tourism sector, establishing a Tourist Trust Fund with the European Union; creating the country’s Tourism Police; and re-introducing the East Africa Safari Rallies.</h2>
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <p>Biwott continued his work with multilateral bodies to advance Kenya’s interests and position her as a principal African power, devising the Small Medium Trade Trust Fund with the EU; establishing the COMESA free trade area in 2000; serving as Chairman of the African Caribbean Pacific Group at the World Trade Organisation; and creating the Africa Trade Insurance to cover foreign investments against political risk.</p>
                        </div>
                      </div>
                    </section>
                  </Container>


                  {/* Noughties */}
                  <Container>
                    <section className="flex flex-wrap mb-12 md:mb-24 xl:mb-32" id="noughties">
                      <div className="w-full md:w-7/12 relative content order-2 md:order-1">
                        <figure>
                          <img className="w-full" src="https://placedog.net/640/500" alt="Placeholder" />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>
                      <div className="w-full md:w-5/12 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-12 xl:pl-16">
                            <p>“He was a great, great leader. I will always remember him as a gentleman. When we competed for Parliament, I never felt he used his position of power or resources to disadvantage our competition. He recognized I was a strong challenger, and he accepted it.”</p>
                            <figcaption>Kipchumba Murkomen,<cite>Senator for Elgeyo-Marakwet County, who beat Biwott in the 2013 Senate Elections</cite></figcaption>
                          </blockquote>
                        </figure>
                      </div>                    
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative mb-12 md:mb-24 xl:mb-32">
                      <div className="absolute top-0 right-0 mr-[-7%] 3xl:mr-[-15%] mt-[-8%] flex flex-wrap overflow-hidden z-0" data-scroll data-scroll-speed={-0.7}>
                        <span className="w-full text-gold block text-[28vw] xl:text-[25vw] 2xl:text-[22vw] 3xl:text-[400px] leading-none font-display opacity-10">00's</span>
                      </div>

                      <div className="w-11/12 md:w-8/12 mb-5 md:mb-8 xl:mb-12">
                        <h2 className="block text-3xl md:text-3xl xl:text-4xl xl:leading-[1.25] font-normal text-navy">Following the 2002 General Election, and the election of President Mwai Kibaki (2002-2013), Biwott’s decades-long ministerial career finally came to a close.</h2>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 relative content overflow-hidden mb-8 md:mb-0">
                          <p>He was the first Cabinet minister to hand over his position to his opposite number, Dr. Mukhisa Kituyi, and returned to the life of a senior parliamentarian, actively serving on the Devolution Committee of the Constitution of Kenya Review Commission.</p>
                          
                          <p>A keen proponent of Kenyan unity, Biwott was the sole Member of Parliament to abstain on a vote on holding a referendum on a new draft of the Constitution in 2005, stating that it ‘would divide the country along ethnic lines.’ In the years following the referendum, Kenya sadly saw some of the worst tribal violence in her history.</p>
                        </div>

                        <div className="w-full md:w-1/2 content md:pl-12 xl:pl-16 max-w-2xl">
                          <p>In 2005, Biwott ran for the chairmanship of KANU, losing the leadership race to Uhuru Kenyatta (the son of Jomo Kenyatta, who would follow in his father’s footsteps to become President in 2013).</p>
                          
                          <p>After KANU allied itself with the Party of National Union, a coalition of conservative parties, Biwott founded the New Vision Party of independents, helping many who would not have had the funds to run for parliament to do so. In 2013, Biwott made his final bid for elected office, running for the seat of Elgeyo-Marakwet County in the Senate, but losing out to a wave of young leaders with a new vision for Kenya, led by William Ruto, who became Deputy President.</p>
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container>
                    <section className="flex flex-wrap items-center mb-12 md:mb-24 xl:mb-32" id="noughties">
                      <div className="w-full md:w-1/2 relative content order-2 md:order-1">
                        <figure>
                          <img className="w-full" src="https://placedog.net/640/640" alt="Placeholder" />
                          <figcaption>Something</figcaption>
                        </figure>
                      </div>
                      <div className="w-full md:w-1/2 content order-1 md:order-2 mb-6 md:mb-0">
                        <figure className="block">
                          <blockquote className="blockquote blockquote--small md:pl-16 xl:pl-24">
                            <p>“When I defeated him in 2007, he showed us a sign of great leadership by conceding defeat very fast and congratulating me. From 2007, he has been supporting me in the development of the constituency, and other elected leaders. He was truly a great man, a statesman and a friend.”</p>
                            <figcaption>Jackson Kiptanui,<cite>Nicholas Biwott’s successor as MP for Keiyo South, from the opposition United Republican Party</cite></figcaption>
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
