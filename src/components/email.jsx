import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('from', 'react_contact_form', form.current, 'LaJSSPXujmCbW6iiJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="field">
      <label className='label-to'>Name</label>
      <input type="text" name="user_name" className='field-name'/>
      <label>Email</label>
      <input type="email" name="user_email" className='field-email'/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className='field-booton'/>
    </form>
    </div>
  );
};

export default Email;