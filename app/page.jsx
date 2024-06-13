"use client";

import { useEffect, useState } from "react";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Lottie from "react-lottie-player";
import animationData from "@/public/Lottie/Computer (2).json";

export default function Home() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Mamuka Xokerashvili</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Motivated and forward-thinking Backend developer with almost one
              year of Backend practical experience, effective and sustainable
              web solutions.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Lottie Animation */}
          {isPageLoaded && (
            <div className="flex justify-center xl:justify-end mt-12 xl:mt-0">
              <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: 300, height: 300 }}
                className="lottie-animation"
              />
            </div>
          )}
        </div>
      </div>
      <Stats />
    </section>
  );
}
