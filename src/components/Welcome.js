import React from "react";
import "../styles/Waitlist.css";
// import { Share } from 'lucide-react';

function Welcome(props) {
  console.log(props);
  return (
    <div className="bg-white">
      <div className="mx-auto pt-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {props.heading}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}

export default Welcome;
