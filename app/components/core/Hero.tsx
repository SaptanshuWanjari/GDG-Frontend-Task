"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-background">
      {/* main content */}
      <div className="flex flex-col items-center justify-center text-center gap-6 flex-1 px-4 sm:px-6">
        <span className="flex flex-col gap-1">
          <span className="flex flex-col md:flex-row items-center justify-center md:gap-4">
            <Image
              src="/google.svg"
              alt="logo"
              width={220}
              height={220}
              className="w-40 h-auto md:w-[300px]"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans md:ml-4  ">
              Developer Groups
            </h1>
          </span>
          <p className="text-4xl sm:text-5xl md:text-6xl text-muted-foreground font-semibold font-sans mb-6">
            RBU Chapter
          </p>
        </span>
        <Image
          src="/hero.svg"
          alt="Hero Image"
          width={500}
          height={300}
          className="object-cover mx-auto w-64 sm:w-80 md:w-[500px] h-auto"
        />
        <p className="max-w-3xl px-2 text-balance text-base sm:text-lg md:text-2xl text-muted-foreground text-center font-semibold font-sans">
          Google Developer Groups are community groups for college and
          university students interested in Google developer technologies.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-sans px-6 py-3 rounded-lg font-bold text-center text-base sm:text-lg w-38 cursor-pointer bg-blue-500 text-white hover:bg-blue-700 transition-colors"
        >
          Join Us
        </motion.button>
      </div>
      {/* arrows */}
      <motion.div
        className="mt-10 flex justify-center relative h-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        {/* arrows */}
        <div>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="z-20 relative"
          >
            <Image src="/v3.svg" alt="Scroll Down" width={60} height={36} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="z-20 relative"
          >
            <Image src="/v3.svg" alt="Scroll Down" width={60} height={36} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="z-20 relative"
          >
            <Image src="/v3.svg" alt="Scroll Down" width={60} height={36} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
