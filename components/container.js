export default function Container({ children, thin }) {
  return(
    <div className={`px-6 md:px-10 xl:px-12 max-w-[1500px] mx-auto w-full ${thin ? 'max-w-[1350px]' : '' }`}>
      {children}
    </div>
  )
}