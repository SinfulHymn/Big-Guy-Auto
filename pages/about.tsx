import type { NextPage } from 'next';
import Layout from '@components/Layout';
import AboutComponent from '@components/About/About';

const About: NextPage = () => {
  return (
    <Layout>
      <AboutComponent />
    </Layout>
  );
};

export default About;
