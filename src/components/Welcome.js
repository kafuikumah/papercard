import React from "react";
import "../styles/Waitlist.css";
// import { Share } from 'lucide-react';

function Welcome(props) {
  console.log(props);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Hi there! 👋
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are building a tech career toolbox filled with resources to help
          tech professionals who are new, old or freelancers to get their
          documents and career progression right!
        </p>

        {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Share this website to help others <span> < Share color="black" size={20} strokeWidth={1} /> </span> 
            </p> */}
      </div>
    </div>
  );
}

export default Welcome;
