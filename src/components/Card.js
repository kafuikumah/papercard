function Card(props) {
  return (
    <div className="mx-auto max-w-2xl black-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {props.header}</h1>
          <p className="mt-10 text-lg leading-8 text-white">{props.paragraph}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-[#606060] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#27272a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join the Waitlist
                </a>
          </div>
        </div>

      
    </div>

    
  )
}

export default Card;