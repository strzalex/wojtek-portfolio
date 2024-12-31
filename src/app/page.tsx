import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <header className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Wojtek Strzałkowski</h1>
          <p className="text-xl text-blue-600 mb-6">AI Product Leader | Product Strategy Consultant | Gaming Industry Expert</p>
          <p className="text-lg text-gray-600">
            Transforming businesses through AI-driven product innovation and strategic leadership
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        {/* Current Role */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Currently</h2>
            <p className="text-lg text-gray-700 mb-4">
              Product @ GOG.com (CD PROJEKT GROUP)
            </p>
            <p className="text-gray-600">
              Leading game preservation initiatives and digital distribution innovation
            </p>
          </div>
        </section>

        {/* Key Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Leadership Experience</h2>
          <div className="grid gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-2 text-blue-600">AI Product Leadership</h3>
              <ul className="space-y-4 text-gray-700">
                <li>• Led ML product development at Booking.com, driving significant cost savings and revenue growth</li>
                <li>• Spearheaded AI-driven solutions at Allegro, enhancing user experience and platform efficiency</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Product Strategy & Leadership</h3>
              <ul className="space-y-4 text-gray-700">
                <li>• Head of Product at GOG.com, leading game preservation initiatives</li>
                <li>• Led WeSchool's product strategy as Head of Product, scaling Italy's leading EdTech platform</li>
                <li>• Managed cross-functional product teams at Million Pugs, implementing OKR framework and data-driven approaches</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consulting & Teaching */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Consulting & Academic Experience</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Product Strategy Consultant</h3>
              <p className="text-gray-700">
                Founded Awayteam.gg, providing strategic consulting for companies like Displate (2.3M customers).
                Specializing in Search, Recommendations, and AI product strategy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Guest Lecturer</h3>
              <p className="text-gray-700">
                AI in Business at SGH Warsaw School of Economics, sharing practical insights on AI implementation in digital products
              </p>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 text-blue-700 p-4 rounded-lg text-center font-semibold">AI/ML Products</div>
            <div className="bg-blue-50 text-blue-700 p-4 rounded-lg text-center font-semibold">Product Strategy</div>
            <div className="bg-blue-50 text-blue-700 p-4 rounded-lg text-center font-semibold">Gaming Industry</div>
            <div className="bg-blue-50 text-blue-700 p-4 rounded-lg text-center font-semibold">Team Leadership</div>
            <div className="bg-blue-50 text-blue-700 p-4 rounded-lg text-center font-semibold">EdTech</div>
            <div className="bg-blue-50 text-blue-700 p-4 rounded-lg text-center font-semibold">Consulting</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;