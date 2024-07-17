// components/FloppyBirdGame.tsx

import React, { useEffect } from 'react';

const FloppyBirdGame: React.FC = () => {
  useEffect(() => {
    const gameFrame = document.getElementById('floppyBirdGame') as HTMLIFrameElement;
    gameFrame.src = '/floppybird/index.html';
  }, []);

  return (
    <iframe
      id="floppyBirdGame"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        pointerEvents: 'auto',
        zIndex: 0,
      }}
    />
  );
};

export default FloppyBirdGame;
