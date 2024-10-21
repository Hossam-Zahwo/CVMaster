import React from 'react';
import { motion } from 'framer-motion';
const Testimonials = ({changeLanguage,t,i18n,useTranslation}) => {
  const testimonials = [
    {
      name: i18n.language === 'en' ? "John Doe" : "جون دو",
      feedback: i18n.language === 'en' ? "This tool helped me land my dream job!" : "هذه الأداة ساعدتني في الحصول على وظيفة أحلامي!",
      profession: i18n.language === 'en' ? "Software Developer" : "مطور برامج"
    },
    {
      name: i18n.language === 'en' ? "Jane Smith" : "جين سميث",
      feedback: i18n.language === 'en' ? "Creating a CV has never been easier. Highly recommended!" : "إنشاء السيرة الذاتية أصبح أسهل من أي وقت مضى. أنصح بها بشدة!",
      profession: i18n.language === 'en' ? "Graphic Designer" : "مصممة جرافيك"
    },
    {
      name: i18n.language === 'en' ? "Mohammed Ali" : "محمد علي",
      feedback: i18n.language === 'en' ? "Great tool for creating CVs quickly and easily. Highly recommended!" : "أداة رائعة لإنشاء السيرة الذاتية بسرعة وسهولة. أنصح بها بشدة!",
      profession: i18n.language === 'en' ? "Civil Engineer" : "مهندس مدني"
    }
  ];
  return (
    <div className='mt-10 p-7 col-span-2'>
        <h2 className='text-3xl mb-5'>{t('home.testimonials')}</h2>
        <div className='grid gap-4'>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className='bg-white text-black p-4 rounded-lg shadow-md'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className='text-xl font-bold'>{testimonial.name}</p>
              <p className='italic'>" {testimonial.feedback} "</p>
              <p className='text-sm'>{testimonial.profession}</p>
            </motion.div>
          ))}
        </div>
      </div>
  );
}

export default Testimonials;
