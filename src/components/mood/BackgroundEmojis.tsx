import React from "react";

const FLOATS = [
  { e: "🎈", top: "10%", left: "5%", delay: "0s" },
  { e: "🌟", top: "20%", left: "85%", delay: "0.6s" },
  { e: "🫧", top: "70%", left: "10%", delay: "1.2s" },
  { e: "💜", top: "80%", left: "75%", delay: "0.3s" },
  { e: "🤡", top: "35%", left: "45%", delay: "1s" },
  { e: "☁️", top: "5%", left: "50%", delay: "0.8s" },
  { e: "🎉", top: "60%", left: "55%", delay: "1.6s" },
  { e: "🪩", top: "28%", left: "20%", delay: "0.4s" },
];

const BackgroundEmojis: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
      {FLOATS.map((f, i) => (
        <div
          key={i}
          className="text-4xl md:text-5xl opacity-20 md:opacity-30 animate-float"
          style={{ position: "absolute", top: f.top as string, left: f.left as string, animationDelay: f.delay as string }}
          aria-hidden
        >
          {f.e}
        </div>
      ))}
    </div>
  );
};

export default BackgroundEmojis;
