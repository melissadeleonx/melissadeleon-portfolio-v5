import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, ProjectCard, Wrapper } from '../components';
import { PROJECTS_INITIALLY } from '../utils/config';
import { sortByYear } from '../utils/helper';
import { websitesSection } from '../utils/portfolio';
import { getSectionAnimation, projectVariants } from '../animations';

const Websites = () => {
    const { websites, title, subtitle } = websitesSection;

    return (
        <Wrapper id="websites" animate={false}>
            <motion.h2
                // {...getSectionAnimation}
                className="heading-secondary text-center !mb-12"
            >
                <p className="text-accent text-sm capitalize mb-3 font-mono">
                    {subtitle}
                </p>

                {title}
            </motion.h2>

            <div className="grid grid-cols-auto-250 xs:grid-cols-auto-300 gap-6 place-items-center">
                {sortByYear(websites).map((project, i) => (
                    <ProjectCard
                        {...project}
                        key={project.id}
                        // variants={projectVariants}
                        // initial="hidden"
                        // whileInView="show"
                        custom={i}
                    // viewport={{ once: true }}
                    />
                ))}
            </div>
        </Wrapper>
    );
};

export default Websites;
