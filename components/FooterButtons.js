import '../components/Fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function scrollToTop(scrollDuration) {
  var cosParameter = window.scrollY / 2,
    scrollCount = 0,
    oldTimestamp = performance.now();
  function step(newTimestamp) {
    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) window.scrollTo(0, 0);
    if (window.scrollY === 0) return;
    window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

class FooterButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  toTop = (el) => {
    scrollToTop(200);
    el.preventDefault()
  }

  render() {
    return (
      <div className="footer-buttons">
        <a className="back-to-top" href="#" aria-label="Back to top of page" onClick={this.toTop} style={{opacity: (this.props.scrollY < 400 ? 0 : 1 )}}><FontAwesomeIcon icon={['fas', 'angle-double-up']} /></a>
      </div>
    )
  }
}

export default FooterButtons