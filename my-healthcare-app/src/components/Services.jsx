import React from "react";

function Services() {
  const services = [
    { name: "General Checkup", description: "Comprehensive health assessment" },
    { name: "Specialist Consultation", description: "Expert advice from top specialists" },
    { name: "Mental Health Support", description: "Professional counseling and therapy" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
