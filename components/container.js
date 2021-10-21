export default function Container({ children, thin, thinner }) {
  return(
    <div className={`px-6 md:px-10 xl:px-12 max-w-[1500px] mx-auto w-full ${thin ? 'max-w-[1350px]' : '' } ${thinner ? 'max-w-[1200px]' : '' }`}>
      {children}
    </div>
  )
}