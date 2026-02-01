"use client";

const LightBandsBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Bright moving sky-blue band */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%]
        bg-[linear-gradient(120deg,transparent_30%,rgba(56,189,248,0.55)_50%,transparent_70%)]
        blur-2xl animate-lightband1"
      />

      {/* Secondary lighter band */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%]
        bg-[linear-gradient(300deg,transparent_30%,rgba(14,165,233,0.45)_50%,transparent_70%)]
        blur-2xl animate-lightband2"
      />

      {/* Soft overall glow to tie everything together */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)]" />

    </div>
  );
};

export default LightBandsBackground;
