import React from "react";
import vpn from '../assets/ML.png';
import copeople from '../assets/ML.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                    {title}
                </h5>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className='text-[14px] text-blue-500'>
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const project = [
    {
        title: 'MLOps Pipeline',
        description: 'An end-to-end MLOps pipeline with Apache Kafka, TensorBoard, and FastAPI.',
        image: copeople,
        git: 'https://github.com/saidonepudi95/DataScience_Pipeline',
        technologies: ['Apache Kafka', 'TensorBoard', 'FastAPI', 'EvidentlyAI']
    },
    {
        title: 'Snap Shot',
        description: 'A React & Tailwind-based portfolio template for photographers.',
        image: vpn,
        git: "https://github.com/nithingooud/vpn_studios",
        technologies: ['React JS', 'Tailwind CSS']
    },
    {
        title: 'AI Chatbot',
        description: 'An AI chatbot built using OpenAI’s GPT API with FastAPI and React.',
        image: copeople,
        git: "https://github.com/example/ai-chatbot",
        technologies: ['GPT-4', 'FastAPI', 'React', 'Tailwind CSS']
    },
    {
        title: 'Stock Market Predictor',
        description: 'A stock price prediction tool using LSTM and historical data.',
        image: vpn,
        git: "https://github.com/example/stock-predictor",
        technologies: ['LSTM', 'TensorFlow', 'Python', 'Flask']
    },
    {
        title: 'E-Commerce Dashboard',
        description: 'A full-stack e-commerce analytics dashboard using React and Node.js.',
        image: copeople,
        git: "https://github.com/example/ecommerce-dashboard",
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
    },
    {
        title: 'Image Recognition API',
        description: 'A FastAPI-based image recognition service with CNNs.',
        image: vpn,
        git: "https://github.com/example/image-recognition",
        technologies: ['FastAPI', 'TensorFlow', 'Docker']
    },
    {
        title: 'Blockchain Voting System',
        description: 'A secure blockchain-based voting application using Solidity and React.',
        image: copeople,
        git: "https://github.com/example/blockchain-voting",
        technologies: ['Solidity', 'Ethereum', 'React', 'Hardhat']
    },
    {
        title: 'Cybersecurity Threat Detection',
        description: 'A cybersecurity threat detection system using ML algorithms.',
        image: vpn,
        git: "https://github.com/example/threat-detection",
        technologies: ['Python', 'Scikit-Learn', 'Elastic Stack']
    }
];

const Projects = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/* Main Content Wrapper */}
            <div className="flex-grow flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>

            {/* Footer Always at Bottom */}
            <Footer />
        </div>
    );
};

export default Projects;
