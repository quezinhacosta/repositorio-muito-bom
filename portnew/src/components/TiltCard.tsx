"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "pink" | "both";
  tiltFactor?: number;
  onClick?: () => void;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "both",
  tiltFactor = 12,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -tiltFactor;
    const rotY = ((x - centerX) / centerX) * tiltFactor;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const getGlowGradient = () => {
    if (glowColor === "blue") {
      return `radial-gradient(350px circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(37, 99, 235, 0.16), transparent 70%)`;
    }
    if (glowColor === "pink") {
      return `radial-gradient(350px circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(236, 72, 153, 0.16), transparent 70%)`;
    }
    return `radial-gradient(380px circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(37, 99, 235, 0.12), rgba(236, 72, 153, 0.08) 45%, transparent 75%)`;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.012 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 20,
        mass: 0.6,
      }}
      className={`relative bg-white rounded-2xl md:rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),0_4px_6px_-2px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.12),0_10px_20px_-10px_rgba(236,72,153,0.08)] overflow-hidden ${className}`}
    >
      {/* Glare/Glow light reflection */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          background: getGlowGradient(),
          opacity: glarePosition.opacity,
        }}
      />

      {/* Content wrapper with slight 3D depth */}
      <div style={{ transform: "translateZ(15px)" }} className="relative z-0 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
