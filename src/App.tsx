import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';

const App = () => {
  const { i18n } = useTranslation();
  const [preview, setPreview] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    address: '',
    phone: '',
    email: '',
    age: '',
    objective: '',
    linkedIn: '',
    github: '',
    experience: [],
    experienceDetails: [],
    education: '',
    skills: [],
    links: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExperienceDetailsChange = (e, index) => {
    const newDetails = formData.experienceDetails.slice();
    newDetails[index] = e.target.value;
    setFormData({ ...formData, experienceDetails: newDetails });
  };

  const handleSelectChange = (selectedOptions, field) => {
    setFormData({ ...formData, [field]: selectedOptions });
  };

  const togglePreview = () => {
    setPreview(!preview);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
  const margin = 15;

    // تحميل خط Calibri
    doc.setFont("calibri");
    doc.setFontSize(22); // تعديل حجم الخط للاسم
    doc.text(` ${formData.name}`, 10, 20);

    doc.setFontSize(14); // إعادة حجم الخط لباقي النصوص
    let y = 30;

    const addLine = (label, text) => {
      const lineHeight = 8;
      const maxHeight = doc.internal.pageSize.height - 20;
      const lines = doc.splitTextToSize(label ? `${label}: ${text}` : text, 180 - 2 * margin);
  
      lines.forEach(line => {
        if (y + lineHeight > maxHeight) {
          doc.addPage();
          y = 10;
        }
        doc.text(line, margin, y);
        y += lineHeight;
      });
    }
    addLine(``, formData.profession);
    addLine('Address', formData.address);
  
    // عرض Phone و Email و Age في نفس السطر مع فواصل
    const contactInfo = `Phone: ${formData.phone} | Email: ${formData.email} | Age: ${formData.age}`;
    doc.text(contactInfo, margin, y);
    y += 7;
  
 // عرض الروابط
 formData.links.forEach(link => {
  addLine(link.label, formData[`link_${link.value}`]);
});

    // تعديل الترتيب والتنسيق لخانة Objective
    doc.setFontSize(16);
    doc.text('Objective', 20, y, null, null, 'center');
    y += 10;
    doc.setFontSize(12);
    const objectiveLines = doc.splitTextToSize(formData.objective, 160);
    objectiveLines.forEach(line => {
      doc.text(line, 20, y);
      y += 6;
    });
    y += 5;

    doc.setFontSize(16);
    doc.text('Experience', 20, y, null, null, 'center');
    y += 10;
    doc.setFontSize(14);

    formData.experience.forEach((exp, index) => {
      doc.text(`${exp.label}`, 20, y);
      y += 6;
      const lines = doc.splitTextToSize(formData.experienceDetails[index], 180);
      lines.forEach(line => {
        doc.text(line, 20, y);
        y += 6;
      });
      y += 5;
    });

    doc.setFontSize(16);
    doc.text('Education', 20, y, null, null, 'center');
    y += 10;
    doc.setFontSize(12);
    const educationLines = doc.splitTextToSize(formData.education, 180);
    educationLines.forEach(line => {
      doc.text(line, 20, y);
      if (y + 6 > doc.internal.pageSize.height - 20) {
        doc.addPage();
        y = 10;
      }
      doc.text(line, 20, y);
      y += 6;
    });
    y += 5;
    

    doc.setFontSize(16);
    doc.text('Skills', 20, y, null, null, 'center');
    y += 7;
    doc.setFontSize(12);

    formData.skills.forEach((skill) => {
      doc.text(`* ${skill.label}`, 20, y);
      y += 5;
    });
    

    doc.save('CV.pdf');
  };

  const experienceOptions = [
    { value: 'developer', label: 'Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'manager', label: 'Manager' }
  ];

  const skillsOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' }
  ];

  
    return (
      <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={
            <Form
              formData={formData}
              handleChange={handleChange}
              handleExperienceDetailsChange={handleExperienceDetailsChange}
              handleSelectChange={handleSelectChange}
              togglePreview={togglePreview}
              preview={preview}
              downloadPDF={downloadPDF}
              experienceOptions={experienceOptions}
              skillsOptions={skillsOptions}
              links={formData.links} // Ensure that this is set in formData
            />
          } />
        </Routes>
        <Footer />
      </div>
    );
    

  };
  export default App;  
