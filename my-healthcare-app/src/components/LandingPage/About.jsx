import React from "react";

const About = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
              At <span className="font-semibold">HealthCareApp</span>, we are committed to providing seamless healthcare solutions. Our platform helps you connect with doctors, book appointments, and manage your health with ease.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="/Home_image1.png"
              alt="About Us"
              className="w-80 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="p-6 bg-blue-100 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to revolutionize healthcare access by providing a user-friendly platform that bridges the gap between patients and doctors.
            </p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              We envision a world where healthcare is easily accessible to everyone, ensuring a healthier and happier society.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. John Doe",
                role: "Chief Medical Officer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
              },
              {
                name: "Sarah Johnson",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150",
              },
              {
                name: "Michael Lee",
                role: "UI/UX Designer",
                image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=150&h=150",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
