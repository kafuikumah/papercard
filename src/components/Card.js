function Card() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="">
      <div className="text-center">
        <h1 className="text-3xl">Your Tech Career Roadmap</h1>
        <p>
          Confused on how to get started in tech or what to learn?
          We are curated a roadmap for developers,
          product designers, data scientists, etc.
        </p>
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

      
    </div>

    
  )
}

export default Card;