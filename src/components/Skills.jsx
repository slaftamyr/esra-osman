import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-8 bg-gradient-to-r from-pink-50 to-white"
    >
      <div className="container mx-auto text-center">
        {/* عنوان المهارات */}
        <h2 className="text-4xl font-extrabold text-gray-700 mb-12 animate__animated animate__fadeIn">
          My Skills
        </h2>

        {/* المهارات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* مهارة 1 */}
          <div className="transition-all transform hover:scale-105 hover:shadow-xl bg-pink-100 p-8 rounded-lg shadow-md border border-transparent hover:border-pink-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">C++ Basics</h3>
            <p className="text-gray-600">
              Basic understanding of C++ programming language, focusing on core concepts and syntax.
            </p>
          </div>

          {/* مهارة 2 */}
          <div className="transition-all transform hover:scale-105 hover:shadow-xl bg-pink-100 p-8 rounded-lg shadow-md border border-transparent hover:border-pink-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h3>
            <p className="text-gray-600">Arabic: Native</p>
            <p className="text-gray-600">English: B1 Level</p>
          </div>

          {/* مهارة 3 */}
          <div className="transition-all transform hover:scale-105 hover:shadow-xl bg-pink-100 p-8 rounded-lg shadow-md border border-transparent hover:border-pink-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Social Skills</h3>
            <ul className="list-disc pl-6 text-left text-gray-600">
              <li>Adaptability</li>
              <li>Time Management</li>
              <li>Stress Management</li>
              <li>Leadership</li>
              <li>Collaboration</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
