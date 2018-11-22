import Layout from '../components/Layout_Default.js'
import Head from 'next/head'
import '../components/Fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <Layout header="hero" id="/">

    <section className="lead">
      <div className="contain">
        <h3>Accudio Website Design and services</h3>
        <p className="lead">We are a web design, development, and hosting agency located in the Highlands of Scotland based in the Strathspey area and the Isle of Skye. We create a variety of sites that look great however you view them.</p>
        <div className="features">
          <div className="feature">
            <FontAwesomeIcon icon="mobile-alt" size="8x" transform="shrink-6" mask={['fas', 'circle']} />
            <h4>Web Design and Development</h4>
            <p>We design and build sites to fit exactly what you and your customers need, so it&#39;s easy to manage and a pleasure to view.</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon="cloud" size="8x" transform="shrink-8" mask={['fas', 'circle']} />
            <h4>Managed Web Hosting</h4>
            <p>To take the stress and hassle out of hosting your site, we offer extremely versatile managed web hosting at great value!</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon="pencil-alt" size="8x" transform="shrink-8" mask={['fas', 'circle']} />
            <h4>Graphic Design and Copy</h4>
            <p>We can also design logos, marketing materials or copywrite your site to attract as many visitors as possible.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="why-us">
      <div className="contain">
        <h4>Why Accudio?</h4>
        <ul>
          <li>
            <div className="icon">
              <FontAwesomeIcon icon="mobile-alt" />
            </div>
            <h5>Mobile-first Design</h5>
            <p>We focus on mobile-first design, and adapt that to desktop use. This means your site visitors will get a great experience on both.</p>
          </li>
          <li>
            <div className="icon">
              <FontAwesomeIcon icon="handshake" />
            </div>
            <h5>Tailored to you</h5>
            <p>We build your site tailored to you and your visitors, so it&#39;s as effective as possible in both look and functionality.</p>
          </li>
          <li>
            <div className="icon">
              <FontAwesomeIcon icon="bicycle" />
            </div>
            <h5>Static and Simple Sites</h5>
            <p>If you just need a simple informative site theres no need for a complicated CMS. We do great static HTML and CSS websites!</p>
          </li>
          <li>
            <div className="icon">
              <FontAwesomeIcon icon="rocket" transform="left-1 down-1" />
            </div>
            <h5>Dynamic and Advanced Sites</h5>
            <p>We can also do advanced dynamic sites based on a CMS, including ecommerce, booking systems and more.</p>
          </li>
          <li>
            <div className="icon">
              <FontAwesomeIcon icon="expand-arrows-alt" />
            </div>
            <h5>Unrivalled Flexibility</h5>
            <p>As we can offer anything from HTML sites to ecommerce, we are very flexible, more than many other design agencies.</p>
          </li>
          <li>
            <div className="icon">
              <FontAwesomeIcon icon={['far', 'thumbs-up']} />
            </div>
            <h5>Constant Involvement</h5>
            <p>Keeping you in the loop throughout means we can get the site you want and will be most effective easily and quickly.</p>
          </li>
        </ul>
      </div>
    </section>

    <section className="vision">
      <div className="contain">
        <div className="text">
          <h2>Our Vision</h2>
          <p className="lead">Many agencies overcomplicate web design and hosting.</p>
          <p>If you were popping to the shops you wouldn&#39;t use your 20-wheeled truck, you&#39;d use your car or bike. However, if you were transporting cargo thousands of miles, your bike may not cut it! This is why Accudio offers multiple options when it comes to websites, so we can use the right tool for the job.</p>
          <p>We start with a free consultation meeting;&nbsp;phone call; or email. Here we can work out what you need, how we would proceed with building your site, and give you an initial quote and timescale.</p>
          <p>If required, we come up with a design mockup, followed by a draft site. With feedback from you and any additional requirements, we finish building your site, fill it with your desired text and images and make it live!</p>
        </div>
        <div className="image">
          <img src="/static/img/accudiophone.png" alt="Accudio website on a mobile phone" />
        </div>
      </div>
    </section>

  </Layout>
)