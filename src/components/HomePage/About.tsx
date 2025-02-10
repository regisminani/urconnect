const About = () => {
    return (
      <section className="bg-white py-12 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <img src="/image1.png" alt="Dashboard" className="w-full max-w-md mx-auto" />
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              UR <img src="image2.png" alt="image after ur" className="ml-16"/> Connect
            </h2>
            <p className="mt-4 text-gray-700 text-md font-light">
              A digital suggestion box is an online platform that allows users to submit, review, and manage feedback. It fosters collaboration and innovation, specifically designed for the University of Rwanda, College of Science and Technology.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  