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
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/30 mb-6 animate-pulse shadow-2xl">
            <span className="text-accent-400 text-sm font-bold drop-shadow-lg">🚀 Early Bird Registration - Save 30%!</span>
            <span className="ml-3 text-white text-sm font-semibold animate-bounce drop-shadow-lg">Limited Time Offer</span>
          </div>

          {/* Event Badge */}
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/30 mb-10 animate-bounce-slow shadow-2xl">
            <span className="w-3 h-3 bg-accent-400 rounded-full mr-4 animate-pulse shadow-lg"></span>
            <span className="text-white font-semibold drop-shadow-lg">March 20-22, 2025 • VIT Bhopal University</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 animate-slide-up" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9)' }}>
            <span className="block drop-shadow-2xl">DATA</span>
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-2xl">
              SCIENCE
            </span>
            <span className="block drop-shadow-2xl">SUMMIT</span>
          </h1>

          {/* Tagline */}
          <div className="bg-black/70 backdrop-blur-md rounded-2xl px-8 py-6 mb-12 max-w-4xl mx-auto shadow-2xl border border-white/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-lg">
              Where data meets innovation, insights drive decisions, and the future of AI is shaped.
              Join the ultimate gathering of data scientists and ML engineers.
            </p>
          </div>

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
          <div className="bg-black/80 backdrop-blur-md p-10 rounded-3xl max-w-4xl mx-auto animate-slide-up shadow-2xl border border-white/30" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-white text-xl font-bold mb-8 drop-shadow-lg">Event Starts In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-3 border border-white/30 shadow-xl">
                    <span className="text-4xl md:text-5xl font-bold text-white font-display drop-shadow-lg">
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-white text-sm uppercase tracking-wider font-semibold drop-shadow-lg">
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