import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Carousel from '@components/Carousel/Carousel'
import Index from '@components/Index/Index'



const Home: NextPage = () => {
  return (
    <Layout>
      <Carousel />
      <Index />
    </Layout>
  )
}

export default Home
