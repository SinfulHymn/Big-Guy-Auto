import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Carousel from '@components/Carousel/Carousel'

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());


const Home: NextPage = () => {
  return (
    <Layout>
      <Carousel slides={slides}/>
      <div className='pt-4 pb-1'>
        <div className='container mx-auto'>
          <div className='flex'>
            <div className=' flex-1'>test</div>
            <div className=' flex-1'>test</div>
            
          </div>
          </div>
      </div>
    </Layout>
  )
}

export default Home
