import { useEffect, useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { HiOutlineChat } from "react-icons/hi";
import UserIcon from "../UserIcon.tsx";
import Footer from "./Footer.tsx";
const Home: React.FC = () => {
  const [animationClass, setAnimationClass] = useState<string>("opacity-0");

  useEffect(() => {
    setTimeout(() => {
      setAnimationClass("opacity-100 transition-opacity duration-1000");
    }, 100);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
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
        <div
          className={`text-center md:text-left md:w-1/2 ${animationClass} animate-slide-left`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#006991]">
            UR <img src="image2.png" alt="image after ur" className="ml-16" />{" "}
            Connect
          </h2>
          <p className="mt-4 text-gray-700 text-md font-light">
            Welcome to Digital Suggestion Box for the University of Rwanda,
            designed to revolutionize the way we share and manage feedback,
            fostering an environment of collaboration and innovation.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#006991] text-white rounded-full shadow hover:bg-blue-700">
            Find out more
          </button>
        </div>
        <div
          className={`md:w-1/2 relative bg-cover bg-center ${animationClass} animate-slide-right`}
          style={{
            backgroundImage: "url(/image.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            minHeight: "300px",
          }}
        >
          <img
            src="/stud.png"
            alt="Person with mobile"
            className="w-[60%] max-w-md mx-auto relative z-10"
          />
        </div>
      </section>

      <section id="about" className="bg-white py-12 mt-14">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <img
              src="/image1.png"
              alt="Dashboard"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#006991]">
              UR <img src="image2.png" alt="image after ur" className="ml-16" />{" "}
              Connect
            </h2>
            <p className="mt-4 text-gray-700 text-md font-light">
              A digital suggestion box is an online platform that allows users
              to submit, review, and manage feedback. It fosters collaboration
              and innovation, specifically designed for the University of
              Rwanda, College of Science and Technology.
            </p>
          </div>
        </div>
      </section>



      <div id="suggestion" className="bg-[#F7F7F7] mx-32 mt-10  shadow-md shadow-black/25 rounded-xl p-2 pl-4 pr-4">
        <div className="flex gap-1 mt-4">
          <UserIcon v />
          <div className="text-smc">
            <p className="font-semibold">2220***23</p>
            <p className="font-medium text-[#9C9C9C]  -mt-[5px]">@mrndi</p>
          </div>
        </div>
        <p className="text-gray-700 text-md font-light mt-8">
          I am writing to request an increase in the monthly living allowance
          for students at the University of Rwanda from RWF 40,000 to RWF
          100,000. The current allowance has not kept pace with the rising costs
          of living, including significant increases in food and accommodation
          prices, which have made it increasingly difficult for students to meet
          their basic needs. Many students are struggling to afford essentials,
          which negatively impacts their academic performance and overall
          well-being. An adjustment to RWF 100,000 would provide much-needed
          financial support, allowing students to focus on their studies without
          the burden of financial stress. Thank you for considering this
          important request.
        </p>

        <div className="mt-8 flex items-center gap-12 ">
          <p className="text-sm font-[300] text-neutral-400 ml-1">
            11:30PM • 14/11/2024 •{" "}
            <span className="font-bold text-black">120</span> Views
          </p>
          {/* Tags */}
          <div className="sm:flex gap-3 space-y-2 sm:space-y-0">
            <div className="bg-neutral-300 w-fit p-1 pl-7 pr-7 rounded-full">
              <p className="text-neutral-500 font-[500] text-xs">Principal</p>
            </div>
            <div className="bg-neutral-300 w-fit p-1 pl-7 pr-7 rounded-full">
              <p className="text-neutral-500 font-[500] text-xs">Dean</p>
            </div>
          </div>
        </div>
        <hr className="mt-2 text-neutral-300" />
        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm font-[300] text-neutral-400 ml-1">
            <span className="font-bold text-black">98</span> Upvotes
          </p>
          <p className="text-sm font-[300] text-neutral-400 ml-1">
            <span className="font-bold text-black">61</span> Comments
          </p>
        </div>
        <hr className="mt-2 text-neutral-300" />
        {/* Upvote/Comment */}
        <div className="flex items-center ml-5 mt-2 mb-1 gap-20">
          <button type="button">
            <IoArrowUpCircleOutline className="w-7 h-7 text-neutral-500  active:scale-95 cursor-pointer" />
          </button>
          <button>
            <HiOutlineChat className="w-7 h-7 text-neutral-500 stroke-[1.5px] active:scale-95 cursor-pointer" />
          </button>
        </div>
      </div>

    
      <Footer/>
    </div>
  );
};

export default Home;
