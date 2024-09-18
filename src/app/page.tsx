"use client";

import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 sm:p-20 font-sans">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 text-gray-800">
          NYC Tech Interview Squad
        </h1>
        <p className="text-2xl sm:text-3xl max-w-3xl mx-auto text-gray-600">
          Empowering engineers to ace big tech interviews through collaborative
          learning.
        </p>
        {/* <div className="mt-10">
          <a
            href="#upcoming-events"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Join Our Next Event
          </a>
        </div> */}
      </section>


      {/* Calendar Section */}
      <section id="upcoming-events" className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Upcoming Events
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://picsum.photos/seed/evnt1/800/400"
              alt="LeetCode Practice Session"
              width={800}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                LeetCode Practice Session
              </h3>
              <p className="text-gray-600 mb-4">
                Join us for a collaborative coding session tackling LeetCode
                problems.
              </p>
              <p className="text-gray-600">
                📅 Date: November 5th, 2023
                <br />⏰ Time: 6:00 PM - 8:00 PM
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://picsum.photos/seed/evnt2/800/400"
              alt="Systems Design Workshop"
              width={800}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Systems Design Workshop
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the fundamentals of systems design in a hands-on
                workshop.
              </p>
              <p className="text-gray-600">
                📅 Date: November 12th, 2023
                <br />⏰ Time: 6:00 PM - 8:00 PM
              </p>
            </div>
          </div>
          {/* Add more events as needed */}
        </div>
      </section>
      {/* Mission Section */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Mission
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="flex items-start">
            <div className="text-4xl mr-4">💻</div>
            <p className="text-xl text-gray-600">
              Collaborate on{" "}
              <span className="font-semibold text-gray-800">
                LeetCode problems
              </span>{" "}
              in small teams.
            </p>
          </div>
          <div className="flex items-start">
            <div className="text-4xl mr-4">💡</div>
            <p className="text-xl text-gray-600">
              Enhance crucial{" "}
              <span className="font-semibold text-gray-800">
                communication skills
              </span>{" "}
              for interviews.
            </p>
          </div>
          <div className="flex items-start">
            <div className="text-4xl mr-4">🎨</div>
            <p className="text-xl text-gray-600">
              Delve into{" "}
              <span className="font-semibold text-gray-800">
                systems design
              </span>{" "}
              topics.
            </p>
          </div>
          <div className="flex items-start">
            <div className="text-4xl mr-4">🚀</div>
            <p className="text-xl text-gray-600">
              Build meaningful connections and explore{" "}
              <span className="font-semibold text-gray-800">
                referral opportunities
              </span>
              .
            </p>
          </div>
        </div>
      </section>
      {/* Gallery Section with Swiper */}
      {/* <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Gallery
        </h2>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://picsum.photos/seed/gallery1/600/400"
                  alt="Event 1"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transform hover:scale-105 transition"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://picsum.photos/seed/gallery2/600/400"
                  alt="Event 2"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transform hover:scale-105 transition"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://picsum.photos/seed/gallery3/600/400"
                  alt="Event 3"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transform hover:scale-105 transition"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://picsum.photos/seed/gallery3/600/400"
                  alt="Event 3"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transform hover:scale-105 transition"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://picsum.photos/seed/gallery3/600/400"
                  alt="Event 3"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transform hover:scale-105 transition"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://picsum.photos/seed/gallery3/600/400"
                  alt="Event 3"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transform hover:scale-105 transition"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://picsum.photos/seed/gallery3/600/400"
                  alt="Event 3"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transform hover:scale-105 transition"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}

      {/* Organizers Section */}
      {/* <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Meet the Organizers
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src="https://picsum.photos/seed/organizer0/200"
                alt="Organizer 1"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Software Engineer at TechCorp</p>
          </div>
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src="https://picsum.photos/seed/organizer1/200"
                alt="Organizer 2"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Senior Developer at CodeBase</p>
          </div>
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src="https://picsum.photos/seed/organizer2/200"
                alt="Organizer 3"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Alex Johnson</h3>
            <p className="text-gray-600">Tech Lead at InnovateX</p>
          </div>

        </div>
      </section> */}

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-200">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} NYC Tech Interview Squad. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
