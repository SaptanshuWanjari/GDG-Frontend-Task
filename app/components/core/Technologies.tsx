"use client";
import React from "react";
import Card from "../Card";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const technologies = [
  {
    name: "Flutter",
    icon: "/Tech/flutter.svg",
    color: "blue",
    content:
      "Build beautiful apps for any platform—mobile, web, and desktop—from a single codebase. With hot reload, you can see your changes instantly, making learning incredibly fast.",
  },
  {
    name: "Web",
    icon: "/Tech/react.svg",
    color: "green",
    content:
      "React is all about components. They're like reusable building blocks that let you create complex user interfaces easily. This modular approach makes web development faster and more organized.",
  },
  {
    name: "Cloud",
    icon: "/Tech/cloud.svg",
    color: "yellow",
    content:
      "Stay organized and collaborate with the essential tools of Google Workspace. This suite helps the club run smoothly, from managing documents to scheduling events.",
  },
  {
    name: "Figma",
    icon: "/Tech/figma.svg",
    color: "purple",
    content:
      "Collaborate on UI/UX projects in real time. Figma is the go-to tool for creating stunning designs for apps, websites, and even club posters.",
  },
  {
    name: "Firebase",
    icon: "/Tech/firebase.svg",
    color: "orange",
    content:
      "Understand your audience and grow the club's community. Use Firebase Analytics to get insights into user behavior and improve your outreach efforts.",
  },
  {
    name: "LeetCode",
    icon: "/Tech/leetcode.svg",
    color: "red",
    content:
      "Test your skills in algorithmic problem-solving with Google's official platforms. Master data structures and algorithms, and get ready for a career in tech.",
  },
];

const Technologies = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({ 
      delay: 4000, 
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
      jump: false,
      stopOnFocusIn: false
    })
  );

  return (
    <motion.section
      className="mb-16 bg-background text-foreground py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0 }}
    >
      <div className="flex flex-col items-center justify-center mb-10 px-4 sm:px-6 md:px-10">
        <h1 className="divider text-3xl sm:text-4xl md:text-6xl lg:text-[70px] font-bold text-foreground text-center mb-4">
          Technologies
        </h1>
        <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-[34px] mt-4 md:mt-8 mb-6 md:mb-8 max-w-4xl text-muted-foreground">
          Domains That Excite Us to Collaborate and Teach
        </p>
      </div>
      {/* Carousel with full overflow visible for tooltips */}
      <motion.div
        className="relative overflow-visible pb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        <Carousel
          className="w-full mx-auto h-auto overflow-visible"
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
            skipSnaps: true,
            dragFree: true,
            containScroll: false,
            duration: 35,
            startIndex: 0,
            slidesToScroll: 1,
            inViewThreshold: 0.7,
          }}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent
            className="flex overflow-visible"
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {technologies.map((tech, index) => (
              <CarouselItem
                key={tech.name}
                className="basis-full sm:basis-1/2 lg:basis-1/4 flex items-start justify-center px-2 py-8 pb-25 min-h-[500px] overflow-visible"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth easing
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: {
                      duration: 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  className="h-full flex items-start justify-center"
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  <Card
                    img={tech.icon}
                    title={tech.name}
                    content={tech.content}
                    color={tech.color}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
        
        </Carousel>

        {/* Improved blur overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-background via-background/50 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Technologies;
