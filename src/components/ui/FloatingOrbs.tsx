export const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary Orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full floating opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(173 80% 50% / 0.4) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
          filter: "blur(60px)",
        }}
      />
      
      {/* Accent Orb */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full floating-delayed opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(262 80% 65% / 0.5) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
          filter: "blur(80px)",
        }}
      />
      
      {/* Small accent */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full floating-slow opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(200 80% 55% / 0.4) 0%, transparent 70%)",
          top: "40%",
          right: "20%",
          filter: "blur(40px)",
        }}
      />
      
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(173 80% 50%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(173 80% 50%) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
};
