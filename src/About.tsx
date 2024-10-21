import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-stone-900 text-white p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
        <p className="text-2xl mb-4">{t('about.mission')}</p>
        <p className="mb-4">{t('about.description')}</p>
        <p className="mb-4">{t('about.history')}</p>
        <h2 className="text-3xl font-bold mb-4">{t('about.team')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{t('about.teamMember.name')}</h3>
            <p className="text-sm">{t('about.teamMember.position')}</p>
            <p className="mt-2">{t('about.teamMember.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
