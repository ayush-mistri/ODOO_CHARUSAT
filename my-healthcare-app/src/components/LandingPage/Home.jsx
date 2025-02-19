import React from "react";
import { Shield, Share2, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-l from-blue-100 to-blue-500 px-6 text-center md:text-left">
        <div className="md:w-1/2 flex justify-center">
          <img src="/Home_image1.png" className="w-full max-w-md md:max-w-lg lg:max-w-xl" alt="Healthcare" />
        </div>
        <div className="md:w-1/2 px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins bg-gradient-to-r from-green-600 to-blue-700 text-transparent bg-clip-text mb-4">
            Welcome to HealthCare App
          </h1>
          <p className="text-lg md:text-2xl text-black mb-6 max-w-2xl">
            Your one-stop solution for all healthcare needs. Book appointments, consult doctors, and manage your health with ease.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link to="/appointments" className="gradient-btn px-6 py-3 text-white font-semibold bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition">
              Book an Appointment
            </Link>
            <Link to="/services" className="px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Explore Services →
            </Link>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-white px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins">
          Why Choose Our HealthCare App?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Secure Health Records",
              description: "Your medical data is encrypted and safely stored for seamless access and privacy protection.",
            },
            {
              icon: Share2,
              title: "Easy Doctor Consultations",
              description: "Book and manage doctor appointments with ease using our intuitive platform.",
            },
            {
              icon: Smartphone,
              title: "24/7 Accessibility",
              description: "Access your health records, appointments, and prescriptions anytime, anywhere.",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-blue-500/10 to-green-500/10 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins">
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              role: "Patient",
              content: "This app has made booking appointments so easy! The video consultation feature is amazing.",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
            },
            {
              name: "Dr. Jane Smith",
              role: "Doctor",
              content: "Managing my patients has never been more efficient. This platform is a game-changer.",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
            },
            {
              name: "Sarah Lee",
              role: "User",
              content: "I love how I can store my prescriptions and access them anytime! Highly recommend.",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-4 border-blue-500 mb-4" />
              <h3 className="font-bold text-lg md:text-xl">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
              <p className="text-gray-600 italic text-sm md:text-base">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
