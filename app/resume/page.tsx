"use client";

import { motion } from "framer-motion";

export const dynamic = "force-dynamic"; 
// ⬆️ This stops Next.js from trying to prerender this page

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center p-4">
      <motion.iframe
        src="/Resume.pdf"
        className="w-full max-w-5xl h-[90vh] rounded-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(0,238,255,0.2)]"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}
