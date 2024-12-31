import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Wojtek Strzałkowski</h1>
          <p className="text-xl mb-4">Product Leader | AI Expert | Gaming Industry Professional</p>
          <p className="text-gray-600">
            Currently Product at GOG.com (CD PROJEKT GROUP)
          </p>
        </section>

        {/* Experience Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Product @ GOG.com</h3>
              <p className="text-gray-600">Jul 2024 - Present</p>
              <p>Leading product initiatives in gaming preservation and digital distribution</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Guest Lecturer | AI in Business</h3>
              <p className="text-gray-600">SGH Warsaw School of Economics</p>
              <p>Sharing expertise in AI applications for digital products</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Head of Product @ WeSchool</h3>
              <p className="text-gray-600">Mar 2023 - May 2024</p>
              <p>Led product strategy for Italy's leading EdTech startup</p>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Game Preservation Initiative</h3>
              <p>Led the development of GOG Game Preservation Program, ensuring classic games remain playable on modern systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Product Strategy Consulting</h3>
              <p>Provided actionable recommendations for Displate's search and recommendations, impacting 2.3M customers</p>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded">Product Strategy</div>
            <div className="bg-gray-100 p-4 rounded">AI/ML Products</div>
            <div className="bg-gray-100 p-4 rounded">Gaming Industry</div>
            <div className="bg-gray-100 p-4 rounded">Team Leadership</div>
            <div className="bg-gray-100 p-4 rounded">Product Coaching</div>
            <div className="bg-gray-100 p-4 rounded">EdTech</div>
          </div>
        </section>
      </div>
    </main>
  );
}
