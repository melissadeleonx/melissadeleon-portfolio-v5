// src/containers/Contact.tsx
import React, { useState } from 'react';
import { Wrapper, Button } from '../components';
import { getSectionAnimation } from '../animations';
import { contactSection } from '../utils/portfolio';
import WormholeEffect from '../components/WormholeEffect';

const Contact = () => {
  const { subtitle, title, paragraphs } = contactSection;
  const [showWormhole, setShowWormhole] = useState(false);

  const handleClick = (): void => {
    setShowWormhole(true);
    console.log('Wormhole effect triggered');
  };

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="text-accent text-sm capitalize mb-3 font-mono">
        {subtitle}
      </p>

      <h2 className=" text-8xl mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <Button size="lg" className="!mt-20" center onClick={handleClick}>
        Enter a New Dimension
      </Button>

      {showWormhole && <WormholeEffect onClose={() => setShowWormhole(false)} />}
    </Wrapper>
  );
};

export default Contact;
