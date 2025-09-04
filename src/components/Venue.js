import React from 'react';

const Venue = () => {
  const venueFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "State-of-the-Art Facilities",
      description: "Modern conference halls with cutting-edge AV technology"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Prime Tokyo Location",
      description: "Easy access via multiple train lines and airports"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "High-Speed WiFi",
      description: "Complimentary ultra-fast internet throughout the venue"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Premium Catering",
      description: "Gourmet meals and refreshments throughout the event"
    }
  ];

  const transportOptions = [
    {
      mode: "Campus Shuttle",
      details: "Free shuttle from main campus (10 min ride)",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      mode: "Public Transit",
      details: "Metro Line 101 - Tech Hub Station (2 min walk)",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      mode: "Airport",
      details: "SFO Express - 45 min from San Francisco Airport",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      mode: "Parking",
      details: "Free parking available in Tech Hub garage",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-1" />
        </svg>
      )
    }
  ];

  const nearbyHotels = [
    {
      name: "Tech Hub Grand Hotel",
      distance: "2 min walk",
      rating: 5,
      price: "₹24,999/night",
      features: ["Luxury suites", "Spa", "24/7 room service"]
    },
    {
      name: "Campus Inn & Suites",
      distance: "5 min walk",
      rating: 4,
      price: "₹14,999/night",
      features: ["Business center", "Gym", "Restaurant"]
    },
    {
      name: "Student Lodge",
      distance: "10 min walk",
      rating: 3,
      price: "₹7,499/night",
      features: ["Free WiFi", "Breakfast", "Study rooms"]
    }
  ];

  return (
    <section
      id="venue"
      className="section-padding relative overflow-hidden mt-8 bg-enhanced"
      style={{
        backgroundImage: `url('/tanjiro-kamado-5120x2880-23649.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-32 right-32 w-4 h-4 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-6 h-6 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-64 left-64 w-3 h-3 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-white font-semibold mb-8 shadow-2xl">
            <span className="w-3 h-3 bg-accent-400 rounded-full mr-4 animate-pulse shadow-lg"></span>
            Venue & Location
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9)' }}>
            <span className="drop-shadow-2xl">Modern Venue in the</span>
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent drop-shadow-2xl">VIT Bhopal University</span>
          </h2>
          <div className="bg-black/70 backdrop-blur-md rounded-2xl px-8 py-6 mb-12 max-w-4xl mx-auto shadow-2xl border border-white/20">
            <p className="text-xl text-white font-medium leading-relaxed drop-shadow-lg">
              Join us at the state-of-the-art University Tech Hub, a cutting-edge facility
              designed for innovation and learning in the heart of the campus.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div
              className="h-96 rounded-3xl bg-gradient-to-br from-primary-400 to-secondary-400 mb-8 relative overflow-hidden group"
              style={{
                backgroundImage: `
                  linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%),
                  url('/comic-books-bg.jpg')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-display font-bold text-2xl mb-2">VIT Bhopal University</h3>
                <p className="text-white/90">Kothri Kalan, Sehore, Madhya Pradesh 466114</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {venueFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0234567890123!2d76.8370213!3d23.0716475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20-%20%E0%A4%AD%E0%A5%8B%E0%A4%AA%E0%A4%BE%E0%A4%B2!5e0!3m2!1sen!2sin!4v1693123456789!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl mb-8 shadow-lg"
            ></iframe>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Getting There</h3>
              <div className="space-y-4">
                {transportOptions.map((option, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{option.mode}</h4>
                      <p className="text-gray-600 text-sm">{option.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-display font-bold text-3xl text-white text-center mb-12 text-shadow">
            Recommended Accommodations
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {nearbyHotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display font-bold text-xl text-gray-900">{hotel.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < hotel.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-600 font-semibold">{hotel.distance}</span>
                  <span className="text-2xl font-bold text-gray-900">{hotel.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {hotel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl mb-6">Need Help Planning Your Visit?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our event support team is here to assist with travel arrangements,
              accommodations, and any accessibility requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Support
                </span>
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Travel Guide
                </span>
              </button>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Venue;