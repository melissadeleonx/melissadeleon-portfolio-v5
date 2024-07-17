import React from 'react';

const WormholeButton: React.FC = () => {
    const triggerWormholeEffect = () => {
        const wormhole = document.createElement('div');
        wormhole.className = 'wormhole';
        document.body.appendChild(wormhole);

        // Remove the wormhole element after the animation duration
        setTimeout(() => {
            document.body.removeChild(wormhole);
        }, 500); // Match this with the duration of the CSS animation
    };

    return (
        <button onClick={triggerWormholeEffect} className="wormhole">
        </button>
    );
};

export default WormholeButton;
