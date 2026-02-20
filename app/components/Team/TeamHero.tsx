"use client";

import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <section className="relative pt-24 lg:pt-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-4 max-w-5xl text-[40px] sm:text-[56px] lg:text-[78px] font-medium text-[#080808]"
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            lineHeight: "1.2",
            letterSpacing: "-0.04em"
          }}
        >
          We&apos;re on a Mission to Help <br className="hidden lg:block" /> Indian SMEs Run Better
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-[16px] sm:text-[18px] lg:text-[19px] text-[#080808]"
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontWeight: 400,
            lineHeight: "1.6"
          }}
        >
          Because businesses grow faster when operations are simple.
        </motion.p>
      </div>
    </section>
  );
}
