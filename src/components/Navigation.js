import { type } from "@testing-library/user-event/dist/type";
import '../styles/Navigation.css'
import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

function Navigation() {
  return (


    <div>
      <header class="pb-6 bg-white lg:pb-0">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
              <a href="#" title="" class="flex items-center">
                <img class="w-auto h-8 lg:h-10 rounded-lg" src="https://kafuikumah.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3133635b-9b3f-4ad6-948e-129581470a11%2FLogo_Dark.png?id=18c753e4-1e2c-4d0c-b317-3099ab9b97d4&table=collection&spaceId=93a5260c-c2c0-4327-a2a2-12b3692c0cc9&width=60&userId=&cache=v2" alt="" />
                <label class="ml-1">papercard.co</label>
              </a>
            </div>

            <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-full lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
              </svg>

              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a href="#" title="" class="text-base font-medium text-black transition-all duration-200"> <Mail color="black" size={20} strokeWidth={1} /> </a>

              <a href="#" title="" class="text-base font-medium text-black transition-all duration-200"> <Twitter color="black" size={20} strokeWidth={1} /> </a>

              <a href="#" title="" class="text-base font-medium text-black transition-all duration-200"> <Linkedin color="black" size={20} strokeWidth={1} /> </a>

              <a href="#" title="" class="text-base font-medium text-black transition-all duration-200"> <Instagram color="black" size={20} strokeWidth={1} /> </a>
            </div>

            <a 
            href="https://forms.gle/MfMULh7Uyikv54Ao7" target="_blank"
            title="" 
            class="items-center justify-center hidden px-4 py-3 ml-10 text-base 
            font-semibold text-white transition-all duration-200 bg-[#606060] 
            border border-transparent rounded-full lg:inline-flex hover:bg-[#27272a] 
            focus:bg-[#27272a]" role="button">
               Join the Waitlist 
            </a>
            
          </nav>

          {/* <!-- xs to lg --> */}
          <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div class="flow-root">
              <div class="flex flex-col px-6 -my-2 space-y-1">
                <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200"> <Mail color="black" size={20} strokeWidth={1} /> </a>

                <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200"> <Twitter color="black" size={20} strokeWidth={1} /> </a>

                <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200"> <Linkedin color="black" size={20} strokeWidth={1} /> </a>

                <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200"> <Instagram color="black" size={20} strokeWidth={1} /> </a>
              </div>
            </div>

            <div class="px-6 mt-6">
              <a 
              href="https://forms.gle/MfMULh7Uyikv54Ao7" target="_blank"
              title=""
              class="inline-flex justify-center px-4 py-3 text-base font-semibold
              text-white transition-all duration-200 bg-[#606060] border border-transparent 
              rounded-full tems-center hover:bg-[#27272a] focus:bg-[#27272a]" role="button"> 
              Join the Waitlist 
              </a>
            </div>
          </nav>
        </div>
      </header>

    </div>

  )
}

export default Navigation;