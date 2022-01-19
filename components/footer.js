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
                    <a className="block">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/public-servant">
                    <a className="block">
                      Public Servant
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/quotes">
                    <a className="block">
                      Quotes
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/sources">
                    <a className="block">
                      Sources
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/early-life">
                    <a className="block">
                      Early Life
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/philanthropist">
                    <a className="block">
                      Philanthropist
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/archive">
                    <a className="block">
                      Archive
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/privacy">
                    <a className="block">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/businessman">
                    <a className="block">
                      Businessman
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/personal-life">
                    <a className="block">
                      Personal Life
                    </a>
                  </Link>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <a className="block" href="mailto:contact@email.com">
                    Contact
                  </a>
                </li>
                <li className="w-1/2 md:w-1/4 py-2">
                  <Link href="/terms-and-conditions">
                    <a className="block">
                      Terms &amp; Conditions
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}