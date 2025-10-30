"use client";

import Image from "next/image";

const yachts = [
  {
    name: "Azimut Grande 35",
    capacity: "Upto8",
    baths: "2baths",
    beds: "4Beds",
    price: "AED 15,000/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto9",
    baths: "3baths",
    beds: "5Beds",
    price: "AED 18,500/day",
    image: "/assets/fleet2.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto12",
    baths: "4baths",
    beds: "6Beds",
    price: "AED 22,000/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto9",
    baths: "2baths",
    beds: "4Beds",
    price: "AED 17,000/day",
    image: "/assets/fleet2.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto10",
    baths: "3baths",
    beds: "5Beds",
    price: "AED 19,500/day",
    image: "/assets/fleet1.jpg",
  },
  {
    name: "Azimut Grande 35",
    capacity: "Upto14",
    baths: "5baths",
    beds: "7Beds",
    price: "AED 30,000/day",
    image: "/assets/fleet2.jpg",
  },
];

export default function FleetSection() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl md:text-5xl mb-14">
        Our Premium Fleet
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto px-10">
        {yachts.map((yacht, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg group">
            {/* Yacht Image */}
            <Image
              src={yacht.image}
              alt={yacht.name}
              width={900}
              height={500}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 w-full text-left text-white p-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <div className="flex items-center">
                    <h5 className="text-lg font-semibold ">{yacht.name}</h5>
<span
  style={{
    display: "inline-block",
    width: "1px",
    height: "40px",
    backgroundColor: "white",
  }}
></span>
                  </div>

                  {/* Icon Set (Text below Icon) */}
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center text-xs">
                      <Image
                        src="/assets/people.svg"
                        alt="People"
                        width={16}
                        height={16}
                      />
                      <span className="mt-1">{yacht.capacity}</span>
                    </div>{" "}
<span
  style={{
    display: "inline-block",
    width: "1px",
    height: "40px",
    backgroundColor: "white",
  }}
></span>
                    <div className="flex flex-col items-center text-xs">
                      <Image
                        src="/assets/bath.svg"
                        alt="Bath"
                        width={16}
                        height={16}
                      />
                      <span className="mt-1">{yacht.baths}</span>
                    </div>{" "}
<span
  style={{
    display: "inline-block",
    width: "1px",
    height: "40px",
    backgroundColor: "white",
  }}
></span>
                    <div className="flex flex-col items-center me-1 text-xs">
                      <Image
                        src="/assets/bed.svg"
                        alt="Bed"
                        width={16}
                        height={16}
                      />
                      <span>{yacht.beds}</span>
                    </div>
                  </div>
                </div>

                {/* Price Box (tight fit, no padding) */}
                <div className="bg-[#002BFF] text-white text-sm text-left -mb-6  -mr-3 font-semibold px-2 py-[8px]">
                  {yacht.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-14 px-8 py-3 border border-[#A3A3A3] text-[#A3A3A3] hover:bg-black hover:text-white transition-all">
        View Full Fleet
      </button>
    </section>
  );
}
