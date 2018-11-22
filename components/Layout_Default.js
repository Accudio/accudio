import Topbar from './Topbar'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import FooterButtons from './FooterButtons'
import Head from 'next/head'
import "../styles/app.scss"


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('scroll', this.updateWindowDimensions);
    this.matomo();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({scrollY: window.scrollY});
  }

  matomo() {
    if(typeof window !== 'undefined') {
      var _paq = _paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="//analytics.accudio.com/";
        _paq.push(['setTrackerUrl', u+'piwik.php']);
        _paq.push(['setSiteId', '9']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
      })();
    }
  }

  render() {
    return (
      <div className={this.props.id}>

        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title key="title">Accudio Web Services</title>
          <meta name="description" content="Accudio is a web design, development, and hosting agency in the Highlands of Scotland. We create sites that look great however you view them" key="description" />
          <meta name="keywords" content="web design scotland, website design scotland" />

          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#80a2bc" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Accudio" />
          <meta name="application-name" content="Accudio" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="theme-color" content="#5e809a" />

          <meta property="og:title" content="Accudio Web Services" key="og-title" />
          <meta property="og:url" content="https://accudio.com/" key="og-url" />
          <meta property="og:description" content="Accudio is a web design, development, and hosting agency created by Alistair Shepherd, located in the Highlands of Scotland based in the Strathspey and the Isle of Skye. We create a variety of sites that look great however you view them." key="og-description" />
          <meta property="og:image" content="https://accudio.com/static/open-graph.jpg" key="og-image" />

          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />

          <style jsx global>{`
            .svg-inline--fa {
                max-width: 1em;
                max-height: 1em;
            }
          `}</style>

        </Head>

        <Topbar />
        <Nav id={this.props.id} scrollY={this.state.scrollY} />
        <Header type={this.props.header} title={this.props.title} description={this.props.description} />

        <main>
          {this.props.children}
        </main>

        <Footer />
        <FooterButtons scrollY={this.state.scrollY} />

      </div>
    )
  }
}

export default Layout