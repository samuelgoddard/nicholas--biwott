import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ScrollToButton({ children, scrollTarget, full }) {
  const { scroll } = useLocomotiveScroll()
  let scrollTargetElement = null;

  const scrollToArea = () => {
    scrollTargetElement = document.querySelector(scrollTarget)
    if (scroll) {
      scroll.scrollTo(scrollTargetElement, { 
        'offset': -200
      })
    }
  }

  return (
    <button onClick={scrollToArea} className={`hover:border-0 focus:border-0 hover:outline-none focus:outline-none group ${full ? 'block w-full' : ''}`}>
      {children}
    </button>
  )
}