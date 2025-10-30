"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Expert Advice for First-Time Yacht Charter Guests in Dubai",
    desc: "A deep dive into how you can enjoy yacht life without breaking the bank.",
    date: "March 17, 2025",
    img: "/assets/read1.jpg",
  },
  {
    title: "Yacht Charter Packages in Dubai: What’s Included and What’s Extra",
    desc: "A deep dive into how you can enjoy yacht life without breaking the bank.",
    date: "March 17, 2025",
    img: "/assets/read2.jpg",
  },
  {
    title: "Why Yacht Hire in Dubai is Gaining Popularity Among Families?",
    desc: "A deep dive into how you can enjoy yacht life without breaking the bank.",
    date: "March 17, 2025",
    img: "/assets/read3.jpg",
  },
  {
    title: "The Rise of Luxury Yacht Charters in Dubai’s Tourism Industry",
    desc: "A deep dive into how you can enjoy yacht life without breaking the bank.",
    date: "March 17, 2025",
    img: "/assets/read4.jpg",
  },
];

function topReads() {
  return (
    <>
      <section className="w-full max-w-[1424px] mx-auto mb-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-light mb-10">Top Reads</h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.map((blog, i) => (
            <Link key={i} href="/blog/details">
              <div className="grid grid-cols-[45%_55%] bg-white border border-gray-200 cursor-pointer hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
                {/* Left Image */}
                <div className="relative w-full h-100 md:h-90">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-fill"
                  />
                </div>

                {/* Right Text */}
                <div className="p-6 flex mt-6 flex-col justify-between ">
                  <div>
                    <p className="text-md text-blue-600 font-medium mb-1">
                      Explore
                    </p>
                    <p className="text-3xl font-bold  mb-2">{blog.title}</p>
                    <p className="text-md font-semibold">{blog.desc}</p>
                  </div>
                  <p className="text-sm font-semibold mt-4">{blog.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="flex justify-center mt-12">
          <button className="mt-4 px-8 py-3 border cursor-pointer border-[#A3A3A3] text-[#A3A3A3] hover:bg-black hover:text-white transition-all">
            View all Blogs
          </button>
        </div>
      </section>
    </>
  );
}

export default topReads;
