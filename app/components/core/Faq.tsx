"use client";
import React from "react";
import AccordionComponent from "../AccordionComponent";
import { motion } from "framer-motion";

const questions = [
  {
    q: "What is GDG?",
    a: "Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
    color: "red",
  },
  {
    q: "How can you become a part of GDG ?",
    a: "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.",
    color: "green",
  },
  {
    q: "What does a GDG Lead do?",
    a: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
    color: "blue",
  },
  {
    q: "How is DSC related to Google?",
    a: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
    color: "yellow",
  },
  {
    q: "How to reach us?",
    a: 'Mail us at "dsc.rknec@gmail.com"',
    color: "red",
  },
];
const Faq = () => {
  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center py-12 sm:py-14 bg-background text-foreground px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold my-6 sm:my-10 text-center">FAQs</h1>
      <div className="w-full max-w-3xl space-y-4">
        {questions.map((item, index) => (
          <AccordionComponent
            key={index}
            trigger={item.q}
            content={item.a}
            color={item.color as "red" | "green" | "blue" | "yellow"}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
