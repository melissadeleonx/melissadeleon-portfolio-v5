import type { NextPage } from 'next';
import { SEO } from '../components';
import {
    Websites,
    Layout,
} from '../containers';
import { seoData } from '../utils/portfolio';

const Home: NextPage = () => {
    return (
        <>
            <SEO {...seoData} />
            <Layout>
                <Websites />
            </Layout>
        </>
    );
};

export default Home;
