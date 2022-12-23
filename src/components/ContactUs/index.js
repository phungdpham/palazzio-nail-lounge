import { useState } from 'react';
import { FaFacebookMessenger, FaDirections } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import salonDb from '../../constant/db';

export default function ContactUs() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }

    return null;
  };

  const phoneNum = formatPhoneNumber(salonDb.phone);

  return (
    <div className="w-full md:w-8/12 grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mt-12 mb-12 p-2 ">
      <div className="text-white py-8  p-4">
        <div className="">
          <div className=" text-lg font-bold uppercase">Facebook Messenger </div>
          <div className="border-b-2 border-primary w-1/4 mb-3"></div>
          <div className="text-lg font-bold flex items-center">
            facebook.com/palazzionailloungememorial
          </div>{' '}
          <button className="flex items-center text-xl text-bold gap-2 p-3 mt-4 bg-blue-500 rounded-lg">
            <span className="text-xl">
              <FaFacebookMessenger />
            </span>
            <a
              className="capitalize font-semibold"
              href="https://m.me/palazzionailloungememorial"
              target="_blank"
            >
              Message Us
            </a>
          </button>
        </div>
        <div className="mt-8">
          <div className=" text-lg font-bold  uppercase">Business Address </div>
          <div className="border-b-2 border-primary w-1/4 mb-3"></div>

          <div className="text-lg font-bold flex items-center">
            {salonDb.address.street}, {salonDb.address.city},{' '}
            {salonDb.address.state}
          </div>

          <button className="flex items-center text-xl text-bold gap-2  p-3 border-solid border-2 border-white  rounded-lg mt-4 hover:btn-primary">
            <span className="text-xl">
              <FaDirections />
            </span>
            <a
              className="capitalize font-semibold"
              href={salonDb.address.directionLink}
              target="_blank"
            >
              Get Direction
            </a>
          </button>
        </div>
        <div className="mt-8">
          <div className=" text-lg font-bold uppercase">Phone Number </div>
          <div className="border-b-2 border-primary w-1/4 mb-3"></div>
          <div className="text-lg font-bold flex items-center">
            {/* <span> <GoLocation /> </span> */}
            {phoneNum}
          </div>{' '}
          <button className="flex items-center text-xl text-bold gap-2 mt-4 p-3 border-solid border-2 border-white  rounded-lg">
            <span className="text-xl">
              <FiPhoneCall />
            </span>
            <a
              className="capitalize font-semibold"
              href="https://m.me/palazzionailloungememorial"
              target="_blank"
            >
              call us
            </a>
          </button>
        </div>
        
      </div>
      <form
        // onSubmit={handleSubmit}
        className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-gray-200"
      >
        <h1 className="text-2xl text-zinc-900 font-bold">Send a message</h1>
        <label htmlFor="fullname" className="text-zinc-900 font-light mt-8">
          Full name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
          className="text-zinc-900 rounded-lg font-light mt-4"
        />

        <label htmlFor="email" className="text-zinc-900 font-light mt-8">
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          className="text-zinc-900 rounded-lg  font-light mt-4"
        />

        <label htmlFor="subject" className="text-zinc-900 font-light mt-8">
          Full name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          name="subject"
          className="text-zinc-900 rounded-lg font-light mt-4"
        />

        <label htmlFor="message" className="text-zinc-900 font-light mt-8">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="bg-white rounded-lg  border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-zinc-900 font-light mt-4"
        ></textarea>
        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            className="px-10 mt-8 py-2 bg-gradient-to-tr from-zinc-900 to-zinc-600 text-gray-50 font-flight rounded-md text-lg flex flex-row items-center"
          >
            submit
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-white ml-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
