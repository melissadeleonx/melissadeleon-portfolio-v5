// src/components/WormholeEffect.tsx
import React, { useState } from 'react';

const WormholeEffect: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="wormhole-effect">
                {/* You can add additional animations or effects here */}
            </div>
            <button className="close-wormhole" onClick={handleClose}>
                ✕
            </button>
        </>
    );
};

export default WormholeEffect;
