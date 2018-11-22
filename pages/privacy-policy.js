import Layout from '../components/Layout_Default.js'
import Head from 'next/head'
import Link from 'next/link'

const description = ""

export default () => (
  <Layout header="titlebar" title="Accudio Privacy Policy" description={description} id="privacy-policy">
    <Head>
      <title key="title">Privacy Policy - Accudio Web Services</title>
    </Head>

    <section className="content">
      <div className="contain">
        <p>This Privacy Policy explains what information <Link href="/"><a>Accudio</a></Link> collects about its users, and what we do with that information. This policy applies only to analytics obtained through your use of accudio.com.</p>
        <h3>Website Visitors</h3>
        <p>Like most website operators, accudio.com collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Our purpose in collecting non-personally identifying information is to better understand how Accudio’s visitors use our website.</p>
        <p>Accudio.com also collects potentially personally-identifying information like Internet Protocol (IP) addresses. We do not use such information to identify our visitors, however, and this information is anonymised before being presented to administrators, and will never be disclosed to persons outside of Accudio.</p>
        <h3>Opt-out of tracking</h3>
        <p>We would really appreciate if users let us collect information about their visit to accudio.com as it allows us to improve our website and services based upon user interaction. If you do not wish to be tracked however, accudio.com respects your browsers 'Do Not Track' setting or you can opt out of tracking below. This stores an anonymised non-expiring cookie in your browser that we use to identify devices that should not be tracked.</p>
        <hr />
        <iframe style={{border: '0', height: '200px', width: '100%'}} src="https://analytics.accudio.com/index.php?module=CoreAdminHome&action=optOut&idsite=1&language=en"></iframe>
        <hr />
        <h3>Gathering of Personally-Identifying Information</h3>
        <p>Certain aspects of accudio.com have facilities to collect personal information for a specific purpose. For example, in our and contact form. This information is only stored for the purpose of responding to contact forms, and will never be disclosed to any persons outside of Accudio. Visitors are also of course able to refuse to supply this information by contacting us through other means.</p>
        <h3>Protection of Information</h3>
        <p>Information collected from visitors to accudio.com is collected, processed and stored internally. This information will not be sent elsewhere and will only be accessible to the Accudio team.</p>
        <h3>Aggregated Statistics</h3>
        <p>Accudio may collect statistics about the behaviour of visitors to our website. For instance, we may reveal how many visits a particularly page got, a breakdown of the type of device used to access accudio.com, or anonymised geographical information in the form of country or region, for example, United Kingdom, Highland.</p>
        <h3>Cookies</h3>
        <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Accudio avoids using cookies, except in regards to the tracking opt-out above. This cookie does not store any identifying information about visitors, and simply informs us if a visitors does not wish to be tracked. If you would like to opt-out of tracking without accepting this cookie however, you can use the 'Do Not Track' feature of your browser.</p>
        <h3>Contact</h3>
        <p>If you would like to get in touch with us about our privacy policy, analytics or otherwise, please see below.</p>
        <p>Email: <a href="mailto:privacy@accudio.com">privacy@accudio.com</a></p>
        <p>Contact form: <Link href="/about/contact"><a>accudio.com/about/contact</a></Link></p>
      </div>
    </section>
  </Layout>
)