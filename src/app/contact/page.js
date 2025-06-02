// src/app/contact.js
"use client";
import { useState } from 'react';
import Layout from '../../components/Layout';

function Contact() {
  const [status, setStatus] = useState('');

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] w-full px-4 text-center">
        <div className="max-w-md w-full space-y-4">
          <h1 className="text-2xl font-bold bg-bootstrapDark text-yellow px-4 py-2 rounded-md">
            Contact Me
          </h1>
          <p className="text-black">If you have comments or questions, let me know!</p>

          <div className="bg-bootstrapDark rounded-2xl shadow-lg p-6">
            <form
              action="https://formsubmit.co/tydamon@hotmail.com"
              method="POST"
              onSubmit={() => setStatus('Sending...')}
              className="flex flex-col gap-4"
            >
              {/* FormSubmit Settings */}
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thanks for reaching out!" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

              <input
                type="text"
                name="name"
                placeholder="Your Name / Reference"
                required
                className="p-2 border border-gray-300 rounded text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-2 border border-gray-300 rounded text-black"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                className="p-2 border border-gray-300 rounded text-black"
              />
              <button
                type="submit"
                className="bg-yellow text-black font-semibold py-2 px-4 rounded hover:bg-llBlue hover:text-white transition"
              >
                Send
              </button>
              {status && <p className="text-sm text-yellow">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
