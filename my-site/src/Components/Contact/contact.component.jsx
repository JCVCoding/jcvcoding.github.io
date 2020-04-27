import React, { Component } from "react";
import axios from "axios";

import { FormContainer, FormTitle, FormWrapper } from "./contact.styles";

import { FormInput, FormTextArea } from "../FormInput/formInput.component";
import CustomButton from "../CustomButton/customButton.component";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  clearFormState = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  sendData = async () => {
    const { name, email, subject, message } = this.state;

    try {
      await axios({
        method: "POST",
        url: "http://localhost:5000/contact",
        data: {
          name,
          email,
          subject,
          message,
        },
      });
      alert("Success");
      this.clearFormState();
    } catch (err) {
      alert("ERROR");
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.sendData();
  };

  render() {
    const { email, message, name, subject } = this.state;
    return (
      <FormWrapper>
        <FormTitle>Contact Form Title</FormTitle>
        <FormContainer onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            label="Name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="subject"
            value={subject}
            label="Subject"
            onChange={this.handleChange}
            required
          />
          <FormTextArea
            name="message"
            value={message}
            label="Message"
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SUBMIT</CustomButton>
        </FormContainer>
      </FormWrapper>
    );
  }
}

export default ContactForm;
