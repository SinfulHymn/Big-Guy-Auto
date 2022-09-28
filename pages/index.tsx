import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '@components/Layout'
import Carousel from '@components/Carousel/Carousel'

const Home: NextPage = () => {
  return (
    <Layout>
      <Carousel/>
    </Layout>
  )
}

export default Home
