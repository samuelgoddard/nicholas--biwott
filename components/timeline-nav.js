import ScrollToButton from "./scroll-to-button";

export default function TimelineNav({ small }) {
  return(
    <nav>
      <ul className={`flex flex-wrap justify-center mx-auto font-display font-semibold ${small ? 'text-xl md:text-xl xl:text-2xl max-w-[360px] md:max-w-[460px] lg:max-w-[520px]' : 'text-xl md:text-2xl xl:text-3xl max-w-[360px] md:max-w-[520px] lg:max-w-[620px]' }`}>
        <li className="flex-1 block text-center text-navy relative">
          <ScrollToButton scrollTarget="#sixties">
            1960s <span className="text-[#FFAD0D] absolute bottom-0 left-0 right-0 text-center mb-[-17%] leading-none">&bull;</span>
          </ScrollToButton>
        </li>
        <li className="flex-1 block text-center text-gold opacity-70">
          <ScrollToButton scrollTarget="#seventies">
            1970s
          </ScrollToButton>
        </li>
        <li className="flex-1 block text-center text-gold opacity-70">
          <ScrollToButton scrollTarget="#eighties">
            1980s
          </ScrollToButton>
        </li>
        <li className="flex-1 block text-center text-gold opacity-70">
          <ScrollToButton scrollTarget="#nineties">
            1990s
          </ScrollToButton>
        </li>
        <li className="flex-1 block text-center text-gold opacity-70">
          <ScrollToButton scrollTarget="#noughties">
            2000s
          </ScrollToButton>
        </li>
      </ul>
    </nav>
  )
}