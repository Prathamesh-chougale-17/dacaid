"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Icons } from "./icons";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeHeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-background min-h-[92vh] flex items-center"
    >
      {/* Dynamic background effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] bg-[size:40px_40px] md:bg-[size:60px_60px]"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute -top-1/2 -right-1/2 h-screen w-screen rounded-full bg-gradient-to-r from-purple-500/70 to-pink-500/70 dark:from-purple-400/60 dark:to-pink-400/60 blur-3xl"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-1/2 -left-1/2 h-screen w-screen rounded-full bg-gradient-to-r from-blue-500/70 to-cyan-500/70 dark:from-blue-400/60 dark:to-cyan-400/60 blur-3xl"
      />

      {/* Content container */}
      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-20 lg:py-32">
          <div className="text-center">
            {/* Badge/pill label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-6 sm:mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-background/95 px-4 sm:px-7 py-1.5 sm:py-2 shadow-md backdrop-blur transition-all hover:border-slate-400 dark:hover:border-slate-500 hover:bg-white/50 dark:hover:bg-slate-800/50"
            >
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                Introducing Dacaid - Your Web3 Code Library
              </p>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 sm:mb-8 bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-transparent"
            >
              Empowering Web3 Developers
              <br className="hidden sm:block" />
              Access, Share, and Build
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mx-auto max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300 px-4"
            >
              Discover a vast collection of Web3 code snippets and components.
              Streamline development, collaborate with peers, and contribute to
              the decentralized future.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
            >
              <Link href="/docs" className="w-full sm:w-auto">
                <Button size="lg" className="group w-full sm:w-auto">
                  Explore Library
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link
                href="https://github.com/Prathamesh-Chougale-17/dacaid"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  Contribute on GitHub
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHeroSection;
