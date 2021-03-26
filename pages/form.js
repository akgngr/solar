import React from "react";
import axios from "axios";

export default class MyForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      message: ""

    }
  }

  
  handleEmailChange = (event) => {
    this.setState({
      email : event.target.value
    })
  }

  handleMessageChange = (event) => {
    this.setState({
      message : event.target.value
    })
  }

  render() {
   const {email, message} = this.state
    return (
      <form
        onSubmit={this.handlesubmit}
        method="POST"
      >
        <label>Email:</label>
        <input type="email" name="email" onChange={this.handleEmailChange} />
        <label>Message:</label>
        <input type="text" name="message" onChange={this.handleMessageChange} />
        <button>Submit</button>
      </form>
    );
  }

  handlesubmit = async (event)=> {
    event.preventDefault()
    const data = this.state
    await axios.post('https://v1.nocodeapi.com/akgngr/telegram/oGrVAoKrOFfcDwsd', data)
    .then(function(response){
      alert('Mesajınız başarılı bir şekilde gönderildi. Bizimle iletişime geçtiiniz için teşekkür ederiz')
    })
    .catch(function(error){
      alert('Hata: ' + error)
    })
  }

}