import ScrollToButton from "./scroll-to-button";
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useEffect, useState } from "react";

export default function TimelineNav({ small }) {
  const { scroll } = useLocomotiveScroll()
  let [activeItem, setActiveItem] = useState('sixties')

  useEffect(() => {
    if (scroll) {
      scroll.on('call', function(e) {
        if(e === 'sixties') {
          setActiveItem('sixties')
        }
        if(e === 'seventies') {
          setActiveItem('seventies')
        }
        if(e === 'eighties') {
          setActiveItem('eighties')
        }
        if(e === 'nineties') {
          setActiveItem('nineties')
        }
        if(e === 'noughties') {
          setActiveItem('noughties')
        }
      });
    }
  }, [scroll])

  return(
    <nav>
      <ul className={`flex flex-wrap justify-center mx-auto font-display font-semibold ${small ? 'text-xl md:text-xl xl:text-2xl max-w-[360px] md:max-w-[460px] lg:max-w-[520px]' : 'text-xl md:text-2xl xl:text-3xl max-w-[360px] md:max-w-[520px] lg:max-w-[620px]' }`}>
        <li className={`flex-1 block text-center relative transition-colors ease-in-out duration-300 ${activeItem == 'sixties' ? 'text-navy' : 'text-gold opacity-70' }`}>
          <ScrollToButton scrollTarget="#sixties">
            1960s 
            {activeItem == 'sixties' && (<span className="text-[#FFAD0D] absolute bottom-0 left-0 right-0 text-center mb-[-17%] leading-none">&bull;</span>)}
          </ScrollToButton>
        </li>
        <li className={`flex-1 block text-center relative transition-colors ease-in-out duration-300 ${activeItem == 'seventies' ? 'text-navy' : 'text-gold opacity-70' }`}>
          <ScrollToButton scrollTarget="#seventies">
            1970s
            {activeItem == 'seventies' && (<span className="text-[#FFAD0D] absolute bottom-0 left-0 right-0 text-center mb-[-17%] leading-none">&bull;</span>)}
          </ScrollToButton>
        </li>
        <li className={`flex-1 block text-center relative transition-colors ease-in-out duration-300 ${activeItem == 'eighties' ? 'text-navy' : 'text-gold opacity-70' }`}>
          <ScrollToButton scrollTarget="#eighties">
            1980s
            {activeItem == 'eighties' && (<span className="text-[#FFAD0D] absolute bottom-0 left-0 right-0 text-center mb-[-17%] leading-none">&bull;</span>)}
          </ScrollToButton>
        </li>
        <li className={`flex-1 block text-center relative transition-colors ease-in-out duration-300 ${activeItem == 'nineties' ? 'text-navy' : 'text-gold opacity-70' }`}>
          <ScrollToButton scrollTarget="#nineties">
            1990s
            {activeItem == 'nineties' && (<span className="text-[#FFAD0D] absolute bottom-0 left-0 right-0 text-center mb-[-17%] leading-none">&bull;</span>)}
          </ScrollToButton>
        </li>
        <li className={`flex-1 block text-center relative transition-colors ease-in-out duration-300 ${activeItem == 'noughties' ? 'text-navy' : 'text-gold opacity-70' }`}>
          <ScrollToButton scrollTarget="#noughties">
            2000s
            {activeItem == 'noughties' && (<span className="text-[#FFAD0D] absolute bottom-0 left-0 right-0 text-center mb-[-17%] leading-none">&bull;</span>)}
          </ScrollToButton>
        </li>
      </ul>
    </nav>
  )
}