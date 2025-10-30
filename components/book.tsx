"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";

function book() {
  return (
    <>        <section className="relative w-full h-[650px] flex items-end justify-start text-white overflow-hidden">
              {/* Background Image */}
              <Image
                src="/assets/book.jpg"
                alt="Yacht CTA"
                fill
                className="object-cover object-bottom"
                priority
              />
    
              {/* Text Content */}
              <div className="relative z-10 max-w-3xl pl-[3%] mb-6">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Book your next <br /> Yacht trip with us
                </h2>
    
                <p className="text-lg md:text-xl font-light mb-10 text-gray-200">
                  Get the best yachts at the best prices anywhere in Dubai.
                </p>
    
                <button className="flex items-center gap-2 bg-[#2530FF] hover:bg-[#001FD1] text-white text-base font-semibold rounded-none px-12 py-3 transition-all duration-200">
                  Book Now <MoveRight className="w-5 h-5" />
                </button>
              </div>
            </section>
    </>
  )
}

export default book