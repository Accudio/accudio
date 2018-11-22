import '../components/Fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Topbar = () => (
  <div className="topbar">
    <div className="contain">
      <ul>
        <li>
          <a className="twitter" href="https://twitter.com/accudio/" aria-label="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        </li>
        <li>
          <a className="facebook" href="https://facebook.com/accudio/" aria-label="Facebook"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
        </li>
        <li>
          <a className="linkedin" href="https://www.linkedin.com/company/accudio/" aria-label="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
        </li>
        <li>
          <a className="github" href="https://github.com/Accudio/" aria-label="GitHub"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        </li>
        <li>
          <a className="email" href="mailto:info@accudio.com" aria-label="Email Address"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
        </li>
      </ul>
    </div>
  </div>
)

export default Topbar