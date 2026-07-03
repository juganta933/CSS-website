"use client";

import FloatingLines from "./FloatingLines";

export default function PageBackground() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden bg-[#030303]">
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={[4, 6, 8]}
        lineDistance={[18, 15, 12]}
        topWavePosition={{ x: 16, y: 0.7, rotate: -0.25 }}
        middleWavePosition={{ x: 8, y: 0.05, rotate: 0.15 }}
        bottomWavePosition={{ x: 3, y: -0.8, rotate: 0.25 }}
        bendRadius={2.5}
        bendStrength={-1.4}
        interactive={true}
        parallax={true}
        parallaxStrength={0.35}
        mouseDamping={0.06}
        animationSpeed={0.65}
        linesGradient={["#45e8f5", "#030303", "#000000"]}
        mixBlendMode="screen"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(69,232,245,0.16),transparent_35%),linear-gradient(to_bottom,rgba(3,3,3,0.05),rgba(0,0,0,0.7))]" />
    </div>
  );
}