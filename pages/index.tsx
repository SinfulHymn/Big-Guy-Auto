import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Carousel from '@components/Carousel/Carousel'

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());


const Home: NextPage = () => {
  return (
    <Layout>
      <Carousel />
      <div className='py-10 '>
        <div className='container mx-auto '>
          <div className='border-l-4 border-main-red'>
            <div className='py-1 ml-6 '>
              <p className=' text-3xl font-medium'>Welcome to the Big Guy Auto Body Website!</p>
              <p className=' text-xl text-main-red font-medium'>Collision repair service in the City of San Fernando.</p>
            </div>
          </div>
            <p className=' font-medium  py-6 ml-6 leading-9 text-justify '> We are a family owned Auto Collision Repair shop located in the City of San Fernando. We have more than 15 years of experience in the field and the accolades to back it up. We work with clients big and small and have various contracts with companies such as Budweiser, Penske, and Public works. As well are proud to say that we curretly serve the City of Los Angeles and the Los Angeles Sheriff Department. We look forward to do doing business with you and we will do our best to provide you the best service possible. </p>
          <div className='py-6 flex'>
            <div className=' flex-1'>
              <div className=' border-l-4 border-l-main-red px-5'> res</div>
              <div></div>
            </div>
            <div className=' flex-1'>test</div>
            
          </div>
          </div>
      </div>
    </Layout>
  )
}

export default Home
