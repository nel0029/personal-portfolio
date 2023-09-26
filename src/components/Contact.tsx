/** @format */

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoMail,
} from "react-icons/io5";

const Contact = () => {
  const messageCollectionRef = collection(db, "email");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [formError, setFormError] = useState("");

  const sendNewMessage = async (event: any) => {
    event.preventDefault();
    if (email && name && message) {
      await addDoc(messageCollectionRef, {
        email: email,
        name: name,
        message: message,
      }).then(() => {
        setEmail("");
        setName("");
        setMessage("");
        setFormError("");
      });
    } else {
      setFormError("Please fill in all the necessary fields");
    }
  };

  const discard = () => {
    setEmail("");
    setName("");
    setMessage("");
    setFormError("");
  };
  return (
    <div id="contact" className="w-full flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <form className="w-full flex flex-col gap-y-2">
        <div className="w-full flex flex-row gap-x-4">
          <input
            className={`${
              formError && !name ? "border-red-500" : ""
            } w-full px-2 py-1 border-2 border-solid outline-none focus:border-2 focus:border-solid focus:border-blue`}
            required
            placeholder="Name"
            type="text"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          />
          <input
            className={`${
              formError && !email ? "border-red-500" : ""
            } w-full px-2 py-1 border-2 border-solid outline-none focus:border-2 focus:border-solid focus:border-blue`}
            required
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
        </div>
        <textarea
          className={`${
            formError && !message ? "border-red-500" : ""
          } px-2 py-1 border-2 border-solid outline-none focus:border-2 focus:border-solid focus:border-blue`}
          required
          placeholder="Message"
          value={message}
          rows={5}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(event.target.value)
          }
        />
        {formError && <div>{formError}</div>}
        <div className="w-full flex flex-row gap-x-2">
          <button
            className="border border-blue px-2 py-1 rounded text-white bg-blue "
            onClick={(event: any) => sendNewMessage(event)}
          >
            Send
          </button>
          {(email || name || message || formError) && (
            <button
              className="border border-red-500 px-2 py-1 rounded text-red-500"
              onClick={discard}
            >
              Discard
            </button>
          )}
        </div>
      </form>
      <span className="font-bold">Contacts:</span>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 text-gray-500">
        <div className="text-xl flex flex-row items-center gap-x-2 hover:text-blue cursor-pointer">
          <span>
            <IoMail />
          </span>
          <span className="text-base">jaynellucanas29@gmail.com</span>
        </div>
        <a
          className="text-xl flex flex-row items-center gap-x-2 hover:text-blue"
          href="https://github.com/nel0029"
          target="_blank"
        >
          <span>
            <IoLogoGithub />
          </span>
          <span className="text-base">github.com/nel0029</span>
        </a>
        <a
          className="text-xl flex flex-row items-center gap-x-2 hover:text-blue"
          href="https://facebook.com/jaynel29"
          target="_blank"
        >
          <span>
            <IoLogoFacebook />
          </span>
          <span className="text-base">facebook.com/jaynel29</span>
        </a>

        <a
          className="text-xl flex flex-row items-center gap-x-2 hover:text-blue"
          href="https://www.linkedin.com/in/jaynel-lucanas"
          target="_blank"
        >
          <span>
            <IoLogoLinkedin />
          </span>
          <span className="text-base">jaynel-lucanas</span>
        </a>
      </div>
      <div className="w-full flex flex-row justify-center items-center py-2">
        <span className="text-sm text-gray-500">
          Personal portfolio of Jaynel Lucañas | 2023
        </span>
      </div>
    </div>
  );
};

export default Contact;
