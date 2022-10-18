import Logo from '@/components/logo'
import Link from 'next/link'

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
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/public-servant">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Public Servant
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/quotes">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Quotes
                    </a>
                  </Link>
                </li>
                {/* <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/sources">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Sources
                    </a>
                  </Link>
                </li> */}
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/early-life">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Early Life
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/philanthropist">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Philanthropist
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/timeline">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Timeline
                    </a>
                  </Link>
                </li>
                {/* <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/copyright">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Copyright
                    </a>
                  </Link>
                </li> */}
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/businessman">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Businessman
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/personal-life">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Personal Life
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300" href="mailto:contact@nicholasbiwott.com">
                    Contact
                  </a>
                </li>
                {/* <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/terms-and-conditions">
                    <a className="block hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-300">
                      Terms &amp; Conditions
                    </a>
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}