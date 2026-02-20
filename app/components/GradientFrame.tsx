import React from "react";

type GradientFrameProps = {
  children: React.ReactNode;
  className?: string;
  aspectRatio?: string;
};

export default function GradientFrame({
  children,
  className = "",
  aspectRatio = "aspect-[540/528]",
}: GradientFrameProps) {
  const backgroundGradient = {
    background: `
      linear-gradient(212deg, rgba(255, 255, 255, 0) 51%, rgba(255, 209, 27, 0.2) 64%, rgba(255, 255, 255, 0) 80%),
      linear-gradient(214deg, rgba(255, 255, 255, 0) 0%, rgba(0, 138, 221, 0.3) 25%, rgba(255, 255, 255, 0) 71%),
      radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 15%, rgba(249, 167, 26, 0.4) 38%, rgba(255, 255, 255, 0) 65%),
      linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 91%),
      linear-gradient(45deg, #FFFFFF 10%, rgba(255, 255, 255, 0) 22%),
      linear-gradient(38deg, rgba(255, 255, 255, 0) 78%, rgba(255, 255, 255, 0.69) 100%),
      radial-gradient(50% 50% at 50% 50%, #FFFFFF 19%, rgba(255, 255, 255, 0) 41%)
    `,
  };

  return (
    <div
      className={`relative ${aspectRatio} w-full overflow-hidden rounded-[24px] p-6 sm:p-10 lg:p-12 ${className}`}
      style={backgroundGradient}
    >
      {children}
    </div>
  );
}
