import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate()
    return (
      <div className="flex h-screen items-center justify-center">
          <div className="w-fit mx-auto h-fit text-center">
  
        <h1 className="text-[#00628B] font-bold text-5xl">404</h1>
        <p className="text-xl font-bold">Page not found!</p>
        <div onClick={()=>navigate(-1)} className="flex items-center w-fit mx-auto text-sm mt-10 text-[#00628B] cursor-pointer">
        <RiArrowGoBackLine />
        <p >Go back</p>
        </div>
          </div>
      </div>
    );
  }
  
  export default NotFound;
  