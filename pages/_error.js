import Layout from '../components/Layout_Default.js'
import Head from 'next/head'

export default class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      400: {
        title: 'Bad Request',
        desc: 'It seems there was something wrong with the request sent to us by your browser.<br />This is an issue with your browser, try refresh the page or restart.'
      },
      403: {
        title: 'Access Denied',
        desc: 'You don\'t have permission to access this resource, if you believe this to be in error let us know at <a href="mailto:info@accudio.com">info@accudio.com</a>!'
      },
      404: {
        title: 'Page Not Found',
        desc: 'The page you are looking for cannot be found! Sorry!<br />Use the menu above to find you way back or contact us at <a href="mailto:info@accudio.com">info@accudio.com</a> if this is a mistake!'
      },
      500: {
        title: 'Server Error',
        desc: 'You seem to have encountered a Server Error!<br />Don\'t worry, this isn\'t your fault, and we\'ll try to get it sorted as soon as possible!'
      }
    }
  }

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const title = 'Error '+this.props.statusCode+' — '+this.state[this.props.statusCode].title
    const description = this.state[this.props.statusCode].desc
    return (
      <Layout header="titlebar" title={title} description={description} id="error">
        <Head>
          <title key="title">{this.props.statusCode} - Accudio Web Services</title>
        </Head>
      </Layout>
    )
  }
}



// export default class Error extends React.Component {
//   static getInitialProps({ res, err }) {
//     const statusCode = res ? res.statusCode : err ? err.statusCode : null;
//     return { statusCode }
//   }

//   render() {
//     return (
//       <p>
//         {this.props.statusCode
//           ? `An error ${this.props.statusCode} occurred on server`
//           : 'An error occurred on client'}
//       </p>
//     )
//   }
// }