import React, { Component } from "react";

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

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {};

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
