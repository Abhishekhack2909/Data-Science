import React from 'react';
const Footer = () => {
  const footerLinks = {
    event: [
      { name: 'About Summit', href: '#about' },
      { name: 'Speakers', href: '#speakers' },
      { name: 'Schedule', href: '#schedule' },
      { name: 'Venue', href: '#venue' },
      { name: 'Registration', href: '#register' }
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Travel Guide', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Code of Conduct', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'Media Kit', href: '#' }
    ]
  };
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/data-science-club-vit-bhopal/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }  
  ];
  const sponsors = [
    { name: 'VIT Bhopal', logo: 'VIT' },
    { name: 'Microsoft', logo: 'MS' },
    { name: 'Google', logo: 'G' },
    { name: 'Amazon', logo: 'AWS' },
    { name: 'IBM', logo: 'IBM' },
    { name: 'Meta', logo: 'META' }
  ];
  return (
    <footer 
      className="relative overflow-hidden mt-8 bg-enhanced"
      style={{
        backgroundImage: `url('/spiderman.jpeg')`,
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
        <div className="py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl drop-shadow-lg">E</span>
                </div>
                <span className="font-display font-bold text-2xl text-white drop-shadow-lg">
                  DataSci Summit
                </span>
              </div>
              <div className="bg-black/60 backdrop-blur-md rounded-xl px-6 py-4 mb-6 border border-white/20 shadow-lg">
                <p className="text-white font-medium leading-relaxed drop-shadow-lg">
                  The premier gathering for data scientists and AI researchers. Join us for three days of 
                  cutting-edge insights, hands-on learning, and professional networking.
                </p>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-6 drop-shadow-lg">Event</h3>
              <ul className="space-y-3">
                {footerLinks.event.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-6 drop-shadow-lg">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-6 drop-shadow-lg">Stay Updated</h3>
              <div className="bg-black/60 backdrop-blur-md rounded-xl px-6 py-4 mb-4 border border-white/20 shadow-lg">
                <p className="text-white font-medium drop-shadow-lg">
                  Get the latest updates on speakers, workshop materials, and exclusive data science resources.
                </p>
              </div>
              <div className="flex flex-col space-y-3 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-colors"
                />
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <ul className="space-y-2">
                {footerLinks.legal.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white/70 text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-12 border-b border-white/10">
          <h3 className="font-display font-bold text-xl text-white text-center mb-8">
            Proudly Supported By
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center justify-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                  <span className="font-bold text-lg">{sponsor.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/50 text-sm">
              © 2025 Data Science Summit. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-white/50 text-sm">
              <span>Made with ❤️ by Abhishek Tripathi for data scientists everywhere</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                <span>Live Event</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};
export default Footer;