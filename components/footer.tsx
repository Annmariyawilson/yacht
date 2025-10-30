"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative border-gray-200 w-[full] h-[645px] overflow-hidden"
      style={{
        backgroundImage: "url('/assets/footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full py-16">
        <div className="max-w-8xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 items-start mb-10">
            {/* Left Section */}
            <div className="flex justify-between w-full max-w-sm">
              <div className="space-y-2">
                <p className="font-bold text-xl tracking-wide">
                  WORK <sup className="text-[12px] text-gray-400">(17)</sup>
                </p>
                <p className="font-bold text-xl tracking-wide">
                  ABOUT <sup className="text-[12px] text-gray-400">STUDIO</sup>
                </p>
                <p className="font-bold text-xl tracking-wide">
                  SERVICES{" "}
                  <sup className="text-[12px] text-gray-400"> SERVICES</sup>
                </p>
                <p className="font-bold text-xl tracking-wide">
                  CLIENTS <sup className="text-[12px] text-gray-400">CORE</sup>
                </p>

                {/* Social Icons */}
                <div className="flex gap-3 pt-4">
                  <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/assets/dribbble.svg"
                      alt="Dribbble"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/assets/linkedin.svg"
                      alt="LinkedIn"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/assets/instagram.svg"
                      alt="Instagram"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-xl tracking-wide">
                  FUTURE <sup className="text-[12px] text-gray-400">CORE</sup>
                </p>
                <p className="font-bold text-xl tracking-wide">
                  CONTACT <sup className="text-[12px] text-gray-400">CORE</sup>
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-end">
              <Image
                src="/assets/icon2.svg"
                alt="Yacht Hub Dubai"
                width={300}
                height={100}
                className="object-contain"
              />
              <p className="text-sm text-gray-500 mt-3">
                © 2025, Yacht Hub Dubai. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
