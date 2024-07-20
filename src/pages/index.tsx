import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { SEO } from '../components';
import {
  About,
  Experience,
  Hero,
  Skills,
  Contact,
  Projects,
  Layout,
} from '../containers';
import { seoData } from '../utils/portfolio';

const Home: NextPage = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const response = await fetch('/api/visitor');
      const data = await response.json();
      setCount(data.count);
    };

    fetchVisitorCount();
  }, []);


  return (
    <>
      <SEO {...seoData} />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
