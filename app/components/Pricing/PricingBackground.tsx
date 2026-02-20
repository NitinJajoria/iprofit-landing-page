export default function PricingBackground() {
  return (
    <div 
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
      }}
    >
      {/* Ellipse 2948 */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 rounded-full border border-[#F0F0F0]"
        style={{
          width: '2200px',
          height: '2200px',
          top: '110px',
          background: 'linear-gradient(180deg, #F7F7F7 0%, rgba(255, 255, 255, 0) 100%)',
          boxShadow: '0px -10px 17px 10px rgba(255, 255, 255, 0.2)',
        }}
      />
      
      {/* Ellipse 2947 */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 rounded-full border border-[#F0F0F0]"
        style={{
          width: '1900px',
          height: '1900px',
          top: '302px',
          background: 'linear-gradient(180deg, #F7F7F7 0%, rgba(255, 255, 255, 0) 100%)',
          boxShadow: '0px -10px 17px 10px rgba(255, 255, 255, 0.2)',
        }}
      />

      {/* Ellipse 2946 */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 rounded-full border border-[#F0F0F0]"
        style={{
          width: '1600px',
          height: '1600px',
          top: '488px',
          background: 'linear-gradient(180deg, #F7F7F7 0%, rgba(255, 255, 255, 0) 100%)',
          boxShadow: '0px -10px 17px 10px rgba(255, 255, 255, 0.2)',
        }}
      />

      {/* Ellipse 2945 */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 rounded-full border border-[#F0F0F0]"
        style={{
          width: '1300px',
          height: '1300px',
          top: '692px',
          background: 'linear-gradient(180deg, #F7F7F7 0%, rgba(255, 255, 255, 0) 100%)',
          boxShadow: '0px -10px 17px 10px rgba(255, 255, 255, 0.2)',
        }}
      />
    </div>
  );
}
