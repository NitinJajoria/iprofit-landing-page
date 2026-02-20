"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TeamJoinUs() {
  return (
    <section className="bg-[#F8F8F8] pt-8 sm:pt-10 lg:pt-12 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Left Content: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative aspect-[700/500] w-full overflow-hidden">
              <Image
                src="/JoinNow.png"
                alt="Join Our Team"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>

          {/* Right Content: Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full pb-8 sm:pb-10 lg:w-1/2 lg:pb-20 lg:pl-12"
          >
            <h2 
              className="mb-4 text-[40px] sm:text-[56px] lg:text-[64px] font-bold text-[#080808]"
              style={{ fontFamily: "'Outfit', sans-serif", lineHeight: "1.1" }}
            >
              Join Us
            </h2>
            <p 
              className="mb-6 max-w-xl text-[16px] sm:text-[18px] lg:text-[19px] text-[#4E4E4E]"
              style={{ 
                fontFamily: "'Outfit', sans-serif", 
                fontWeight: 400, 
                lineHeight: "1.6" 
              }}
            >
              We&apos;re building the future of finance — and we&apos;d love your help. If you&apos;re driven by design, tech, or the joy of simplifying complex problems, iProfit might be your next home.
            </p>
            
            <Link
              href="#"
              className="inline-flex h-14 items-center justify-center rounded-full bg-black px-10 font-outfit text-[16px] font-medium text-white transition-transform hover:scale-105 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]"
            >
              Know More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
