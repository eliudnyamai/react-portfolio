import React from 'react';
import './contact.css'
import  emailjs from 'emailjs-com'
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendFeedback=this.sendFeedback.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  sendFeedback() {
    emailjs.send("service_8e58g0f","template_sajk7y9",{
           to_name: "eliud",
           from_name: this.state.name,
            message: this.state.message,
              },'user_7HIgS9Fq3JCScYmOeE86l')
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  handleSubmit=()=> {
    console.log('yes')
    var variables = {to_name:"Eliud",from_name:this.state.name,message:this.state.message};
    this.sendFeedback();
  }

  render() {
    return (
      <div className="row bg-dark text-white py-5">
        <div id="contact" className="col-md-6 text-center p-2 shadow mx-auto ">
          <h4>Send Me a message</h4>
          <form >
            <input
              className="form-control text-center col-sm-10 ml-5"
              type="text"
              value={this.state.firstName}
              name="name"
              placeholder="Your Name"
              required
              onChange={this.handleChange}
            />
            <br />
            <input
              className="form-control text-center col-sm-10 ml-5"
              type="email"
              value={this.state.email}
              name="email"
              placeholder="Your Email"
              required
              onChange={this.handleChange}
            />
            <br />
            <textarea
              className="form-control text-center col-sm-10 ml-5"
              value={this.state.message}
              name="message"
              placeholder="Type Your Message"
              required
              onChange={this.handleChange}
            />
            <br />
            <input
              onClick={this.handleSubmit}
              className="btn button btn-large btn-success"
              type="button"
              value="Send"
            />
          </form>
        </div>
        <div className="social  mx-auto col-md-4">
          <div>
            <h3>Social</h3>
            <div className="mb-2">
              <i className=" icon  fab fa-twitter"></i>
              <span className="h5">&nbsp;Follow me at</span>
              <a className="h5" href="https://twitter.com/MitauNyamai">
                &nbsp;Mitau Nyamai
              </a>
            </div>
            <div className="mb-2">
              <i className=" icon fab fa-linkedin"></i>
              <span className="h5">&nbsp; Follow me at</span>
              <a className="h5" href="https://linkedin.com/in/nyamai-mitau">
                &nbsp;Nyamai Mitau
              </a>
            </div>
            <div className="mb-2">
              <i className=" icon fab fa-github"></i>
              <span className="h5"> &nbsp;Follow me at </span>
              <a className="h5" href="https://github.com/eliudnyamai">
                &nbsp;eliudnyamai
              </a>
            </div>

            <div className="">
              <i className=" icon  fas fa-phone"></i>
              <span className="h5">&nbsp;Call me at</span>
              <a href="tel:+254790508982" className="h5">
                &nbsp; +254790508982
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact