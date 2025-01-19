import React from "react";

function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-pink-100 via-white to-pink-100 py-16 px-6"
    >
      <div className="container mx-auto text-center">
      
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug animate-fade-in-down mb-8">
          Hello! I'm <span className="text-pink-700">Esra Osman</span>, 
          a fourth-year Biomedical Engineering student and a passionate 
          <span className="text-pink-700"> Social Media Manager</span>. 
         
        </p>

 
        <a
          href="https://wa.me/249969063700?text=Hello%20Esra,%20I%20would%20like%20to%20connect%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-700 text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-pink-800 hover:scale-105 transition-transform"
        >
          Contact Me 
        </a>

        
        <div className="mt-16">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 text-left">
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>University:</strong> Sudan University of Science and Technology
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              <strong>Field of Study:</strong> Biomedical Engineering
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              <strong>Year:</strong> Fourth Year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
