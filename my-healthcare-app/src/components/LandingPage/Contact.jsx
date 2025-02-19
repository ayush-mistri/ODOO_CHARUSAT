import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">
          Have questions? Get in touch with us today!
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" />
                <p className="text-gray-700">+1 234 567 890</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />
                <p className="text-gray-700">support@healthcareapp.com</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />
                <p className="text-gray-700">123 Healthcare Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map (Optional) */}
      <section className="w-full h-80">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509395!2d144.9559283159049!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df6dfd0c5%3A0x5045675218ce7e33!2sHealth%20Care%20Clinic!5e0!3m2!1sen!2sus!4v1633025002462"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
