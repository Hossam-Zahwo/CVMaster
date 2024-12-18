import React from 'react';
import { useTranslation } from 'react-i18next';
import run from "../image/istockphoto-524542191-612x612-removebg-preview.png";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';

const Home = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className='bg-stone-900 text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-start font-sans p-7'>
          <motion.h1
            className='text-4xl'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t('home.title')}
          </motion.h1>
          <motion.p
            className='text-2xl mt-4'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t('home.description')}
          </motion.p>
          <Link to="/form">
            <motion.button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {t('home.getStarted')}
            </motion.button>
          </Link>
        </div>
        <div className='flex justify-center items-center p-7'>
  <div className='relative'>
    <motion.img
      src={run}
      alt=""
      className='w-full max-w-xs md:max-w-sm lg:max-w-md'
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    />
  
  </div>
</div>

      </div>
      <Testimonials changeLanguage={changeLanguage} t={t} i18n={i18n} />
      <div className="mt-10 p-7">
        <h2 className="text-3xl mb-5">{t('home.successStats')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="text-2xl font-bold">5000+</h3>
            <p>{t('home.cvsCreated')}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">300+</h3>
            <p>{t('home.jobsLanded')}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">4.8/5</h3>
            <p>{t('home.avgRating')}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 p-7">
        <h2 className="text-3xl mb-5">{t('home.blog')}</h2>
        <div className="grid gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{t('home.blogPost1Title')}</h3>
            <p>{t('home.blogPost1Excerpt')}</p>
            <a href="#" className="text-blue-500 hover:underline">{t('home.readMore')}</a>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{t('home.blogPost2Title')}</h3>
            <p>{t('home.blogPost2Excerpt')}</p>
            <a href="#" className="text-blue-500 hover:underline">{t('home.readMore')}</a>
          </div>
        </div>
      </div>
      <div className="mt-10 p-7">
        <h2 className="text-3xl mb-5">{t('home.caseStudies')}</h2>
        <div className="grid gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{t('home.caseStudy1Title')}</h3>
            <p>{t('home.caseStudy1Detail')}</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{t('home.caseStudy2Title')}</h3>
            <p>{t('home.caseStudy2Detail')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
