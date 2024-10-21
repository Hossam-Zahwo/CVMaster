import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-stone-900 text-white p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">{t('contact.title')}</h1>
        <p className="text-2xl mb-4">{t('contact.description')}</p>
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="mb-4">
            <label className="block text-gray-300">{t('contact.name')}</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">{t('contact.email')}</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4 col-span-2 lg:col-span-3">
            <label className="block text-gray-300">{t('contact.message')}</label>
            <textarea
              name="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-4 col-span-2 lg:col-span-3 flex justify-center items-center">
            <button
              type="submit"
              className=" bg-blue-500 text-white py-2 rounded-md w-[20%]"
            >
              {t('contact.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
