import { useState, useEffect } from 'react';
import vanRath from '../assets/vanrath.jpeg';
import vanRath1 from '../assets/vanrath-1.jpeg';
import { FaGithubSquare, FaTelegram, FaFacebook } from 'react-icons/fa';

const Hero = () => {
  // Image cycling state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Array of images
  const images = [
    vanRath,
    vanRath1,
  ];
  
  // Image cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  // Entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 py-24 min-h-screen flex items-center relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-50 animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-cyan-200 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-20 right-1/3 w-12 h-12 bg-purple-200 rounded-full opacity-30 animate-spin"></div>
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-pink-200 rounded-full opacity-25 animate-bounce"></div>
      
      {/* Floating particles using only Tailwind animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-emerald-300 rounded-full opacity-60 ${
              i % 3 === 0 ? 'animate-bounce' : 
              i % 3 === 1 ? 'animate-pulse' : 'animate-ping'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className='align-element grid md:grid-cols-2 items-center gap-12 relative z-10'>
        {/* Text content with entrance animations */}
        <article className={`space-y-6 transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
          {/* Greeting with slide-in animation */}
          <div className={`inline-block transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          {/* Main heading with animated gradient text */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className='text-6xl lg:text-7xl font-bold tracking-tight leading-tight'>
              I'm{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 via-cyan-500 via-purple-500 via-pink-500 to-emerald-600 bg-clip-text text-transparent bg-[length:300%_300%] animate-pulse">
                Loeuk Vanrath
              </span>
            </h1>
          </div>
          
          {/* Subtitle with animated fade-in and gradient accent */}
          <div className={`space-y-2 transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className='text-2xl lg:text-3xl font-medium animate-pulse'>
              <span className="bg-gradient-to-r from-slate-700 via-emerald-600 to-slate-700 bg-clip-text text-transparent bg-[length:200%_200%]">
                Junior Web Developer
              </span>
            </p>
            <p className='text-lg text-slate-600 leading-relaxed max-w-md'>
              Passionate about creating{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent animate-pulse">
                beautiful
              </span>
              ,{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                functional
              </span>
              , and user-friendly web experiences with modern technologies.
            </p>
          </div>
          
          {/* Enhanced social links with stagger animation */}
          <div className={`flex gap-x-4 mt-8 transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              { icon: FaGithubSquare, color: 'hover:text-black', label: 'GitHub', url: 'https://github.com/' },
              { icon: FaTelegram, color: 'hover:text-blue-500', label: 'Telegram', url: 'https://t.me/lvanrath' },
              { icon: FaFacebook, color: 'hover:text-blue-600', label: 'Facebook', url: 'https://www.facebook.com/share/1B7k42Z7cK/'},
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.url}
                  className="group relative p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:rotate-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className={`h-6 w-6 text-slate-600 ${social.color} transition-all duration-300 group-hover:scale-110`} />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 pointer-events-none">
                    {social.label}
                  </div>
                </a>
              );
            })}
          </div>
          
          {/* Call to action buttons with animated gradients */}
          <div className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a 
              href="#projects" 
              className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-[length:200%_200%] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center animate-pulse overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </a>
            <a 
              href="#contact" 
              className="relative border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 text-center hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </a>
          </div>
        </article>
        
        {/* Enhanced image section with cycling */}
        <article className={`hidden md:block relative transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="relative">
            {/* Animated decorative backgrounds using Tailwind animations */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl transform rotate-6 opacity-20 animate-spin"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-emerald-500 rounded-3xl transform -rotate-6 opacity-20 animate-ping"></div>
            
            {/* Image cycling container with animated border */}
            <div className="relative p-1 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-bounce bg-gradient-to-r from-emerald-500 via-teal-500 via-cyan-500 via-purple-500 to-emerald-500 bg-[length:300%_300%] animate-pulse">
              <div className="bg-white p-2 rounded-3xl">
                <div className="relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden">
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Portfolio image ${index + 1}`} 
                    className={`absolute inset-0 h-full w-full object-cover rounded-2xl transition-all duration-1000 ${
                      index === currentImageIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                
                  {/* Image overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  
                  {/* Cycling indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>
              </div>
              
              {/* Image indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
              
              {/* Floating badge with counter animation */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-lg animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-xs">Year Experience</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced floating elements using Tailwind animations */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 p-3 rounded-full shadow-lg animate-bounce">
              💻
            </div>
            <div className="absolute top-1/2 -right-8 bg-pink-400 text-pink-900 p-3 rounded-full shadow-lg animate-spin">
              ⚡
            </div>
            <div className="absolute bottom-1/4 -left-6 bg-purple-400 text-purple-900 p-2 rounded-full shadow-lg animate-pulse">
              🚀
            </div>
            <div className="absolute top-1/4 left-1/2 bg-blue-400 text-blue-900 p-2 rounded-full shadow-lg animate-ping">
              ⭐
            </div>
          </div>
          
          {/* Navigation arrows for manual cycling */}
          <button
            onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </article>
      </div>
    </div>
  );
};

export default Hero;