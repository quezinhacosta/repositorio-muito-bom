"use client";

import { useEffect, useRef } from "react";

export default function InteractiveMeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth interpolation
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // Dynamic gradient orbs
    const orbs = [
      {
        x: width * 0.2,
        y: height * 0.3,
        baseX: 0.2,
        baseY: 0.3,
        radius: 450,
        color: "rgba(37, 99, 235, 0.08)", // Modern Blue
        speed: 0.0008,
        angle: 0,
      },
      {
        x: width * 0.8,
        y: height * 0.4,
        baseX: 0.8,
        baseY: 0.4,
        radius: 500,
        color: "rgba(236, 72, 153, 0.07)", // Vibrant Pink
        speed: 0.0006,
        angle: Math.PI / 2,
      },
      {
        x: width * 0.5,
        y: height * 0.8,
        baseX: 0.5,
        baseY: 0.8,
        radius: 400,
        color: "rgba(147, 197, 253, 0.09)", // Soft Ice Blue
        speed: 0.001,
        angle: Math.PI,
      },
      {
        x: width * 0.3,
        y: height * 0.7,
        baseX: 0.3,
        baseY: 0.7,
        radius: 350,
        color: "rgba(244, 114, 182, 0.06)", // Soft Blush
        speed: 0.0007,
        angle: Math.PI * 1.5,
      },
    ];

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Clear with base off-white
      ctx.fillStyle = "#F8F9FA";
      ctx.fillRect(0, 0, width, height);

      // Render flowing orbs
      orbs.forEach((orb) => {
        orb.angle += orb.speed * delta * 60;
        const floatX = Math.cos(orb.angle) * 80;
        const floatY = Math.sin(orb.angle) * 80;

        // Interaction with mouse position (gravitational drag)
        const mouseOffsetX = (mouse.x - width / 2) * 0.06;
        const mouseOffsetY = (mouse.y - height / 2) * 0.06;

        const currentX = orb.baseX * width + floatX + mouseOffsetX;
        const currentY = orb.baseY * height + floatY + mouseOffsetY;

        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "rgba(248, 249, 250, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Interactive mouse follow glow (subtle modern cyan-blue/pink blend)
      const mouseGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        320
      );
      mouseGlow.addColorStop(0, "rgba(37, 99, 235, 0.045)");
      mouseGlow.addColorStop(0.5, "rgba(236, 72, 153, 0.03)");
      mouseGlow.addColorStop(1, "rgba(248, 249, 250, 0)");

      ctx.fillStyle = mouseGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 320, 0, Math.PI * 2);
      ctx.fill();

      // Subtle architectural dot grid (Material / TeamCamp aesthetic)
      const dotSpacing = 36;
      ctx.fillStyle = "rgba(100, 116, 139, 0.08)";
      for (let x = 18; x < width; x += dotSpacing) {
        for (let y = 18; y < height; y += dotSpacing) {
          // Slight proximity amplification near mouse
          const dist = Math.hypot(x - mouse.x, y - mouse.y);
          if (dist < 180) {
            ctx.fillStyle = `rgba(37, 99, 235, ${0.18 * (1 - dist / 180)})`;
            ctx.fillRect(x - 0.75, y - 0.75, 1.8, 1.8);
            ctx.fillStyle = "rgba(100, 116, 139, 0.08)";
          } else {
            ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
