import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="mb-6">
          <h5 className="text-lg font-bold mb-2">{t('footer.about')}</h5>
          <p>{t('footer.aboutDescription')}</p>
        </div>
        <div className="mb-6">
          <h5 className="text-lg font-bold mb-2">{t('footer.links')}</h5>
          <ul>
            <li><Link to="/" className="hover:underline">{t('footer.home')}</Link></li>
            <li><Link to="/create" className="hover:underline">{t('footer.createCV')}</Link></li>
            <li><Link to="/about" className="hover:underline">{t('footer.aboutUs')}</Link></li>
            <li><Link to="/contact" className="hover:underline">{t('footer.contact')}</Link></li>
          </ul>
        </div>
        <div className="mb-6">
          <h5 className="text-lg font-bold mb-2">{t('footer.followUs')}</h5>
          <ul className="flex space-x-4 gap-5">
            <li><a href="https://www.facebook.com" className="hover:underline">Facebook</a></li>
            <li><a href="https://www.twitter.com" className="hover:underline">Twitter</a></li>
            <li><a href="https://www.instagram.com" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div className="mb-6">
          <h5 className="text-lg font-bold mb-2">{t('footer.newsletter')}</h5>
          <form>
            <input
              type="email"
              placeholder={t('footer.emailPlaceholder')}
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              {t('footer.subscribe')}
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
