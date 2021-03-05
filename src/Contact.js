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
      feedback:"",
      recaptcha:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendFeedback=this.sendFeedback.bind(this);
    this.handleRecaptcha=this.handleRecaptcha(this);
  }
  handleRecaptcha(){
   this.setState({recaptcha:true})
   console.log(this.state.recaptcha)
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  sendFeedback() {
    var variables = {
      to_name: "eliud",
      from_name: this.state.name,
      message: this.state.message,
    };
    emailjs.send("service_8e58g0f","template_sajk7y9",variables,'user_7HIgS9Fq3JCScYmOeE86l')
      .then((res) => {
        this.setState({
          feedback: "Thanks I have received your message",
          email: "",
          message:"",
          name:""
        });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>{
        this.setState({ feedback: "Message not send please check your internet connection" });
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
      }
      );
  }

  handleSubmit=()=> {
    if(this.state.message&&this.state.name&&this.state.name){
        this.sendFeedback();
    } else{
      this.setState({feedback:"All fields are required"})
    }
  }

  render() {
    return (
      <div className="row bg-dark text-white py-5">
        <div id="contact" className="col-md-6 text-center mx-auto shadow">
          <h4>Send Me a message</h4>
          <form>
            <input
              className="form-control col-8 text-center  mx-auto"
              type="text"
              value={this.state.firstName}
              name="name"
              placeholder="Your Name"
              required
              onChange={this.handleChange}
            />
            <br />
            <input
              className="form-control col-8 text-center  mx-auto"
              type="email"
              value={this.state.email}
              name="email"
              placeholder="Your Email"
              required
              onChange={this.handleChange}
            />
            <br />
            <textarea
              className="form-control text-center col-8 mx-auto"
              value={this.state.message}
              name="message"
              placeholder="Type Your Message"
              required
              onChange={this.handleChange}
            />
            <br />
            <div className="mx-auto d-lg-flex  recaptcha col-8 text-center">
              <input
                onClick={this.handleSubmit}
                className=" mt-md-4 btn button btn-large btn-success"
                type="button"
                value="Send"
              />
            </div>
            <br />

            <div className="text-info h5">{this.state.feedback}</div>
          </form>
        </div>
        <div className="social text-center  mx-auto col-md-4">
          <h3 className="mt-1">Social</h3>
          <div className="">
            <i className=" icon  fab fa-twitter"></i>
            <span className="h5">Follow me at</span>
            <a className="h5" href="https://twitter.com/MitauNyamai">
              Mitau Nyamai
            </a>
          </div>
          <div className="mb-2">
            <i className=" icon fab fa-linkedin"></i>
            <span className="h5"> Follow me at</span>
            <a className="h5" href="https://linkedin.com/in/nyamai-mitau">
              Nyamai Mitau
            </a>
          </div>
          <div className="mb-2">
            <i className=" icon fab fa-github"></i>
            <span className="h5"> Follow me at </span>
            <a className="h5" href="https://github.com/eliudnyamai">
              eliudnyamai
            </a>
          </div>

          <div className="">
            <i className=" icon  fas fa-phone"></i>
            <span className="h5">Call me at</span>
            <a href="tel:+254790508982" className="h5">
              +254790508982
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact