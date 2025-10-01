"use client";

import React from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 5,
  containerClassName,
  dotSize = 1.5,
  children,
  colors = [[236, 72, 153]],
}: {
  animationSpeed?: number;
  containerClassName?: string;
  dotSize?: number;
  children?: React.ReactNode;
  colors?: number[][];
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;
    const dpi = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * dpi;
      canvas.height = canvas.offsetHeight * dpi;
      context.scale(dpi, dpi);
    };

    resizeCanvas();

    const dots: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    const colorPalette = colors.map(
      (rgb) => `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.7)`
    );

    const randomColor = () =>
      colorPalette[Math.floor(Math.random() * colorPalette.length)];

    const createDot = () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * animationSpeed,
      vy: (Math.random() - 0.5) * animationSpeed,
      radius: dotSize,
      color: randomColor(),
    });

    for (let i = 0; i < 100; i++) dots.push(createDot());

    const draw = () => {
      context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.offsetWidth) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.offsetHeight) dot.vy *= -1;

        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fillStyle = dot.color;
        context.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [animationSpeed, colors, dotSize]);

  return (
    <div className={`pointer-events-none absolute inset-0 ${containerClassName}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
      {children}
    </div>
  );
};