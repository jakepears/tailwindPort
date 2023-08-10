'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
function page() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ transition: 0.6, ease: "anticipate" }}
        style={{
          background: "black",
          color: "white",
          height: "100dvh",
          width: "100dvw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h2>this page is in early construction</h2>
          <h3>please check back later :P</h3>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default page