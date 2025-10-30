"use client";

import Image from "next/image";

export default function NewsLetter() {
  return (
    <section className="w-full border-t border-b border-gray-200 py-12 bg-white">
      <div className="w-[90%] max-w-[1324px] mx-auto grid md:grid-cols-[70%_30%] gap-10 items-start">
        
        {/* ===== Newsletter Section ===== */}
        <div>
          <h3 className="text-[38px] mb-5">
            Subscribe to our newsletter
          </h3>

          <div className="flex items-center max-w-md">
            <input
              type="email"
              placeholder="enter email"
              className="flex-1 border border-gray-300 px-6 py-3 text-black text-md focus:outline-none"
            />
            <button className="bg-[#2530FF] text-white text-md font-medium cursor-pointer px-8 py-3 hover:bg-[#001FD1] transition">
              subscribe
            </button>
          </div>
        </div>

        {/* ===== Follow Us Section ===== */}
        <div className="border-l border-gray-200 pl-8">
          <h3 className="text-[25px] font-medium mb-3">Follow us</h3>
          <p className="text-lg  mb-5 leading-relaxed">
            Follow us on social media to <br /> get latest informations
          </p>

          <div className="flex gap-2">
            <div className="w-9 h-9 flex items-center justify-center ">
              <Image
                src="/assets/dribbble.svg"
                alt="Dribbble"
                width={30}
                height={30}
              />
            </div>
            <div className="w-9 h-9 flex items-center justify-center ">
              <Image
                src="/assets/instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </div>
            <div className="w-9 h-9 flex items-center justify-center">
              <Image
                src="/assets/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
