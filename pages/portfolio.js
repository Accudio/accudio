import Layout from '../components/Layout_Default.js'
import Head from 'next/head'
import SimpleBar from 'simplebar'

if(typeof window !== 'undefined') {
  require(['lightgallery.js'], function() {
    require(['lg-zoom.js', 'lg-fullscreen.js', 'lg-hash.js', 'lg-share.js'], function(){
      lightGallery(document.getElementById('lightgallery'))
    })
  })
  Array.from(document.querySelectorAll('.cap-inner')).forEach((el) => {
    new SimpleBar(el, {
      autoHide: false,
      timeout: 3000
    });
  })
}

const description = "We have worked on a large range of websites and for many clients, this a sample of some of our most recent work!"

export default () => (
  <Layout header="titlebar" title="Portfolio" description={description} id="portfolio">
    <Head>
      <title key="title">Portfolio - Accudio Web Services</title>
      <link href="https://cdn.jsdelivr.net/npm/lightgallery.js@1.1.1/dist/css/lightgallery.css" rel="stylesheet" />
    </Head>

    <section className="portfolio">

      <div className="captions">
        <div id="activespirit-cap">
          <div className="cap-inner">
            <h2>Active Spirit</h2>
            <p>
              In October 2018 Tracey and Ian Pullen contacted me regardging the website for their outdoor activity company, Active Spirit. As they were a small business, they offered very tailored experiences for all ages, abilities and walks of life. Their previous website, although very informative, featured a dated early-00s design, and did not support mobile devices at all, something that needed sorely addressed in order to attract customers online.
            </p>
            <p>
              As they already had good content, and a good idea for what they were looking for, I made a modern, fully-responsive design inspired by the colours and content used on the old website. This was turned into a bespoke WordPress theme for a great looking brochure-style website. At the same time, we decided it would be best to move their blog from their previously functional but clunky Blogspot to the blogging system built into WordPress. Thanks for the import functionality of WordPress, it was extremely easy to bring across all of their old posts, and give them a fresh look and allow for people to look through them more easily.
            </p>
            <p>
              The website went live in mid January 2019, and has already made a significant impact on their search ranking (without extensive SEO) and on their conversions.
            </p>
          </div>
          <a className="ext-url" href="https://activespirit.co.uk">Visit Website</a>
        </div>
        <div id="capperkirk-cap">
          <div className="cap-inner">
            <h2>Capperkirk</h2>
            <p>
              In August 2018 I was approached by Heather Haywood, a holiday home owner with a desire to offer a website showing off their beautiful renovated church in the Scottish Borders as self-catered accommodation. We also established that a simple booking system would be great as it would make it a lot easier for people to book online quickly and without any difficulty.
            </p>
            <p>
              As this was a brand new website, we worked out a specification and design that really showed off the best of Capperkirk, and it was a joy to work with their numerous and beautiful photos of the church and the surrounding area. 
            </p>
            <p>
              The website was built as a bespoke WordPress theme, using easyReservations as a booking platform. Although there were some teething issues to begin with, the easyReservations developer was extremely quick at solving any problems we had.
            </p>
            <p>
              The website went live in mid January 2019.
            </p>
          </div>
          <a className="ext-url" href="https://capperkirk.scot">Visit Website</a>
        </div>
        <div id="carrbridge-cap">
          <div className="cap-inner">
            <h2>Carrbridge</h2>
            <p>
              In late 2017 Carrbridge Community Council were looking for a contractor or company to build a new version of the community website carrbridge.com, and to administrate and maintain it when completed. My experience in working with and building modern websites for a variety of businesses and my efficiency and value was attractive to the project team and we started work in May 2018.
            </p>
            <p>
              Their main requirements were to update the website to be responsive and more mobile-friendly, and to address the stability issues the previous website occasionally suffered from. Additionally, a large part of the website content was information about local businesses and organisations, and the Community Council wanted to investigate a way for business owners to log in and update this information themselves.
            </p>
            <p>
              I built their new website based on WordPress and a highly customised theme, allowing for a modern look, greatly improved mobile experience, while maintaining access to the significant number of visitors using legacy browser and operating systems. I built a Wordpress business listings plugin, making editing business and organisation listings extremely easy by admins and by individual business owners.
            </p>
            <p>
              The new website went live in August 2018, and has significantly increased mobile visitors, has had really positive feedback, and through being moved to Accudio hosting suffers from none of the previous stability issues.
            </p>
          </div>
          <a className="ext-url" href="https://carrbridge.com">Visit Website</a>
        </div>
        <div id="carvecarrbridge-cap">
          <div className="cap-inner">
            <h2>Carve Carrbridge</h2>
            <p>
              Developed in tandem with goldenspurtle.com, Carrbridge Ahead Ltd wanted to update an extremely dated website that was rarely used, and came to me after I was selected for the development of carrbridge.com.
            </p>
            <p>
              The existing website was built in 2006 using WordPress, and although technically sound, neither the theme nor the content had been updated much since then. As the Carve Carrbridge event continues to grow in publicity they wanted a website with an updated look, more interactive content and the ability for event co-ordinators to log in and edit the website themselves.
            </p>
            <p>
              I built a bespoke WordPress Theme including Advanced Custom Fields so I could maintain art direction, general design, and build features and design exactly how we wanted without compromising editability.
            </p>
            <p>
              The new website went live late July 2018, shortly before the event, and quickly became a great resource to organisers, carvers, stall owners, and to the general public.
            </p>
          </div>
          <a className="ext-url" href="https://carvecarrbridge.com">Visit Website</a>
        </div>
        <div id="goldenspurtle-cap">
          <div className="cap-inner">
            <h2>Golden Spurtle</h2>
            <p>
              Developed in tandem with carvecarrbridge.com, Carrbridge Ahead Ltd wanted to update a slightly dated website that was difficult to manage, and came to me after I was selected for the development of carrbridge.com.
            </p>
            <p>
              The existing website was built in 2012 by a local design agency, and although it did the job, did not feature new brand colours and design, could have a significantly improved mobile experience, and was clunky and difficult for the event co-ordinator to manage. As The World Porridge Making Championships continues to grow in reach and media attention, Carrbridge Ahead felt the website needed a significant refresh in design, usability and SEO.
            </p>
            <p>
              I built a bespoke WordPress Theme including Advanced Custom Fields so I could maintain art direction, general design, and build features and design exactly how we wanted without compromising editability.
            </p>
            <p>
              The new website went live late July 2018, with plenty of time before the even in October, and now features regular updates of recipes, and has a more varied, international, and consistent visitor base.
            </p>
          </div>
          <a className="ext-url" href="https://goldenspurtle.com">Visit Website</a>
        </div>
        <div id="accudio-cap">
          <div className="cap-inner">
            <h2>Accudio</h2>
            <p>
              In early June 2017, when I was looking to expand Accudio from a small occasional enterprise into a full-time business I decided I wanted to update my website at the same time. I started going about how I wanted to build the site, and also used it as an opportunity to explore different CSS frameworks and CMS softwares. At this time, I built a new website using the Content Management System Subrion. As much as Subrion served me well for a year and a half, in November 2018 I decided that in fact a full Content Management System was unnecessary, and converted it to a Next.js, a Static Site Generator based on React.
            </p>
            <p>
              As public web development moves away from monolithic server stacks and CMS’, I felt that I should reflect that in my website. Moving to a highly performant JavaScript framework and a more dynamic git-based workflow allows me to offer a lighter website with additional features, less code duplication, and CDN distribution.
            </p>
            <p>
              I’d also like to thank James Gordon Photography for kindly allowing me to use his photos in the background to show off the website.
            </p>
          </div>
          <a className="ext-url" href="https://accudio.com">Visit Website</a>
        </div>
        <div id="alistairshepherd-cap">
          <div className="cap-inner">
            <h2>Alistair Shepherd</h2>
            <p>
              Although Accudio is the brand I offer my services under, in May 2018 I felt it would be beneficial to also have a web presence for myself, particularly when working with companies looking to work with an individual. As this website did not need as much raw information, I really focused on a creative artistic design, and went through many iterations before coming to where I did.
            </p>
            <p>
              The website is built using the JavaScript Static Site Generator Nuxt.js, based on Vue.js. I really like using Vue for front-end work due to its accessibility, great code structure, and how portable it can be compared to more monolithic stacks. Using a highly performant JavaScript framework has allowed me to offer great dynamic interaction and effects, client-side routing that looks great, while remaining lightweight and performant through distribution over a CDN.
            </p>
          </div>
          <a className="ext-url" href="https://alistairshepherd.uk">Visit Website</a>
        </div>
        <div id="lochmorlich-cap">
          <div className="cap-inner">
            <h2>Loch Morlich Watersports</h2>
            <p>
              Keith Taylor, Owner of Loch Morlich Watersports, got in touch with me to fix errors occurring on his website and to integrate an online booking system for watersports lessons. However, when we met to discuss fixing the issues, we found his website was extremely outdated—both in technology and design—unreasonably slow, and inaccessible to mobile users.
            </p>
            <p>
              I proposed building him a brand-new responsive website that would work with his existing web hosting and allow him to manage the content online. I built a site based on Bootstrap and including a lightweight admin panel so the Loch Morlich team can make changes themselves.
            </p>
            <p>
              I also integrated an external booking system using BookingHound due to its ease of use for staff and the advantages of having an external company dealing with customer data and payment details.
            </p>
            <p>
              The site went live in the latter part of July 2017, and has converted significantly more website visitors to bookings - both online and offline - than its predecessor.
            </p>
          </div>
          <a className="ext-url" href="http://lochmorlich.com">Visit Website</a>
        </div>
        <div id="upandbeyond-cap">
          <div className="cap-inner">
            <h2>Up and Beyond Adventures</h2>
            <p>
              Up and Beyond Adventures is a venture set up by Adrian Shepherd, outdoor instructor and guide. He offers personal and tailored coaching, instruction, group leading and anything else that can be done on a cliff, on a hill or down a river!
            </p>
            <p>
              He contacted me in July 2018 in order to set up a simple, brochure-style website that sold his business, what he did, and allowed people to contact him. I built him a bespoke WordPress theme that is fully responsive and makes for an interesting and pleasant experience. WordPress with Advanced Custom Fields was ideal for letting him edit text and images on the website himself, and for quickly establishing a solid online presence.
            </p>
          </div>
          <a className="ext-url" href="https://upandbeyondadventures.co.uk">Visit Website</a>
        </div>
        <div id="caledon-cap">
          <div className="cap-inner">
            <h2>Caledon Photo Art</h2>
            <p>
              Stewart Potter contacted me having seen other websites I had worked on looking for a simple website to show off his artwork to all users and devices
            </p>
            <p>
               As an artist, he had an idea of the design he was looking for, so we worked together to bring that to life.  We used a stripped-down Bootstrap 4 to save development time and costs, and built a static website with a simple, light design. This is perfect for really showing off the colours of his paintings without taking away from the experience.
            </p>
            <p>
              As he wanted to update the website fairly infrequently, we set it up as a simple, static website that I can edit for him, which allows him to focus on the painting!
            </p>
          </div>
          <a className="ext-url" href="https://stewartpotter.co.uk">Visit Website</a>
        </div>
        <div id="amber-cap">
          <div className="cap-inner">
            <h2>Amber Home of Colour</h2>
            <p>
              Amber Home of Colour was established in the summer of 2017 as a business sourcing and selling colourful and vibrant homewares from individuals internationally, allowing people in the UK to purchase bedspreads, scarves, jewellery and more from sellers in India, New Zealand, and many more. The store opened in late September 2017 in Seaton, Devon and has been satisfying customers with a wide range of products since.
            </p>
            <p>
              At this time the company approached me to look at the possibility of expanding their sales online, allowing individuals outside of the local area to browse and buy products through an ecommerce solution. We came to the conclusion that for many of the less fragile items it would be greatly beneficial to the company and to its customers and started working on a website and associated online shop.
            </p>
            <p>
              Wordpress was chosen as the Content Management System used due to its flexibility, ease of use for non-IT professionals and compatibility with Woocommerce, the ideal ecommerce solution for the proposed online shop.
            </p>
            <p>
              The site launched in February 2018 with a full range of products and features, and has been successful in increasing the public profile of Amber Home of Colour, both locally and nationally, and positively impacting sales figures.
            </p>
          </div>
          <a className="ext-url" href="https://amberhomeofcolour.co.uk">Visit Website</a>
        </div>
        <div id="glenmorebikes-cap">
          <div className="cap-inner">
            <h2>Glenmore Bikes</h2>
            <p>
              Pete Bates had a website for his Mountain Bike rental business that was set up in 2002. Despite surprising me over how stable it has been over the years it just did not cut it when it came to modern design and usability! As he was moving from a fixed-base to a mobile delivery-based service he wanted a simple website that presented information about his bikes, the local area, prices, and allowed people to contact him.
            </p>
            <p>
              I built a simple single-page website using Bootstrap 4 to present information for visitors and his contact details, that would allow people to find him online more easily, and he could provide to people for more details. As he wanted to be able to change text and images but was concerned about getting it wrong, I integrated SiteCake - a great PHP-based site editor that I could heavily restrict so he could manage content extremely easily.
            </p>
            <p>
              As a simple website on the same hosting he’s had for years, it will continue to serve him well!
            </p>
          </div>
          <a className="ext-url" href="http://glenmorebikes.co.uk">Visit Website</a>
        </div>
        <div id="the1896gallery-cap">
          <div className="cap-inner">
            <h2>1896 Gallery and Coffee Shop</h2>
            <p>
              I was contacted by James Gordon—one of the owners of The 1896 Gallery and Coffee Shop—through my Facebook page, enquiring about a lightweight website for the coffee shop. They had intended to have a website built shortly after their launch in 2015, however never found a developer they wanted to use and didn't get around to searching for one until they found Accudio.
            </p>
            <p>
              I was more than happy to help out, and had a phone consultation resulting in a plan for a static, lightweight website that could be hosted on existing web hosting, was responsive, designed around the coffee shop's already existing colour scheme and importantly was fully responsive, supporting mobile users. The website is very much focused around the images, with only small amounts of text to accompany them.
            </p>
            <p>
              Bootstrap 3 was chosen as it allowed me to build a responsive, great looking design fairly quickly and without many overheads. So the website would not require constant maintenance, the site gallery is integrated with the Facebook page allowing for uploaded images to be displayed on the website, and we designed and built a dynamic opening times widget for the header of the site so visitors would always know whether the gallery was open and if not when it would next.
            </p>
          </div>
          <a className="ext-url" href="https://1896gallery.com">Visit Website</a>
        </div>
      </div>

      <div className="contain" id="lightgallery">

        <div className="p-outer" data-src="/static/portfolio/activespirit.jpg" data-sub-html="#activespirit-cap">
          <a className="p-wrap" href="/static/portfolio/activespirit.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5)), url(/static/portfolio/activespirit-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Active Spirit</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/capperkirk.jpg" data-sub-html="#capperkirk-cap">
          <a className="p-wrap" href="/static/portfolio/capperkirk.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5)), url(/static/portfolio/capperkirk-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Capperkirk</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/carrbridge.jpg" data-sub-html="#carrbridge-cap">
          <a className="p-wrap" href="/static/portfolio/carrbridge.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5)), url(/static/portfolio/carrbridge-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Carrbridge</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/carvecarrbridge.jpg" data-sub-html="#carvecarrbridge-cap">
          <a className="p-wrap" href="/static/portfolio/carvecarrbridge.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/static/portfolio/carvecarrbridge-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Carve Carrbridge</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/goldenspurtle.jpg" data-sub-html="#goldenspurtle-cap">
          <a className="p-wrap" href="/static/portfolio/goldenspurtle.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/static/portfolio/goldenspurtle-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Golden Spurtle</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/accudio.jpg" data-sub-html="#accudio-cap">
          <a className="p-wrap" href="/static/portfolio/accudio.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/static/portfolio/accudio-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Accudio</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/alistairshepherd.jpg" data-sub-html="#alistairshepherd-cap">
          <a className="p-wrap" href="/static/portfolio/alistairshepherd.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.5)), url(/static/portfolio/alistairshepherd-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Alistair Shepherd</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/lochmorlich.jpg" data-sub-html="#lochmorlich-cap">
          <a className="p-wrap" href="/static/portfolio/lochmorlich.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/static/portfolio/lochmorlich-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Loch Morlich Watersports</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/upandbeyond.jpg" data-sub-html="#upandbeyond-cap">
          <a className="p-wrap" href="/static/portfolio/upandbeyond.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5)), url(/static/portfolio/upandbeyond-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Up and Beyond Adventures</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/stewartpotter.jpg" data-sub-html="#caledon-cap">
          <a className="p-wrap" href="/static/portfolio/stewartpotter.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/static/portfolio/stewartpotter-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Caledon Photo Art</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/amberhomeofcolour.jpg" data-sub-html="#amber-cap">
          <a className="p-wrap" href="/static/portfolio/amberhomeofcolour.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.6)), url(/static/portfolio/amberhomeofcolour-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Amber Home of Colour</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/glenmorebikes.jpg" data-sub-html="#glenmorebikes-cap">
          <a className="p-wrap" href="/static/portfolio/glenmorebikes.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.6)), url(/static/portfolio/glenmorebikes-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>Glenmore Bikes</h2>
            </div>
          </a>
        </div>

        <div className="p-outer" data-src="/static/portfolio/1896gallery.jpg" data-sub-html="#the1896gallery-cap">
          <a className="p-wrap" href="/static/portfolio/1896gallery.jpg" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.6)), url(/static/portfolio/1896gallery-thumb.jpg)'}}>
            <div className="p-inner">
              <h2>1896 Gallery and Coffee Shop</h2>
            </div>
          </a>
        </div>

      </div>
    </section>
  </Layout>
)