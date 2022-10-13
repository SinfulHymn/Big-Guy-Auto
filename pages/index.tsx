import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Carousel from '@components/Carousel/Carousel'

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());


const Home: NextPage = () => {
  return (
    <Layout>
      <Carousel slides={slides}/>
    </Layout>
  )
}

export default Home
