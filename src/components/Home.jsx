import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');
    const name = "Sai Donepudi";

    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText((prev) => prev + name[ref.current - 1]);
            } else {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
            
            {/* Animated Background Waves */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-900 via-gray-900 to-black opacity-60"
            />

            {/* Floating Particles Animation */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-purple-500 opacity-20 rounded-full blur-xl"
                    animate={{ x: [10, -10, 10], y: [20, -20, 20] }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ top: `${i * 15 + 10}%`, left: `${i * 20 + 10}%` }}
                />
            ))}

            {/* Main Content Wrapper (Pushes Footer Down) */}
            <div className="flex-grow flex justify-center items-center text-center px-6 sm:px-12 relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="backdrop-blur-md p-10 rounded-lg"
                >
                    <motion.h1
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="text-6xl sm:text-7xl font-extrabold mt-2"
                        style={{ textShadow: "0px 0px 15px rgba(147, 51, 234, 0.7)" }}
                    >
                        Hi, I'm&nbsp;
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent font-extrabold">
                            {text}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="mt-3 text-xl text-gray-300"
                    >
                        Passionate about building scalable data pipelines, optimizing ML models, and driving MLOps excellence.
                    </motion.p>
                </motion.div>
            </div>

            {/* Footer (Now Fixed to Bottom) */}
            <Footer />
        </div>
    );
};

export default Home;
