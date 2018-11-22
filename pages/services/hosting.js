import Layout from '../../components/Layout_Default.js'
import Head from 'next/head'
import Link from 'next/link'

const description = 'Accudio offers fully-managed hosting in-house, allowing greater flexibility, and a more personal and tailored service compared to large hosting providers.<br />We also offer webapp deployment, website support, and administration services, simply <a href="/about/contact">contact us</a> for more information.'

export default () => (
  <Layout header="titlebar" title="Web Hosting, Deployment and Administration" description={description} id="services/hosting">
    <Head>
      <title key="title">Web Hosting and Administration - Accudio Web Services</title>
    </Head>

    <section className="content">
      <div className="contain">
        <h2>Hosting managed by someone you can trust</h2>
        <p>
          Accudio's hosting is managed directly by us, so you can be sure that not only do we have total control over the environment but if there's any issues they can be resolved quickly and without hassle.
        </p>
        <h2>Linux hosting powered by ISPConfig</h2>
        <p>
          We have a cluster of Virtual Servers powered by Ubuntu Server running the hosting control panel ISPConfig, a reliable and flexible way for you to manage your hosting, email accounts and domains.
        </p>
        <h2>Backups, SSL, and testing domain</h2>
        <p>
          We have several features for no additional cost that other hosts do not offer, like daily, weekly and monthly backups, a free SSL certificate powered by LetsEncrypt, and *.alpha.accudio.com testing domain.
        </p>
      </div>
    </section>

    <section className="content">
      <div className="contain">
        <h2>Accudio Web Hosting</h2>
        <p>
          Accudio has built many websites for people and companies over the years and worked with many hosting companies, based in the UK, EU, and further afield. However, one thing I have always struggled with many providers is the sometimes slow and inconsistent support they offer. The Web Hosting business is very difficult to navigate, with similar products offered by hundreds of companies, but you don't know how their support is until something goes wrong, and you have to spend hours on the phone or days waiting for a reply to your ticket. Sometimes with out of date, insecure software, missing important features despite high prices, and little flexibility and customisation, I thought it could be done better. That is why Accudio offers hosting managed by us, so you have someone you know keeping an eye on it, and a direct line to us if needed.
        </p>
        <p>
          Our hosting consists of multiple virtual linux servers in northern europe with a leading server provider. They are clustered to spread the load of all clients to ensure that your website is always available and has the resources it needs. Accudio manages these directly, and as virtual servers they are not affected by hardware outages leading to maximum uptime.
        </p>
        <p>
          We have Daily, Weekly and Monthly full site backups, stored in three different locations. This is great practice when it comes to backups and it means that we can restore your site to a previous version if required for whatever reason.
        </p>
        <p>
          Also included in our Lite and Advanced hosting packages is access to our Site Control Panel, powered by ISPConfig - a leading hosting administration control panel. This allows you to manage your web hosting; email accounts; and your domain names all in one place without having to contact us. Just let us know and we can provide a login.
        </p>
        <p>
          Due to the stable and flexible Linux base of our servers, if you need anything more than simple PHP, apache based hosting it almost definitely can be done. Just get in touch with us with your requirements and we can arrange setting it up for you.
        </p>
      </div>
    </section>

    <section className="content">
      <div className="contain">
        <div className="cta">
          <div className="cta-col">
            <Link href="/about/contact">
              <a className="cta-btn">Get in touch for a proposal</a>
            </Link>
          </div>
          <div className="cta-col">
            <a className="cta-btn" href="https://servers.accudiouptime.com">View server uptime</a>
          </div>
        </div>

      </div>
    </section>
  </Layout>
)