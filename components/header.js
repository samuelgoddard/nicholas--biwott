import { useEffect, useState } from "react";
import Logo from '@/components/logo'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Link from 'next/link'
import LogoMark from "./logo-mark";
import TimelineNav from "./timeline-nav";
import Container from "./container";

export default function Header({ timeline, menu }) {
  const { scroll } = useLocomotiveScroll()
  let [showLogo, setShowLogo] = useState(false)
  let [showTimeline, setShowTimeline] = useState(false)
  let [showMenu, setShowMenu] = useState(false)

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
    if (menu === true) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }, [scroll, showLogo, menu, showMenu])

  return (
    <header className={`p-6 md:p-10 xl:p-12 fixed top-0 left-0 right-0 w-full z-10 ${!timeline ? 'mix-blend-difference text-off-white' : 'text-off-black'}`} data-scroll data-scroll-sticky data-scroll-target="#__next">

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
          <span className="block font-medium text-[16px] text-current opacity-30 mt-1">1940 – 2017</span>
        </div>

        {timeline && (
          <div className="mx-auto flex-1 relative overflow-hidden md:-ml-12 xl:-ml-32 hidden md:block">
            <div className={`transition-transform ease-in-out duration-500 ${ showTimeline ? 'translate-y-0' : 'translate-y-full'}`}>
              <TimelineNav />
            </div>
          </div>
        )}

        <nav className="ml-auto flex space-x-3 text-[18px] md:text-[18px] xl:text-[18px] mt-[2px] md:mt-0 relative overflow-hidden w-auto">
            <Link href={ menu ? '/' : '/menu'}>
              <a className={`block uppercase relative overflow-hidden pl-4`}>
                <span className={`block transition-transform ease-in-out duration-500 ${ showMenu ? 'transition-transform ease-in-out duration-500 translate-y-5' : 'transition-transform ease-in-out duration-500 translate-y-0' }`}>Menu</span>

                <span className={`absolute top-0 right-0 block transition-transform ease-in-out duration-500 ${ showMenu ? 'transition-transform ease-in-out duration-500 translate-y-0' : 'transition-transform ease-in-out duration-500 translate-y-[-25px]' }`}>Close</span>
              </a>
            </Link>
        </nav>
      </div>
    </header>
  )
}