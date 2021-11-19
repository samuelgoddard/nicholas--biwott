import { useEffect, useState } from "react";
import Logo from '@/components/logo'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Link from 'next/link'
import LogoMark from "./logo-mark";
import TimelineNav from "./timeline-nav";
import Container from "./container";

export default function Header({ timeline }) {
  const { scroll } = useLocomotiveScroll()
  let [showLogo, setShowLogo] = useState(false)
  let [showTimeline, setShowTimeline] = useState(false)

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.y / limit.y * 100

        console.log(progress)
        if (progress > 1) {
          setShowLogo(true)
          setShowTimeline(true)
        } else {
          setShowLogo(false)
          setShowTimeline(false)
        }
      })
    }
  }, [scroll, showLogo])

  return (
    <header className="p-6 md:p-10 xl:p-12 fixed top-0 left-0 right-0 w-full z-10" data-scroll data-scroll-sticky data-scroll-target="#__next">

      {timeline && (
        <div className={`absolute inset-0 bg-off-white transition-opacity ease-in-out duration-500 z-10 hidden md:block ${ showTimeline ? 'opacity-100' : 'opacity-0' }`}></div>
      )}

      {timeline && (
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gold transition-opacity ease-in-out duration-500 z-10 mx-6 md:mx-10 xl:mx-12 hidden md:block ${ showTimeline ? 'opacity-25' : 'opacity-0' }`}></div>
      )}

      <div className="flex flex-wrap items-start md:items-center relative z-20">
        <div className="mr-auto">
          <div className="relative overflow-hidden">
            <div className={`transition-transform ease-in-out duration-500 ${ showLogo ? '-translate-y-full' : 'translate-y-0'}`}>
              <Logo/>
            </div>
            <div className={`absolute top-0 left-0 right-0 transition-transform ease-in-out duration-500 ${ showLogo ? 'translate-y-0' : 'translate-y-full' }`}>
              <LogoMark/>
            </div>
          </div>
          <span className="block font-medium text-[16px] text-grey mt-1">1940 – 2017</span>
        </div>

        {timeline && (
          <div className="mx-auto flex-1 relative overflow-hidden md:-ml-12 xl:-ml-32 hidden md:block">
            <div className={`transition-transform ease-in-out duration-500 ${ showTimeline ? 'translate-y-0' : 'translate-y-full'}`}>
              <TimelineNav />
            </div>
          </div>
        )}

        <nav className="ml-auto flex space-x-3 text-[18px] md:text-[18px] xl:text-[18px] w-auto mt-[2px] md:mt-0">
          <Link href="/menu"><a className="block uppercase">Menu</a></Link>
        </nav>
      </div>
    </header>
  )
}