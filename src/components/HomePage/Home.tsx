import { useEffect, useState } from "react";
import About from './About';
import Suggestion from "./Suggestion";

const Home: React.FC = () => {
  // To track animation states
  const [animationClass, setAnimationClass] = useState<string>('opacity-0');
  
  // Add animation on load (fade-in effect)
  useEffect(() => {
    setTimeout(() => {
      setAnimationClass('opacity-100 transition-opacity duration-1000');
    }, 100);
  }, []);

  return (
    <div>
      {/* Inline Style for Animations */}
      <style>
        {`
          @keyframes slideInFromLeft {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }

          @keyframes slideInFromRight {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0); }
          }

          @keyframes moveIcon1 {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }

          @keyframes moveIcon2 {
            0% { transform: translateY(0); }
            50% { transform: translateY(20px); }
            100% { transform: translateY(0); }
          }

          .animate-slide-left {
            animation: slideInFromLeft 1s ease-out forwards;
          }

          .animate-slide-right {
            animation: slideInFromRight 1s ease-out forwards;
          }

          .animate-move {
            animation: moveIcon1 2s infinite ease-in-out;
          }

          .animate-move-2 {
            animation: moveIcon2 2s infinite ease-in-out;
          }
        `}
      </style>

      <section className="container mt-10 mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className={`text-center md:text-left md:w-1/2 ${animationClass} animate-slide-left`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            UR <img src="image2.png" alt="image after ur" className="ml-16"/> Connect
          </h2>
          <p className="mt-4 text-gray-700 text-md font-light">
            Welcome to Digital Suggestion Box for the University of Rwanda, designed to revolutionize the way we share and manage feedback, fostering an environment of collaboration and innovation.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-full shadow hover:bg-blue-700">
            Find out more
          </button>
        </div>
        <div className={`md:w-1/2 relative bg-cover bg-center ${animationClass} animate-slide-right`} 
             style={{ 
               backgroundImage: 'url(/image.png)', 
               backgroundSize: 'contain',  // Ensures the image is fully visible
               backgroundPosition: 'center',  // Centers the background image
               backgroundRepeat: 'no-repeat',  // Prevents the background from repeating
               height: '100%',               // Makes sure the height of the section fits
               minHeight: '300px'           // Adjust the minimum height if needed
             }}>
          <img src="/stud.png" alt="Person with mobile" className="w-[60%] max-w-md mx-auto relative z-10" />
        </div>
      </section>

      {/* About and Suggestion Sections */}
      <About />
      <Suggestion />

      {/* Floating Suggestion Icons */}
      <div className="absolute top-10 left-10 animate-move">
        <svg className="w-12 h-12 text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3h2a2 2 0 012 2v16a2 2 0 01-2 2h-2a2 2 0 01-2-2V5a2 2 0 012-2z" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 animate-move-2">
        <svg className="w-12 h-12 text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
