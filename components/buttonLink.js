import Link from 'next/link'

export default function ButtonLink( {destination, a11yText, label, extraClasses} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`inline-block border-2 text-navy border-gold px-4 py-3 font-medium tracking-normal bg-off-white hover:bg-black hover:bg-opacity-5 transition-colors ease-in-out duration-500 ${extraClasses}`}>
        {label}
      </a>
    </Link>
  )
}