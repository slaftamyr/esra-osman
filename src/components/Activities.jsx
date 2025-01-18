import React from "react";

function Activities() {
  return (
    <section
      id="activities"
      className="bg-gradient-to-r from-pink-100 via-white to-pink-100 py-16 px-6"
    >
      <div className="container mx-auto text-center">
        {/* عنوان النشاطات */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 animate-fade-in-down">
      Activities
        </h2>

   
        <div className="space-y-8">
       
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-102 transition-all">
            <h3 className="text-2xl font-semibold text-pink-500">Volunteer</h3>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Organization:</strong> Takaful Organization
            </p>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Year:</strong> 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
