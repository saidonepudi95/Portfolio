import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";

// EmailJS Configurations
const EMAIL_JS_PUBLIC_KEY = "foxQI5MZ1A_wkBur9"; // Your public key
const EMAIL_JS_SERVICE_ID = "email_temp"; // Your EmailJS service ID
const EMAIL_JS_TEMPLATE_ID = "template_tkk3dmc"; // Your EmailJS template ID

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate input fields
        const username = form.name.trim();
        const user_email = form.email.trim();
        const user_message = form.message.trim();

        if (username === '' || user_email === '' || user_message === '') {
            setLoading(false);
            toast.error("Please fill all fields!", { position: 'bottom-right' });
            return;
        }

        emailjs
            .send(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
                {
                    from_name: username,
                    user_email: user_email,
                    to_name: "Sai Donepudi",
                    to_email: "saidonepudi1995@outlook.com",
                    message: user_message,
                    date: new Date().toLocaleString(),
                },
                EMAIL_JS_PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                toast.success("Message sent successfully!", { position: 'bottom-right' });
                setForm({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                toast.error("Something went wrong. Try again later.", { position: 'bottom-right' });
            });
    };

    return (
        <div className='flex flex-col min-h-screen bg-black text-white' id='contact'>

            {/* Contact Form Section */}
            <div className='flex-grow flex flex-col justify-center items-center w-full px-6 sm:px-12'>
                <div className='w-full sm:w-[650px] m-auto p-8 rounded-2xl'>
                    <p className='font-light'>REACH OUT TO ME</p>
                    <h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>
                        Contact.
                    </h2>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
                        <label className='flex flex-col'>
                            <span className='font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-medium mb-4'>Your Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Ex: abc@gmail.com"
                                className='py-4 px-6 rounded-lg font-medium bg-gray-900'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-medium mb-4'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='Type your message here...'
                                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                                required
                            />
                        </label>

                        <button type='submit' className='pt-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900'>
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
                <ToastContainer />
            </div>

            {/* Footer Fixed at Bottom */}
            <Footer />
        </div>
    );
};

export default Contact;
