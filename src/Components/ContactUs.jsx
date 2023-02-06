import React, { useRef,  } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const showToast = () => {
  toast.success( "🦄 Thanks, Taboo will email you event updates", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  toast.error('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });D
}

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ttcv3ak', 'template_ge4w5n8', form.current, 'IS-Fe3IaPwJAUkcUy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className >
      
      {/* <label>Name</label>
      <input type="text" name="user_name" /> */}
      
      <input className="text-lg placeholder:text-white placeholder:italic py-4 px-20 md:px-10 lg:py-6 lg:px-12 bg-black bg-opacity-40 focus:bg-opacity-60 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mt-20 md:mb-0  " type="email" name="user_email" placeholder="Email Address" />
      {/* <label>Message</label>
      <textarea name="message" /> */}
      <input type="submit" value="Notify Me" onClick={showToast} className="bg-black md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150 0 active:bg-red-700 " />
      <ToastContainer />
    </form>
  );
};