import React from "react";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-pink-100 via-white to-pink-100 py-16 px-6"
    >
      <div className="container mx-auto text-center">
        {/* عنوان الخبرة */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 animate-fade-in-down">
          Work Experience
        </h2>

        {/* الخبرات العملية */}
        <div className="space-y-8">
          {/* Social Media Manager */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-102 transition-all">
            <h3 className="text-2xl font-semibold text-pink-500">Social Media Manager</h3>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Company:</strong> Sudan Now Journal
            </p>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Duration:</strong> September 2024 - Present
            </p>
            <ul className="list-disc list-inside mt-4 text-left text-gray-700">
              <li>Managing social media platforms and creating engaging content.</li>
              <li>Engaging with followers and creating strategies for online presence.</li>
              <li>Analyzing social media metrics to improve content strategies.</li>
            </ul>
          </div>

          {/* Biomedical Engineer - Alfasher Dialysis Center */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-102 transition-all">
            <h3 className="text-2xl font-semibold text-pink-500">Biomedical Engineer</h3>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Company:</strong> Alfasher Dialysis Center
            </p>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Duration:</strong> January 14 - May 21, 2024
            </p>
            <ul className="list-disc list-inside mt-4 text-left text-gray-700">
              <li>Medical equipment management and maintenance.</li>
              <li>Collaborating with medical teams to ensure equipment functionality.</li>
              <li>Training staff on the proper use of medical devices.</li>
            </ul>
          </div>

          {/* Biomedical Engineer - Al-Damer Hospital */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-102 transition-all">
            <h3 className="text-2xl font-semibold text-pink-500">Biomedical Engineer</h3>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Company:</strong> Al-Damer Hospital
            </p>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Duration:</strong> September 17 - October 21, 2024
            </p>
            <ul className="list-disc list-inside mt-4 text-left text-gray-700">
              <li>Designing and developing medical devices for hospital use.</li>
              <li>Collaborating with medical teams to understand their needs.</li>
              <li>Ensuring the proper installation and maintenance of medical equipment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
