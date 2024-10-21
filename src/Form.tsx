import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { useTranslation } from 'react-i18next';

const Form = ({
  formData,
  handleChange,
  handleExperienceDetailsChange,
  handleSelectChange,
  experienceOptions,
  skillsOptions,
  togglePreview,
  preview,
  downloadPDF,
  links,
  link
}) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className='flex justify-center items-center'>
      <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg w-[500px]">
        <h1 className="text-2xl w-full flex justify-center items-center font-bold mb-4">
          {t('form.title')}
        </h1>
        <form>
          {step === 1 && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700">{t('form.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">{t('form.profession')}</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">{t('form.address')}</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-blue-500 text-white py-2 rounded-md"
              >
                {t('form.next')}
              </button>
            </div>
          )}
{step === 2 && (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">{t('links')}</label>
      <CreatableSelect
        isMulti
        name="links"
        options={[
          { value: 'LinkedIn', label: 'LinkedIn' },
          { value: 'GitHub', label: 'GitHub' },
          { value: 'Portfolio', label: 'Portfolio' }
        ]}
        value={formData.links}
        onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'links')}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
    {formData.links.map((link, index) => (
      <div key={link.value} className="mb-4">
        <label className="block text-gray-700">{t(`${link.value.toLowerCase()}`)}</label>
        <input
          type="text"
          name={`link_${link.value}`}
          value={formData[`link_${link.value}`] || ''}
          onChange={(e) => handleChange(e, index)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
    ))}
    <button
      type="button"
      onClick={prevStep}
      className="w-full bg-gray-500 text-white py-2 rounded-md"
    >
      {t('form.previous')}
    </button>
    <button
      type="button"
      onClick={nextStep}
      className="w-full bg-blue-500 text-white py-2 rounded-md mt-2"
    >
      {t('form.next')}
    </button>
  </div>
)}


        
{step === 3 && (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">{t('form.phone')}</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">{t('form.email')}</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">{t('form.age')}</label>
      <input
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
    </div>
    <button
      type="button"
      onClick={prevStep}
      className="w-full bg-gray-500 text-white py-2 rounded-md"
    >
      {t('form.previous')}
    </button>
    <button
      type="button"
      onClick={nextStep}
      className="w-full bg-blue-500 text-white py-2 rounded-md mt-2"
    >
      {t('form.next')}
    </button>
  </div>
)}

{step === 4 && (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">{t('form.objective')}</label>
      <textarea
        name="objective"
        value={formData.objective}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      ></textarea>
    </div>
    <button
      type="button"
      onClick={prevStep}
      className="w-full bg-gray-500 text-white py-2 rounded-md"
    >
      {t('form.previous')}
    </button>
    <button
      type="button"
      onClick={nextStep}
      className="w-full bg-blue-500 text-white py-2 rounded-md mt-2"
    >
      {t('form.next')}
    </button>
  </div>
)}

{step === 5 && (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">{t('form.experience')}</label>
      <CreatableSelect
        isMulti
        name="experience"
        options={experienceOptions}
        value={formData.experience}
        onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'experience')}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      {formData.experience.map((exp, index) => (
        <div key={exp.value} className="mb-6 p-4 border border-gray-300 rounded-lg">
          <p className="text-lg font-bold mb-2">{exp.label}:</p>
          <textarea
            value={formData.experienceDetails[index] || ''}
            onChange={(e) => handleExperienceDetailsChange(e, index)}
            placeholder={`Enter details for ${exp.label}`}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
      ))}
    </div>
    <button
      type="button"
      onClick={prevStep}
      className="w-full bg-gray-500 text-white py-2 rounded-md"
    >
      {t('form.previous')}
    </button>
    <button
      type="button"
      onClick={nextStep}
      className="w-full bg-blue-500 text-white py-2 rounded-md mt-2"
    >
      {t('form.next')}
    </button>
  </div>
)}


{step === 6 && (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700">{t('form.education')}</label>
      <textarea
        name="education"
        value={formData.education}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      ></textarea>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">{t('form.skills')}</label>
      <CreatableSelect
        isMulti
        name="skills"
        options={skillsOptions}
        value={formData.skills}
        onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'skills')}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
    <button
      type="button"
      onClick={prevStep}
      className="w-full bg-gray-500 text-white py-2 rounded-md"
    >
      {t('form.previous')}
    </button>
    <button
      type="button"
      onClick={togglePreview}
      className="w-full bg-blue-500 text-white py-2 rounded-md mt-2"
    >
      {t('form.preview')}
    </button>
  </div>
)}
{preview && (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2">{t('form.previewTitle')}</h2>
    <div className="bg-gray-100 p-4 rounded-md">
      <p><strong>{t('form.name')}:</strong> {formData.name}</p>
      <p><strong>{t('form.profession')}:</strong> {formData.profession}</p>
      <p><strong>{t('form.address')}:</strong> {formData.address}</p>
      <p><strong>{t('form.phone')}:</strong> {formData.phone}</p>
      <p><strong>{t('form.email')}:</strong> {formData.email}</p>
      <p><strong>{t('form.age')}:</strong> {formData.age}</p>
      <p><strong>{t('form.objective')}:</strong> {formData.objective}</p>
      <p><strong>{t('form.linkedIn')}:</strong> {formData.linkedIn}</p>
      <p><strong>{t('form.github')}:</strong> {formData.github}</p>
      <p><strong>{t('form.portfolio')}:</strong> {formData.portfolio}</p>
      {formData.experience.map((exp, index) => (
        <div key={exp.value}>
          <p><strong>{exp.label}:</strong> {formData.experienceDetails[index]}</p>
        </div>
      ))}
      <p><strong>{t('form.education')}:</strong> {formData.education}</p>
      <p><strong>{t('form.skills')}:</strong></p>
      <ul className="list-disc ml-6">
        {formData.skills.map((skill, index) => (
          <li key={index} className="mb-2">{skill.label}</li>
        ))}
      </ul>
    </div>
    <button
      type="button"
      onClick={downloadPDF}
      className="w-full mt-4 bg-green-500 text-white py-2 rounded-md"
    >
      {t('form.downloadPDF')}
    </button>
  </div>
)}
</form>
</div>
</div>
);
}

export default Form;
