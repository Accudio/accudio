import Layout from '../../components/Layout_Default.js'
import Head from 'next/head'
import Link from 'next/link'

const description = "We offer a range of fully bespoke website options personalised to exactly your requirements!"

export default () => (
  <Layout header="titlebar" title="Website Design and Development" description={description} id="services/web">
    <Head>
      <title key="title">Website Design and Development - Accudio Web Services</title>
    </Head>

    <section className="content">
      <div className="contain">
        <h2>Flexible, fully-responsive website design</h2>
        <p>
          Accudio designs and builds websites for businesses and individuals across Scotland, prioritising a superb responsive mobile experience, a smooth professional experience for the end user, and great performance.
        </p>
        <p>
          Particularly in Scotland's tourism industry, up to 70% of your site's visitors could be on a mobile device. We make sure your website is as easy as possible to navigate for all. And as we are experienced in a variety of web softwares, technologies and principles, we can build your website in the best possible solution saving time and money, while making sure both you and your site visitors find it as easy and pleasent as possible to use.
        </p>
        <p>
          The main priority we have when working with you is how to best sell your products or services. This is why we like to involve you as much as possible when designing, so we can show what you have in the best possible light.
        </p>
      </div>
    </section>

    <section className="content">
      <div className="contain">
        <h2>Technologies</h2>

        <h4>Simple HTML Sites</h4>
        <p>
          For small businesses or individuals with a website that doesn't often need updating, a Content Management System like most website development companies offer may be over the top and unnecessary. This is why we offer the option for a simple website that a developer updates, but can be produced quicker and cheaper than a Content Management System.
        </p>

        <h4>WordPress</h4>
        <p>
          Most of our websites are built using bespoke WordPress themes. This means we design your website from scratch to ensure it fits your needs perfectly, and then bring that design to life. Wordpress can be great for a variety of websites, allowing us to set up a website with a well-known and easy to use admin panel.
        </p>
        
        <h4>Modern JavaScript Development</h4>
        <p>
          For more advanced websites with lots of dynamic functionality, a modern JavaScript library like React and Vue.js can allow greater flexibility, functionality, and still be lightweight and highly performant. If you don't need backend functionality like online shopping or booking then this can be a perfect solution, admin panel included.
        </p>
      </div>
    </section>

    <section className="content">
      <div className="contain">
        <h2>Simple, brochure-style websites</h2>
        <p>
          For a small business or individual we can get you set up with a online presence and a smart website exactly how you like! This is perfect for selling yourself online with great photos, a simple but stunning design, and turning website visits into people walking through the door!
        </p>
        <div className="website-summary">
          <div className="w-outer">
            <Link href="/portfolio#lg=1&slide=4">
              <a className="w-wrap" style={{backgroundImage: 'url(/static/portfolio/alistairshepherd-thumb.jpg)'}}>
                <h5>Alistair Shepherd</h5>
              </a>
            </Link>
          </div>

          <div className="w-outer">
            <Link href="/portfolio#lg=1&slide=7">
              <a className="w-wrap" style={{backgroundImage: 'url(/static/portfolio/stewartpotter-thumb.jpg)'}}>
                <h5>Caledon Photo Art</h5>
              </a>
            </Link>
          </div>

          <div className="w-outer">
            <Link href="/portfolio#lg=1&slide=9">
              <a className="w-wrap" style={{backgroundImage: 'url(/static/portfolio/glenmorebikes-thumb.jpg)'}}>
                <h5>Glenmore Bikes</h5>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="content">
      <div className="contain">
        <h2>Advanced websites and online shops</h2>
        <p>
          Larger businesses and organisations may need more advanced features like an online shop, booking system, or business listings. We carefully consider the best way to implement advanced features depending on the platform and if existing solutions are available. If not, we can implement a bespoke 'plugin' or 'extension' to fulfil your requirements!
        </p>
        <div className="website-summary">
          <div className="w-outer">
            <Link href="/portfolio#lg=1&slide=0">
              <a className="w-wrap" style={{backgroundImage: 'url(/static/portfolio/carrbridge-thumb.jpg)'}}>
                <h5>Carrbridge</h5>
              </a>
            </Link>
          </div>

          <div className="w-outer">
            <Link href="/portfolio#lg=1&slide=5">
              <a className="w-wrap" style={{backgroundImage: 'url(/static/portfolio/lochmorlich-thumb.jpg)'}}>
                <h5>Loch Morlich</h5>
              </a>
            </Link>
          </div>

          <div className="w-outer">
            <Link href="/portfolio#lg=1&slide=8">
              <a className="w-wrap" style={{backgroundImage: 'url(/static/portfolio/amberhomeofcolour-thumb.jpg)'}}>
                <h5>Amber Home of Colour</h5>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="content">
      <div className="contain">
        <h2>The details</h2>

        <h4>Estimated Price</h4>
        <p>
          The cost of all of our websites are estimated on a case-by-case basis, however we can give you an idea of the rough costs involved:
        </p>
        <p>
          For full-website projects we have a fixed-estimate structure, which means when a specification is agreed, we give you a price based on the work it will require, and that is the amount you will pay. As long as you don't decide to significantly increase the scope of the project after starting, this means that if the project takes longer for some reason, you don't end up with a larger bill than you expected.
        </p>

        <h4>What's Included</h4>
        <ul>
          <li>
            A bespoke, responsive website design
          </li>
          <li>
            Hand-coded website built in modern website languages and technologies
          </li>
          <li>
            Mocks and prototypes so we can get it just right
          </li>
          <li>
            Content Management System or admin panel integration
          </li>
          <li>
            Step-by-step pictorial documentation on project completion
          </li>
          <li>
            Basic SEO (Search Engine Optimisation), submission to search engines, and social media optimisation
          </li>
        </ul>

        <h4>Extras</h4>
        <ul>
          <li>
            Managed Website Hosting *
          </li>
          <li>
            Support, administration, and website management *
          </li>
          <li>
            Domain names registration, renewal, and management *
          </li>
          <li>
            Email hosting and set-up *
          </li>
          <li>
            Training sessions or updated/extended documentation
          </li>
          <li>
            Ongoing Search Engine Optimisation
          </li>
        </ul>
        * See more details on our <Link href="/services/hosting"><a>Hosting services</a></Link> page
      </div>
    </section>

    <section className="content">
      <div className="contain">
        <h2>What's next?</h2>
        <p>
          If you're interested in a proposal, or would just like some more information, get in <Link href="/about/contact"><a>touch</a></Link>! Where possible I like to start a project with an initial meeting to offer a proposal, to ask some questions to establish what you're looking for, and to answer any questions or requests you have for me before we get started. I would then follow up with a more formal proposal and quote and we can get started!
        </p>
      </div>
    </section>

    <section className="content">
      <div className="contain">
        <div className="cta">
          <div className="cta-col">
            <Link href="/portfolio">
              <a className="cta-btn">View Website Portfolio</a>
            </Link>
          </div>
          <div className="cta-col">
            <Link href="/about/contact">
              <a className="cta-btn">Get in touch for a proposal</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)