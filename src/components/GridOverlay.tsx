const GridOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-y-0 left-4 right-4 z-0 grid grid-cols-2 gap-5 md:left-[120px] md:right-[120px] md:grid-cols-6">
      {[...Array(6)].map((_, i) => {
        const isOuter = i === 0 || i === 5;
        const borderColor = isOuter 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'rgba(255, 255, 255, 0.15)';
        return (
          <div 
            key={i} 
            className={`h-full ${i >= 2 ? 'hidden md:block' : ''}`}
            style={{
              background: 'rgba(217, 217, 217, 0.04)',
              border: `1px solid ${borderColor}`,
            }}
          />
        );
      })}
    </div>
  );
};

export default GridOverlay;
