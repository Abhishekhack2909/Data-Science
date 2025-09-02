import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      name: "Tanjiro Kamado",
      title: "Chief Data Scientist at TechCorp",
      specialty: "Machine Learning & AI Ethics",
      image: "/demon-slayer-3840x5270-10716.jpg",
      bio: "Leading researcher in ethical AI with 15+ years experience in ML model development and deployment."
    },
    {
      name: "Monkey D Luffy",
      title: "Stanford AI Research Lab",
      specialty: "Deep Learning & Neural Networks",
      image: "/one-piece-luffy-gear-5-3840x4163-10747.jpg",
      bio: "Pioneer in deep learning architectures with groundbreaking research in computer vision and NLP."
    },
    {
      name: "spider Man",
      title: "Senior ML Engineer at Google",
      specialty: "MLOps & Production Systems",
      image: "/spiderman2.jpg",
      bio: "Expert in scaling ML systems and building robust data pipelines for enterprise applications."
    }
  ];

  return (
    <section 
      id="speakers" 
      className="section-padding relative overflow-hidden mt-8 bg-enhanced"
      style={{
        backgroundImage: `url('/demon-slayer-3840x5270-10716.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-accent-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-32 w-6 h-6 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-64 left-64 w-3 h-3 bg-secondary-400 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white font-medium mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
            Featured Speakers
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 text-shadow">
            Meet the
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow">
            Learn from the most accomplished data scientists and AI researchers. Each speaker brings cutting-edge insights 
            from their groundbreaking work in machine learning and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 hover:border-primary-200 hover:bg-white"
            >
              {/* Speaker Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)), url('${speaker.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Speaker Info */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-sm text-secondary-600 font-medium">
                    {speaker.specialty}
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {speaker.bio}
                </p>

                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-3xl max-w-2xl mx-auto border border-gray-200">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
              Want to Share Your Research?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for innovative data scientists to share their insights and breakthroughs.
            </p>
            <button className="btn-primary">
              Apply to Speak
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;