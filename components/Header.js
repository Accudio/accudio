import '../components/Fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (props) => {
  const type = props.type
  return (
    <header className={type}>
      { type == 'hero' &&
        <div className="teaser">
          <div className="contain">
            <h1>Boost your business<br/>
            with a <span className="text-primary">new website</span></h1>
            <h2>Modern sites for all<br/>
            devices from Accudio</h2>
          </div>
        </div>
      }
      { type == 'titlebar' &&
        <div className="contain">
          <h1>{props.title}</h1>
          <div className="subtitle" dangerouslySetInnerHTML={{__html: props.description}}></div>
        </div>
      }
      { type == 'about' &&
        <div className="contain">
          <img src="https://accudio.com/uploads/alistairshepherd.jpg" alt="Alistair Shepherd, developer at Accudio" />
          <h1>{props.title}</h1>
          <div className="subtitle">
            {props.description}
          </div>
          <ul>
            <li>
              <a href="https://facebook.com/accudio" aria-label="Accudio Facebook Page">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/accudio" aria-label="Alistair's Twitter">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/accudio" aria-label="Alistair's Instagram">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/alistairjshepherd" aria-label="Alistair's LinkedIn">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </a>
            </li>
            <li>
              <a href="https://github.com/accudio" aria-label="Alistair's GitHub">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
            <li>
              <a href="https://alistairshepherd.uk" aria-label="Alistair's Personal Website">
                <FontAwesomeIcon icon="link" />
              </a>
            </li>
            <li>
              <a href="mailto:alistair@accudio.com" aria-label="Alistair's Email Address">
                <FontAwesomeIcon icon="envelope" />
              </a>
            </li>
          </ul>
        </div>
      }
    </header>
  )
}

export default Header