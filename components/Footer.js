import Link from 'next/link'
import '../components/Fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <footer>
    <div className="footer-blocks">
      <div className="contain">
        <div className="block">
          <h6>About our Hosting</h6>
          <div className="content">
            <p>Our hosting is based on Linux powered Virtual Servers in North Europe. As we manage them, we are very flexible so can offer more features than our competitors.</p>
          </div>
        </div>
        <div className="block">
          <h6>About our Websites</h6>
          <div className="content">
            <p>Our websites are built to order but depending on requirements are generally based on HTML5/CSS3, RespondCMS, Wordpress, or Subrion.</p>
          </div>
        </div>
        <div className="block">
          <h6>About Us</h6>
          <div className="content">
            <p>Accudio is run by Alistair Shepherd, a web developer and graphic designer wanting to get the businesses of Scotland looking great online.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bar">
      <div className="contain">
        <ul className="footer-social">
          <li>
            <a href="https://twitter.com/accudio/" aria-label="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          </li>
          <li>
            <a href="https://facebook.com/accudio/" aria-label="Facebook"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/accudio/" aria-label="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
          </li>
          <li>
            <a href="https://github.com/Aaccudio/" aria-label="GitHub"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          </li>
          <li>
            <a href="mailto:info@accudio.com" aria-label="Email Address"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
          </li>
        </ul>
        <div className="copy">
          <span>&copy; 2019 Website designed and created by <Link href="/"><a>Accudio</a></Link> &mdash; <Link href="/privacy-policy"><a>Privacy&nbsp;Policy</a></Link></span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer