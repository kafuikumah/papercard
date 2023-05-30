import React from "react";
import "../styles/Waitlist.css";
import { useState } from "react";

function WaitlistHeroSection(props) {
  console.log(props);
  return (
    // <div className="heroSection">
    //    <div>
    //         <h1 className="waitlist-heading">{props.heroHeading}</h1>
    //     </div>

    //     <div>
    //         <h2 className="waitlist-sub-heading">
    //             {props.heroDescription}
    //         </h2>
    //     </div>

    //     <div className="waitlist-button">
    //         <button type="button">{props.joinWaitlistButton}</button>
    //         <button type="button">{props.learnMoreButton}</button>
    //     </div>

    // </div>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The Ultimate Tech Career Starter Pack
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are building a tech career toolbox filled with resources to help
            tech professionals who are new, old or freelancers to get their
            documents and career progression right!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://forms.gle/MfMULh7Uyikv54Ao7"
              target="_blank"
              className="rounded-full bg-[#606060] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#27272a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join the Waitlist
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitlistHeroSection;
