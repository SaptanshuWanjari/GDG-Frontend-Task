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
      className="p-2 md:px-8 w-full flex justify-center flex-col bg-background text-foreground"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
    >
      <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] text-foreground font-bold text-center mb-4 md:mb-6 lg:mb-8`}>
        {variants[variant].title}
      </h1>
      <span
        className={`border-b-4 rounded-md self-center ${variantBorderClass[variant]} w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 block mb-6 md:mb-8 lg:mb-10`}
      />
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6 md:gap-4 lg:gap-6 xl:gap-8`}>
        <div className="flex-shrink-0">
          <Image
            src={variants[variant].imageSrc ?? ""}
            alt={variants[variant].title ?? ""}
            width={533}
            height={533}
            className="pt-2 w-64 sm:w-80 md:w-96 lg:w-[420px] xl:w-[480px] 2xl:w-[533px] h-auto"
          />
        </div>
        <div
          className={`flex items-center justify-center rounded-xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 md:py-8 lg:py-10 transition-all duration-300 ${
            variantBorderClass[variant]
          } 
            ${reverse ? `border-l-8` : `border-r-8`} 
            flex-1 min-h-[200px] md:min-h-[250px] lg:min-h-[300px]
          `}
        >
          <p
            className={`text-foreground font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ${
              reverse ? "text-left" : "text-right"
            } w-full leading-relaxed md:leading-loose lg:leading-loose`}
          >
            {variants[variant].description?.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < variants[variant].description!.split('\n').length - 1 && <br />}
              </span>
            )) ?? ""}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
