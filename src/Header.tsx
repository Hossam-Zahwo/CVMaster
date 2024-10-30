import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-500 text-white p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          CVMaster
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto absolute md:static bg-blue-500 md:bg-transparent top-16 left-0 md:top-auto md:left-auto p-4 md:p-0 z-50`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li className="hover:underline py-2 px-4">
            <Link to="/" className="py-2">{t('header.home')}</Link>
          </li>
          <li className="hover:underline py-2 px-4">
            <Link to="/form" className="py-2">{t('header.createCV')}</Link>
          </li>
          <li className="hover:underline py-2 px-4">
            <Link to="/about" className="py-2">{t('header.about')}</Link>
          </li>
          <li className="hover:underline py-2 px-4">
            <Link to="/contact" className="py-2">{t('header.contact')}</Link>
          </li>
          <li className="py-2 px-4">
            <button
              onClick={changeLanguage}
              className="hover:underline bg-white text-blue-500 px-3 py-1 rounded-full"
            >
              {t('header.language')}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
