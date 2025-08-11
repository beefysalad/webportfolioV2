import React, { useState } from "react";
import CONSTANTS from "../../constants";
import axios from "axios";
interface IContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export const Contact = () => {
  const [emailBody, setEmailBody] = useState<IContact>({
    email: "",
    message: "",
    name: "",
    subject: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleButtonSubmit = async () => {
    setLoading(true);
    // console.log(emailBody);
    try {
      await axios.post("/api/send-email", emailBody);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    // setEmailBody({
    //   email: "",
    //   message: "",
    //   name: "",
    //   subject: "",
    // });
  };
  return (
    <section
      id={CONSTANTS.NAVIGATION.NAV_ITEMS.CONTACT}
      className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800'
    >
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Get In Touch
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8'></div>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>
        <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Name
              </label>
              <input
                type='text'
                className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors'
                placeholder='Your name'
                value={emailBody.name}
                onChange={(e) =>
                  setEmailBody({ ...emailBody, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Email
              </label>
              <input
                type='email'
                className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors'
                placeholder='your.email@example.com'
                value={emailBody.email}
                onChange={(e) =>
                  setEmailBody({ ...emailBody, email: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Subject
            </label>
            <input
              type='text'
              className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors'
              placeholder='Project inquiry'
              value={emailBody.subject}
              onChange={(e) =>
                setEmailBody({ ...emailBody, subject: e.target.value })
              }
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Message
            </label>
            <textarea
              rows={6}
              className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none'
              placeholder='Tell me about your project...'
              value={emailBody.message}
              onChange={(e) =>
                setEmailBody({ ...emailBody, message: e.target.value })
              }
            ></textarea>
          </div>
          <button
            // className='w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg'
            onClick={handleButtonSubmit}
            disabled={true}
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};
