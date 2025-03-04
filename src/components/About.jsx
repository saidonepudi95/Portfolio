import React from 'react';
import '../App.css';
import { services } from '../constants';
import { FaLinkedin } from 'react-icons/fa';  // ✅ Import LinkedIn Icon
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import coverImage from '../assets/cover-photo.png'; // ✅ Ensure this image exists

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='flex flex-col min-h-screen bg-black text-white' id='about'>

      {/* Main Content Container */}
      <div className='flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-16 lg:px-32 py-12 flex-grow'>

        {/* Left Side: Introduction Text */}
        <div className='md:w-2/3 w-full text-justify'>
          <h2 className='text-5xl font-extrabold mb-4'>Introduction</h2>
          <p className='text-lg leading-relaxed'>
            👋 Hi, I'm <strong>Sai Donepudi</strong>, a 2023 graduate 🎓 working as a 
            <strong> Machine Learning Engineer</strong>. My expertise lies in building scalable ML models, 
            optimizing performance, and integrating AI-driven solutions into real-world applications. 
            <br /><br />
            Passionate about leveraging data to drive innovation 🚀, I enjoy exploring new technologies, 
            software development, and cloud solutions. My goal is to continually experiment, innovate, and 
            contribute to cutting-edge advancements in AI and software engineering.
            <br /><br />
            I actively share my projects on  
            <a className='text-green-300 hover:text-green-500 duration-300' href='https://github.com/saidonepudi95' target='_blank' rel='noopener noreferrer'> GitHub</a> and insights on 
            <a className='text-purple-300 hover:text-purple-400 duration-300 flex items-center gap-1' href="https://www.linkedin.com/in/saidonepudi0/" target='_blank' rel='noopener noreferrer'>
                LinkedIn <FaLinkedin />
            </a>
            Let's connect and build something amazing together!
          </p>

          <div className='mt-6'>
            <ButtonLink
              url='https://drive.google.com/file/d/19Vh0nx5JF9G_sgawb_dUIFlGSHtjp_dw/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className='md:w-1/3 w-full flex justify-center mt-8 md:mt-0'>
          <img
            src={coverImage}
            alt='Sai Donepudi'
            className='w-full max-w-[350px] h-auto rounded-2xl shadow-lg border-4 border-gray-700'
          />
        </div>
      </div>

      {/* Services Section */}
      <div className='flex justify-center flex-wrap gap-7 px-8 md:px-16 pb-12'>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* Footer - Now Sticks to Bottom */}
      <Footer />
    </div>
  )
}

export default About;
