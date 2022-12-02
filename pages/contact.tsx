import type { NextPage } from 'next'
import Layout from '@components/Layout'
import ContactLayout from '@components/Contact/ContactLayout'


const Contact: NextPage = () => {
  return (
    <Layout>
      <ContactLayout />
    </Layout>
  )
}

export default Contact;
