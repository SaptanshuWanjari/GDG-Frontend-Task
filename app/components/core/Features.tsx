import React from "react";
import FeatureCard from "../FeatureCard";

const Features = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20 max-w-7xl mx-auto">
        <h1 className="font-bold text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] text-center leading-tight">
          Get To Know Us!
        </h1>
      </div>

      <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24">
        <FeatureCard variant="mission" />
        <FeatureCard variant="perspective" reverse />
        <FeatureCard variant="keepsGoing" />
      </div>
    </div>
  );
};

export default Features;
