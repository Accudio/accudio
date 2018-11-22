import Layout from '../../components/Layout_Default.js'
import Head from 'next/head'

const description = "Web Developer, Graphic Designer & Server Administrator"

export default () => (
  <Layout header="about" title="Alistair Shepherd" description={description} id="about/accudio">
    <Head>
      <title key="title">About Accudio - Accudio Web Services</title>
    </Head>
    <section className="content">
      <div className="contain">
        <div className="col">
          <h2>Description</h2>
          <p>I am a web developer, graphic designer, server administrator and tech enthusiast in the Highlands of Scotland. I grew up near Aviemore in the Strathspey area, and due to that have a lot of experience in the outdoor industry. I've always been extremely interested in technology and design, and at the age of 11 I read a technology magazine with an introduction to web development. From then I loved teaching myself how to make websites, and haven't looked back. Since then I've improved my skills in both design and programming, and have had lots of experience building sites from simple HTML pages to full CMS booking systems.</p>
          <p>In 2017 I graduated from the University of Dundee with a Certificate for Higher Education in Physics to pursue a career in web design and development, and decided that the greatest impact I could have would be through offering personal, web design and development for local businesses as a freelancer, and being able to offer great sites and service at great value.</p>
        </div>
        <div className="col">
          <h2>Why I set up Accudio</h2>
          <p>Now more than ever, a great website for your business is vital. When most of your visitors and customers have the internet at their fingertips, you want to be as accessible as you can. With a great website it becomes very easy for customers to find important information, to purchase your products, book your rooms or activities.</p>
          <p>One thing many sites fall down at is mobile phone support. A badly designed site could be slow and difficult for mobile users to navigate which is why we work on a mobile-first philosophy. Particularly within the tourism industry, analysis I have made on previous websites suggests that over 65% of visits to your site could be from a smartphone or tablet so you need to ensure those visits become sales, bookings or visits.</p>
          <p>Although it is possible to get a website hosted and built by various companies online, what they can't offer is the ability to work with a person rather than a computer. I will manage everything to do with your site, so you know you are in safe hands. I can meet with you to discuss your requirement or for updates, and you can also contact me on my personal email and mobile phone number.</p>
          <p>I am also extremely flexible, whereas other companies will build all of their customers sites with one particular solution no matter the requirements, this will not work for every site. This is why I do a lot of research, experimentation and analysis to ensure the site is built specifically for your requirements. For example, if you need a simple info page for your business why use a bulky, slow system designed for sites with thousands of pages? Why use an eshop system for just a photo gallery? If it's right from the start it will always perform better than alternatives.</p>
        </div>
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
            <a className="cta-btn" href="https://alistairshepherd.uk">Visit my website</a>
          </div>
        </div>

      </div>
    </section>
  </Layout>
)