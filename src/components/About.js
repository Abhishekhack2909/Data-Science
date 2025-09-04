import React from 'react';
const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "30+ Industry Experts",
      description: "Learn from top data scientists and AI researchers"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "3 Intensive Days",
      description: "72 hours of cutting-edge content and hands-on learning"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Modern Tech Hub",
      description: "State-of-the-art facilities with high-speed computing"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Hands-on Workshops",
      description: "Interactive sessions with real-world datasets"
    }
  ];
  return (
    <section 
      id="about" 
      className="section-padding relative overflow-hidden mt-8"
      style={{
        backgroundImage: `url('/123.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-32 right-32 w-4 h-4 bg-accent-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-32 w-6 h-6 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-64 left-64 w-3 h-3 bg-secondary-400 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-white font-medium mb-6 shadow-2xl">
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
            About the Event
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
            <span className="bg-black/60 px-4 py-2 rounded-2xl">Where Data</span>
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent mt-2" style={{textShadow: 'none'}}>Meets Innovation</span>
          </h2>
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto mb-6">
            <p className="text-xl text-white leading-relaxed">
            The Data Science Summit is the premier gathering for data scientists, ML engineers, and AI researchers. 
            Join us for three days of cutting-edge insights, hands-on workshops, and networking with industry leaders.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 hover:border-primary-200"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't miss your chance to be part of the most comprehensive data science event of the year. 
              Early bird registration is now open!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View Registration Options
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
                Download Agenda
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
export default About;