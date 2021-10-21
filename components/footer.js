import Logo from '@/components/logo'

export default function Footer() {
  return (
    <footer className="p-6 md:p-10 xl:p-12">
      <div className="border-t border-black border-opacity-10 py-6 md:py-8 xl:py-10">
        <div className="flex flex-wrap">
          <div className="flex mb-8">
            <div className="mr-auto">
              <Logo/>
              <span className="block font-medium text-[16px] text-grey mt-1">1940 – 2017</span>
            </div>
          </div>

          <div className="w-full">
            <nav className="">
              <ul className="flex flex-wrap text-sm md:text-base">
                <li className="w-1/2 md:w-1/4 py-2">Home</li>
                <li className="w-1/2 md:w-1/4 py-2">Public Servant</li>
                <li className="w-1/2 md:w-1/4 py-2">Quotes</li>
                <li className="w-1/2 md:w-1/4 py-2">Sources</li>
                <li className="w-1/2 md:w-1/4 py-2">Early Life</li>
                <li className="w-1/2 md:w-1/4 py-2">Philanthropist</li>
                <li className="w-1/2 md:w-1/4 py-2">Press</li>
                <li className="w-1/2 md:w-1/4 py-2">Privacy Policy</li>
                <li className="w-1/2 md:w-1/4 py-2">Businessman</li>
                <li className="w-1/2 md:w-1/4 py-2">Personal Life</li>
                <li className="w-1/2 md:w-1/4 py-2">Contact</li>
                <li className="w-1/2 md:w-1/4 py-2">Terms &amp; Conditions</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}