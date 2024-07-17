import { motion } from 'framer-motion';
import { Button, FloppyBirdGame, Wrapper, WormholeButton } from '../components';
import useWindowWidth from '../hooks/use-window-width';
import { getBreakpointsWidth } from '../utils/helper';
import { heroSection } from '../utils/portfolio';
import { slideUp } from '../animations';


const Hero = () => {
  const { cta, subtitle, title, tagline, description } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* Game background */}
      <FloppyBirdGame />

      {/* Hero content */}
      <Wrapper
        id="hero"
        className="min-h-screen h-full flex flex-col justify-center items-center gap-6 xs:gap-7 mt-12 xs:mt-0"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}

      >

        <div className="font-bold tracking-tighter max-w-5xl text-center">
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(1) })}
            initial="hidden"
            animate="show"
            className="title-dark text-6xl md:text-7xl text-slate-900 capitalize mb-2 leading-[1.1] hidden md:flex"
          >
            {title}
          </motion.h1>
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(2) })}
            initial="hidden"
            animate="show"
            className="tagline-dark justify-center text-2xl md:text-5xl  leading-[1.2] hidden md:flex"
          >
            {tagline}
          </motion.h1>
        </div>

        <motion.p
          variants={slideUp({ delay: getAnimationDelay(3) })}
          initial="hidden"
          animate="show"
          className="description-dark max-w-xl text-lg md:text-lg hidden md:flex"
        >
          {description}
        </motion.p>

        {/* <motion.p
        variants={slideUp({ delay: getAnimationDelay(4) })}
        initial="hidden"
        animate="show"
        className="text-xs md:text-sm font-mono text-accent"
      >
        {specialText}
      </motion.p> */}
        <WormholeButton />


        {cta && (
          <Button
            size="lg"
            type="link"
            variants={slideUp({ delay: getAnimationDelay(5) })}
            initial="hidden"
            animate="show"
            href={cta?.url ?? '#'}
            className={`mt-4 xs:mt-8 md:mt-10 ${cta.hideInDesktop ? 'md:hidden' : ''
              }`}
            sameTab={cta?.sameTab}
            style={{ zIndex: 2, pointerEvents: 'auto' }}
          >
            {cta.title}
          </Button>
        )}
      </Wrapper>
    </div>

  );
};

export default Hero;
