import { useState } from "react";
import UserIcon from "./UserIcon";
import Logo from "./Logo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleLogout = () => {
    toast.success('Logged out Successfully!');
    localStorage.removeItem("token");
    navigate("/login"); 
  };
  return (
    <div className="flex z-10 sticky top-0 bg-white bordb md:p-1 items-center justify-between ">
      <div>
        <Logo />
      </div>
      <div
        onClick={() => setShow(!show)}
        className="w-fit justify-self-end"
      >
        <div>
          <div className="mr-3 cursor-pointer">
            <UserIcon />
          </div>
          {show && (
            <div onClick={()=>setShow(false)} className="fixed inset-0">

            <div className="absolute top-8 right-1 mt-1 p-2 rounded-xl bg-white shadow-md shadow-black/25 ">
              <div className="flex gap-1">
                <UserIcon />
                <div className="text-sm">
                  <p className="font-semibold">222022317</p>
                  <p className="font-medium text-[#9C9C9C]  -mt-[5px]">
                    @user-234
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="hover:bg-[#E0F2FE] cursor-pointer">
                  <p className="text-sm font-semibold pl-2 pr-3 text-nowrap">
                    My Suggestions
                  </p>
                </div>
                <div className="hover:bg-[#E0F2FE] cursor-pointer">
                  <p className="text-sm font-semibold pl-2 pr-3 text-nowrap">
                    Notifications
                  </p>
                </div>
                <div className="hover:bg-[#E0F2FE] cursor-pointer">
                  <p onClick={handleLogout} className="text-sm font-semibold pl-2 pr-3 text-nowrap">
                    Logout
                  </p>
                </div>
              </div>
              <p className="text-[9px] pl-3 mt-5 text-neutral-400">
                Trimester Credits: 4/5
              </p>

            </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Header;
