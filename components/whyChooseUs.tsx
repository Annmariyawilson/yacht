"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    { icon: "/assets/safety.svg", title: "Safety", subtitle: "First" },
    { icon: "/assets/premium.svg", title: "Premium", subtitle: "Selection" },
    { icon: "/assets/support.svg", title: "24/7", subtitle: "Support" },
    {
      icon: "/assets/experiences.svg",
      title: "Unforgettable",
      subtitle: "Experiences",
    },
  ];

  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-5xl  mb-12 text-gray-900">
        Why Should You Choose Us?
      </h2>

      <div className="flex flex-wrap justify-center items-center max-w-5xl mx-auto divide-x divide-gray-500">
        {features.map((f, index) => (
          <div
            key={index}
            className="flex flex-col items-center mt-5 justify-center px-6 sm:px-8 w-2/3 sm:w-auto text-center space-y-6"
          >
            <Image
              src={f.icon}
              alt={f.title}
              width={36}
              height={36}
              className="mb-2"
            />
            <div className="flex flex-col p-4 leading-tight">
              <span className="text-gray-900 text-2xl">
                {f.title}
              </span>
              <span className="text-gray-900  text-2xl">
                {f.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
