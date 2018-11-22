import Link from 'next/link'
import '../components/Fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  render() {
    let navHeight = (this.nav.current) ? this.nav.current.offsetHeight : 0;
    return (
      <div className="navigation" style={{minHeight: navHeight}}>
        <nav className={(this.props.scrollY > 55 ? 'sticky' : '' )} ref={this.nav}>
          <div className="contain">

            <input id="burger" className="burger-checkbox" type="checkbox" />

            <div className="navbar-header">

              <label htmlFor="burger">
                <div className="burger-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </label>

              <Link prefetch href="/">
                <a className="head-logo"><img alt="Accudio - Web Design and Development" src="/static/img/accudio-logo.svg" /></a>
              </Link>
            </div>

            <div className="navbar">
              <ul>
                <li>
                  <Link prefetch href="/">
                    <a className={(this.props.id === '/' ? 'active' : '')}>Home</a>
                  </Link>
                </li>
                <li>
                  <input id="nav-services" className="nav-submenu" type="checkbox" />

                  <label htmlFor="nav-services" className={(this.props.id.split("/")[0] === 'services' ? 'active' : '')}>
                    Services<FontAwesomeIcon icon={['fas', 'caret-down']} />
                  </label>

                  <ul>
                    <li>
                      <Link prefetch href="/services/web">
                        <a className={(this.props.id === 'services/web' ? 'active' : '')}>Web Design and Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link prefetch href="/services/hosting">
                        <a className={(this.props.id === 'services/hosting' ? 'active' : '')}>Hosting and Administration</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link prefetch href="/portfolio">
                    <a className={(this.props.id === 'portfolio' ? 'active' : '')}>Portfolio</a>
                  </Link>
                </li>
                <li>
                  <input id="nav-about" className="nav-submenu" type="checkbox" />

                  <label htmlFor="nav-about" className={(this.props.id.split("/")[0] === 'about' ? 'active' : '')}>
                    About<FontAwesomeIcon icon={['fas', 'caret-down']} />
                  </label>

                  <ul>
                    <li>
                      <Link prefetch href="/about/accudio">
                        <a className={(this.props.id === 'about/accudio' ? 'active' : '')}>About Accudio</a>
                      </Link>
                    </li>
                    <li>
                      <Link prefetch href="/about/contact">
                        <a className={(this.props.id === 'about/contact' ? 'active' : '')}>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
