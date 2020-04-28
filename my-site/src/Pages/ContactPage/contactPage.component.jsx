import React from "react";

import ContactForm from "../../Components/Contact/contact.component";
import { ContactPageContainer } from "./contactPage.styles";

import "./contactPage.styles";

const ContactPage = () => (
  <ContactPageContainer>
    <ContactForm />
  </ContactPageContainer>
);

export default ContactPage;
