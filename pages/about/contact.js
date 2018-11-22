import Layout from '../../components/Layout_Default.js'
import Form from '../../components/Contact_Form.js'
import Head from 'next/head'

const description = 'Contact us at <a href="mailto:info@accudio.com">info@accudio.com</a>, <a href="https://facebook.com/accudio">facebook.com/accudio</a>, or <a href="https://twitter.com/accudio">@Accudio</a>. Alternatively, send us a message using the contact form below.'

export default () => (
  <Layout header="titlebar" title="Contact Us" description={description} id="about/contact">
    <Head>
      <title key="title">Contact - Accudio Web Services</title>
    </Head>

    <section className="content">
      <div className="contain">
        <p>To get in touch with Accudio, Alistair Shepherd, or to receive a quote you can:</p>
        <ul>
          <li>Fill in the contact form below</li>
          <li>Email <a href="mailto:info@accudio.com">info@accudio.com</a></li>
          <li>Find us on <a href="https://facebook.com/accudio">facebook.com/accudio</a></li>
          <li>Follow us at <a href="https://twitter.com/accudio">twitter.com/accudio</a></li>
          <li>Send us a message to <a href="https://messenger.com/t/accudio">messenger.com/t/accudio</a></li>
        </ul>
      </div>
    </section>

    <section className="content">
      <div className="contain">
        <Form></Form>
      </div>
    </section>

  </Layout>
)