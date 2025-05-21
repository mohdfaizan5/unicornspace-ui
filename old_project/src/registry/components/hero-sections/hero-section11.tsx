"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Glow Effect */}
      <div className=" absolute top-0 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            We only{' '}
            <span className="text-emerald-400">teach</span>
            {' '}what we are
            <br />
            really{' '}
            <span className="italic">good</span>
            {' '}at.
          </h1>

          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            Get ready to{' '}
            <span className="text-emerald-400">accelerate your career</span>
            {' '}with customized courses and leave your mark in the tech industry
          </p>

          <Button 
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-lg px-8 py-6 rounded-xl"
          >
            Check Courses-Make an Impact
          </Button>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">25k+</h2>
              <p className="text-zinc-400 text-lg">Students taught</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">20+</h2>
              <p className="text-zinc-400 text-lg">Instructors</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">442K+</h2>
              <p className="text-zinc-400 text-lg">Youtube Subs.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

