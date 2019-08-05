import React from 'react';
import PropTypes from 'prop-types';
import {
  FormField,
  InputSubmit,
  InputText,
  Label,
  TextArea,
} from './contact.css';

const ContactForm = ({ email }) => (
  <form action={`mailto:${email}`} method="post" encType="text/plain">
    <FormField>
      <Label htmlFor="name">
        Name:
        <InputText
          type="text"
          name="name"
          id="name"
          placeholder="Bruce Dickinson"
          required
        />
      </Label>
    </FormField>
    <FormField>
      <Label htmlFor="mail">
        E-mail:
        <InputText
          type="email"
          name="mail"
          id="mail"
          placeholder="bruce@ironmaiden.uk"
          required
        />
      </Label>
    </FormField>
    <FormField>
      <TextArea name="comment" id="comment" required />
    </FormField>
    <InputSubmit type="submit" value="Send" />
  </form>
);

ContactForm.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ContactForm;
