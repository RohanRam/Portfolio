import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { Toaster, toast } from 'sonner'


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_6zjqljh";
        const templateID = "template_sc1pf1r";
        const publicKey = "upOc06qn5FmQFkRkC";

        emailjs
            .send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                // alert("Message sent successfully!");
                toast.success('Message sent successfully!')
                setFormData({ name: "", email: "", message: "" }); 
            })
            .catch((err) => {
                console.error("FAILED...", err);
                // alert("Failed to send message. Please try again.");
                toast.error('Failed to send message. Please try again.')
            });
    };

    return (
        <div className="contact-section mb-5">
            <h3 className="section-title mb-3">Contact</h3>

            <div className="con-mob">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="contact-submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
