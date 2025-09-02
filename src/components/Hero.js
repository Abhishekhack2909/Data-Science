import React, { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set event date (30 days from now for demo)
  const eventDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url('/spiderman.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Additional floating elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-6 h-6 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-64 left-64 w-3 h-3 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="animate-fade-in">
          {/* Promotional Banner */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 mb-4 animate-pulse">
            <span className="text-accent-400 text-sm font-semibold">🚀 Early Bird Registration - Save 30%!</span>
            <span className="ml-2 text-white/90 text-sm font-medium animate-bounce">Limited Time Offer</span>
          </div>

          {/* Event Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 mb-8 animate-bounce-slow">
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-white/90 font-medium">March 20-22, 2025 • VIT Bhopal University</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 text-shadow animate-slide-up">
            <span className="block">DATA</span>
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent animate-gradient bg-300%">
              SCIENCE
            </span>
            <span className="block">SUMMIT</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Where data meets innovation, insights drive decisions, and the future of AI is shaped.
            Join the ultimate gathering of data scientists and ML engineers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary text-lg px-12 py-4">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                Register Now
              </span>
            </button>
            <button className="btn-secondary text-lg px-12 py-4">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Preview
              </span>
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="glass-effect p-8 rounded-3xl max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-white/90 text-lg font-semibold mb-6">Event Starts In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2 border border-white/20">
                    <span className="text-3xl md:text-4xl font-bold text-white font-display">
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-white/70 text-sm uppercase tracking-wider font-medium">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;