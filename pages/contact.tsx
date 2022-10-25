import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Banner from '@components/Common/Banner'
import {imagesByIndex} from 'public/Media'

const Contact: NextPage = () => {
    const photo = imagesByIndex(1).src
  return (
    <Layout>
        <Banner subtitle='test' title="Contact Us" image={`${photo}`} />
    </Layout>
  )
}

export default Contact;
