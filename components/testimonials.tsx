"use client";

import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Emmanuel P.",
    location: "Jali, Kigali",
    content:
      "Switching to the SGD10 Smart has been a game-changer us. We used to spend several minutes each day waiting for someone to open the gate, but now it’s instant with just a tap on the app. It’s incredibly convenient, especially on rainy days when I don’t want to step out of the car. Ingates’ team made the setup process easy and stress-free, which we appreciated.",
  },
  {
    img: TestimonialImg02,
    name: "Andrew K.",
    location: "Kicukiro, Kigali",
    content:
      "I’ve always been cautious about security, so finding a reliable automated gate system was a top priority. The SGD10 Smart gives us peace of mind with its tamper-resistant design and battery backup. I’d recommend Ingates to anyone looking to upgrade their gate system.",
  },
  {
    img: TestimonialImg03,
    name: "Lucy D.",
    location: "Gisozi, Kigali",
    content:
      "Controlling my gate from my phone is a game-changer, and the customer service was exceptional. Ingates has really impressed us.",
  },
  {
    img: TestimonialImg04,
    name: "Pavel M.",
    location: "Shyorongi, Kigali",
    content:
      "What I love most about Ingates is their commitment to customer service. I had a few questions about maintenance, and they were quick to respond and very helpful. The SGD10 Smart works flawlessly, and I love being able to control the gate from my phone. It’s convenient, secure, and has truly added a touch of modernity to our home.",
  },
  {
    img: TestimonialImg05,
    name: "Miriam E.",
    location: "Kicukiro, Kigali",
    content:
      "The SGD10 Smart has been a lifesaver during my busy mornings. With two kids in the car, I don’t have time to fuss with opening the gate manually. This system has made my routine so much easier – just a single click, and we’re on our way.",
  },
  {
    img: TestimonialImg06,
    name: "Eloise V.",
    location: "Kacyiru, Kigali",
    content:
      "I never thought an automated gate could be this affordable and dependable. Even during power cuts, it keeps working without a hitch.",
  }
];

export default function Testimonials() {
  const masonryContainer = useMasonry();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Don't take our word for it
          </h2>
          <p className="text-lg text-green-200/65">
          Hear from satisfied customers who have experienced the convenience,
          security, and quality of the SGD10 Smart firsthand.
          </p>
        </div>

        <div>
          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    location: string;
    content: string;
  };
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-green-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-green-200/65 transition-colors hover:text-green-500"
              href="#0"
            >
              {testimonial.location}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
