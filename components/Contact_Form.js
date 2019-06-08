import Link from 'next/link'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: false,
        email: false,
        message: false,
        privacy: false
      },
      form: {
        name: '',
        email: '',
        message: ''
      },
      validated: false,
      message: ''
    };
    this.form = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({'form-name': 'accudio-contact', ...this.state.form})
    }).then(() => {
      this.message = 'Thanks! I\'ll get back to you as soon as I can!'
    }).catch((error) => {
      this.message = 'It appears there was an error in submitting the form. Please try again later'
    });
    this.setState({ validated: true });
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleFocus = (el) => {
    let fields = Object.assign({}, this.state.fields);
    fields[el.target.name] = true;
    this.setState({fields: fields});
  }

  handleChange = (el) => {
    let form = Object.assign({}, this.state.form);
    form[el.target.name] = el.target.value;
    this.setState({form: form});
  }

  render() {
    let btnDisabled = true;
    if(this.state.fields.name && this.state.fields.email && this.state.fields.message && this.state.fields.privacy) {
      btnDisabled = false;
    }
    return (
      <form ref={this.form} className={"form contact-form " + (this.state.validated ? 'was-validated' : '')} method="post" name="accudio-contact" role="form" data-netlify="true" netlify="true" netlify-honeypot="oh-dear" onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="alistair-shepherd-contact" />
        <div className="message">
          <div className="inner">
            { this.state.message }
          </div>
        </div>
        <div className="screen-reader-text">
          <label>Don’t fill this out if you're human: <input name="oh-dear" /></label>
        </div>
        <div className="row">
          <div className="form-input">
            <label htmlFor="form_name">Name</label>
            <input id="form_name" className={(this.state.fields.name ? 'focused' : '')} name="name" type="text" placeholder="Please enter your name" required="required" onFocus={this.handleFocus} onChange={this.handleChange} />
          </div>
          <div className="form-input">
            <label htmlFor="form_email">Email Address</label>
            <input id="form_email" className={(this.state.fields.email ? 'focused' : '')}  name="email" type="email" placeholder="Please enter your email address" required="required" onFocus={this.handleFocus} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="form-input">
            <label htmlFor="form_message">Message</label>
            <textarea id="form_message" className={(this.state.fields.message ? 'focused' : '')}  name="message" placeholder="Please enter a message" rows="5" required="required" onFocus={this.handleFocus} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="form-input">
            <label className="check">
              <input id="form_privacy" className={(this.state.fields.privacy ? 'focused' : '')} name="privacy" type="checkbox" required="required" onFocus={this.handleFocus} />
              <span className="checkmark"></span>
              By submitting this form I agree that Accudio can store my submitted information in accordance with the <Link href="/privacy-policy"><a>Privacy Policy</a></Link> in order to respond to my enquiry.
            </label>
          </div>
        </div>
        <div className="row">
          <div className="form-input">
            <input className={"btn " + (btnDisabled ? 'disabled' : '')} type="submit" value="Send form" name="submitted" />
          </div>
        </div>
      </form>
    )
  }
}

export default Form