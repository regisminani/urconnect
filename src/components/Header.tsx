import { useState } from "react";
import UserIcon from "./UserIcon";
import Logo from "./Logo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import fetchUser from "../hooks/fetchUser";

const Header = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const {user} = fetchUser()
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
            <UserIcon username={user.username}/>
          </div>
          {show && (
            <div onClick={()=>setShow(false)} className="fixed inset-0">

            <div className="absolute top-8 right-1 mt-1 p-5  rounded-xl bg-white shadow-md shadow-black/25 border border-neutral-100">
              <div className="flex gap-1">
                <UserIcon username={user.username}/>
                <div className="text-sm">
                  <p className="font-semibold">{user.regNo}</p>
                  <p className="font-medium text-[#9C9C9C]  -mt-[5px]">
                    @{user.username}
                  </p>
                </div>
              </div>
              <div className="mt-7 space-y-2">
                <div className="hover:bg-[#E0F2FE] rounded-md cursor-pointer">
                  <p className="text-sm font-medium p-1 pl-2 pr-10 text-nowrap">
                    My Suggestions
                  </p>
                </div>
                <div className="hover:bg-[#E0F2FE] rounded-md cursor-pointer">
                  <p className="text-sm font-medium p-1 pl-2 pr-10 text-nowrap">
                    Notifications
                  </p>
                </div>
                <div className="hover:bg-[#E0F2FE] rounded-md cursor-pointer w-full">
                  <p className="text-sm font-medium p-1 pl-2 pr-10 text-nowrap">
                    Settings
                  </p>
                </div>
                <div className="hover:bg-[#E0F2FE] rounded-md cursor-pointer">
                  <p onClick={handleLogout} className="text-sm font-medium p-1 pl-2 pr-10 text-nowrap">
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
