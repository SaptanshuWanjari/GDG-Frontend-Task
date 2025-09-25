"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const variants = {
  mission: {
    title: "Our Mission",
    description:
      "Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.",
    imageSrc: "/mission.svg",
    color: "#4285F4",
  },
  perspective: {
    title: "Our Perspective",
    description:
      "We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.",
    imageSrc: "/perspective.svg",
    color: "#0F9D56",
  },
  keepsGoing: {
    title: "What Keeps Us Going",
    description:
      "Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.\nThe entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.",
    imageSrc: "/keepgoing.svg",
    color: "#FFC727",
  },
};

const variantBorderClass: Record<keyof typeof variants, string> = {
  mission: "border-blue-500",
  perspective: "border-green-600",
  keepsGoing: "border-yellow-400",
};

const FeatureCard = ({
  variant,
  reverse = false,
}: {
  variant: keyof typeof variants;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      className="p-2 md:px-6 w-full flex justify-center flex-col bg-background text-foreground"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
    >
      {/* Title */}
      <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-foreground font-bold text-center mb-3 md:mb-4`}>
        {variants[variant].title}
      </h1>

      {/* Accent underline */}
      <span
        className={`border-b-4 rounded-md self-center ${variantBorderClass[variant]} w-36 sm:w-48 md:w-56 lg:w-56 xl:w-64 block mb-5 md:mb-6`}
      />

      {/* Center the card content with a max width so the whole card stays centered on the page */}
      <div className="w-full max-w-4xl mx-auto">
        <div
          className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center gap-4 md:gap-6 lg:gap-6 xl:gap-8`}
        >
          {/* Image - constrained sizes to keep card compact */}
          <div className="flex-shrink-0">
            <Image
              src={variants[variant].imageSrc ?? ""}
              alt={variants[variant].title ?? ""}
              width={533}
              height={533}
              className="pt-2 w-44 sm:w-52 md:w-56 lg:w-48 xl:w-56 h-auto"
            />
          </div>

          {/* Text/content */}
          <div
            className={`flex items-center justify-center rounded-xl px-4 sm:px-6 md:px-6 lg:px-8 py-5 md:py-6 lg:py-6 transition-all duration-300 ${
              variantBorderClass[variant]
            } ${reverse ? `border-l-8` : `border-r-8`} flex-1 max-w-prose min-h-[160px] md:min-h-[200px] lg:min-h-[180px] xl:min-h-[200px]`}
          >
            <p
              className={`text-foreground font-semibold text-sm sm:text-base md:text-base lg:text-base xl:text-lg text-center ${
                reverse ? "text-left" : "text-right"
              } w-full leading-relaxed md:leading-loose lg:leading-relaxed`}
            >
              {variants[variant].description?.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < variants[variant].description!.split("\n").length - 1 && <br />}
                </span>
              )) ?? ""}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
