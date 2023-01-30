import React from "react";
import {
  ContactsWrapper,
  ContactDivWrapper,
  TitleContactWrapper,
  LftWrapper,
  RgtWrapper,
  InputWrapper,
  TextAreaWrapper,
  ButtonWrapper,
} from "./Contacts.style";

export default function Contacts() {
  return (
    <ContactsWrapper>
      <TitleContactWrapper>
        <b>Contact Us</b>
      </TitleContactWrapper>
      <ContactDivWrapper>
        <LftWrapper>
          <form action="">
            <label for="name">Full Name</label>
            <InputWrapper
              type="text"
              id="name"
              name="fullname"
              placeholder="Your name.."
            />
            <label for="email">Email Address</label>
            <InputWrapper
              type="email"
              id="email"
              name="email"
              placeholder="Your email address.."
            />
            <label for="phone">Contact Number</label>
            <InputWrapper
              type="text"
              id="phone"
              name="phone"
              placeholder="Your contact number.."
            />
            <label for="message">Your Message</label>
            <TextAreaWrapper
              class="textarea"
              name="message"
              placeholder="Your message.."
              style={{ height: "200px" }}
            ></TextAreaWrapper>
            <ButtonWrapper type="submit">Submit</ButtonWrapper>
          </form>
        </LftWrapper>
        <RgtWrapper>
          <img
            src="http://localhost:3000/assets/imgs/contact.png"
            alt="profile picture of reviewer"
          />
        </RgtWrapper>
      </ContactDivWrapper>
    </ContactsWrapper>
  );
}
