import Image from "next/image";

interface PageHeroBackgroundProps {
  patternOpacity?: number;
  backgroundColor?: string;
  bottomRadius?: string;
}

export default function PageHeroBackground({
  patternOpacity = 0.03,
  backgroundColor = "#F4F7FA",
  bottomRadius = "120px",
}: PageHeroBackgroundProps) {
  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ 
        backgroundColor,
        borderBottomLeftRadius: bottomRadius,
        borderBottomRightRadius: bottomRadius,
      }}
    >
      {/* Very Faint Pattern */}
      <div 
        className="absolute inset-0" 
        style={{ opacity: patternOpacity }}
      >
        <Image
          src="/ToolPattern.png"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
