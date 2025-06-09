import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div className="component-container">
      <h2 className="component-title">MovingDot</h2>
      <div 
        className="moving-dot-container"
        onPointerMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }}
      >
        <div 
          className="moving-dot"
          style={{
            left: position.x,
            top: position.y
          }}
        />
      </div>
    </div>
  );
}
