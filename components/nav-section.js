import Container from "./container";
import Link from 'next/link';

export default function NavSection({ backTextFirst, backTextSecond, metaText }) {
  return(
    <div className="w-full relative">
      <div className="absolute top-0 left-0 ml-[-50px] mt-[-5%] md:mt-[-5%] xl:mt-[-5%] 3xl:mt-[-120px] flex flex-wrap overflow-hidden" data-scroll data-scroll-speed={-0.7}>
        <span data-scroll data-scroll-direction="horizontal" data-scroll-speed={-1.5} className="w-full text-gold block text-[22vw] xl:text-[20vw] 3xl:text-[400px] leading-none font-display opacity-10">{backTextFirst ? backTextFirst : 'Nicholas'}</span>
        <span data-scroll data-scroll-direction="horizontal" data-scroll-speed={1.5} className="text-gold block text-[22vw] xl:text-[20vw] 3xl:text-[450px] leading-none font-display opacity-10 ml-auto mr-[-50px]">{backTextSecond ? backTextSecond : 'Biwott'}</span>
      </div>

      <Container thin>                      
        <nav className="">
          <span className="uppercase text-gold font-medium block mb-8">{metaText ? metaText : 'About Nicholas'}</span>
          <ul className="flex flex-wrap">
            <li className="w-1/2 py-3 md:py-6 xl:py-8 relative pl-6 md:pl-10">
              <Link href="/early-life">
                <a className="block">
                  <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold opacity-75 rotate-45 block absolute top-0 left-0 mt-[24px] md:mt-[42px] xl:mt-[58px]"></span>
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl block text-navy mb-2 pm rmd:mb-3">Early Life</span>
                  <span className="text-grey block text-sm md:text-base">Diligence. Aspiration. Dedication.</span>
                </a>
              </Link>
            </li>
            <li className="w-1/2 py-3 md:py-6 xl:py-8 relative pl-6 md:pl-10">
              <Link href="/businessman">
                <a className="block">
                  <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold opacity-75 rotate-45 block absolute top-0 left-0 mt-[24px] md:mt-[42px] xl:mt-[58px]"></span>
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl block text-navy mb-2 pm rmd:mb-3">Businessman</span>
                  <span className="text-grey block text-sm md:text-base">Growth. Jobs. Entrepreneurship.</span>
                </a>
              </Link>
            </li>
            <li className="w-1/2 py-3 md:py-6 xl:py-8 relative pl-6 md:pl-10">
              <Link href="/public-servant">
                <a className="block">
                  <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold opacity-75 rotate-45 block absolute top-0 left-0 mt-[24px] md:mt-[42px] xl:mt-[58px]"></span>
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl block text-navy mb-2 pm rmd:mb-3">Public Servant</span>
                  <span className="text-grey block text-sm md:text-base">Energy. Vision. Kenya.</span>
                </a>
              </Link>
            </li>
            <li className="w-1/2 py-3 md:py-6 xl:py-8 relative pl-6 md:pl-10">
              <Link href="/philanthropist">
                <a className="block">
                  <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold opacity-75 rotate-45 block absolute top-0 left-0 mt-[24px] md:mt-[42px] xl:mt-[58px]"></span>
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl block text-navy mb-2 pm rmd:mb-3">Philanthropist</span>
                  <span className="text-grey block text-sm md:text-base">Healthcare. Community. Entrepreneurship.</span>
                </a>
              </Link>
            </li>
            <li className="w-1/2 py-3 md:py-6 xl:py-8 relative pl-6 md:pl-10">
              <Link href="/personal-life">
                <a className="block">
                  <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold opacity-75 rotate-45 block absolute top-0 left-0 mt-[24px] md:mt-[42px] xl:mt-[58px]"></span>
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl block text-navy mb-2 pm rmd:mb-3">Personal Life</span>
                  <span className="text-grey block text-sm md:text-base">Vision. Energy. Duty</span>
                </a>
              </Link>
            </li>
            <li className="w-1/2 py-3 md:py-6 xl:py-8 relative pl-6 md:pl-10">
              <Link href="/timeline">
                <a className="block">
                  <span className="w-3 md:w-4 h-3 md:h-4 border md:border-2 border-gold opacity-75 rotate-45 block absolute top-0 left-0 mt-[24px] md:mt-[42px] xl:mt-[58px]"></span>
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl block text-navy mb-2 pm rmd:mb-3">Timeline</span>
                  <span className="text-grey block text-sm md:text-base">The life of Nicholas</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}