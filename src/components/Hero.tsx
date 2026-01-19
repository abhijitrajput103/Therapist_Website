'use client';

import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react"; // Optional: remove if not using icons

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-sky-100">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/5" />
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-sky-100/90" />
                <div className="absolute inset-0 bg-[url('/images/therapy-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
            </div>
            <motion.div
                className="z-10 max-w-2xl text-center px-4 py-16 sm:py-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 drop-shadow-md">
                    Dr. Serena Blake
                </h1>
                <h2 className="text-lg md:text-xl text-gray-600 mb-6">
                    Clinical Psychologist • Los Angeles, CA
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    8 years of practice, 500+ sessions
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <Button
                        type="button"
                        aria-label="Book an appointment with Dr. Serena Blake"
                        onClick={() => {
                            document?.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-lg px-6 py-3 shadow-md transition-transform hover:scale-105 flex items-center gap-2"
                    >
                        <CalendarIcon className="w-5 h-5" />
                        Book an Appointment
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
