import { useState } from "react";
import UserIcon from "./UserIcon";
import Logo from "./Logo";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import fetchUser from "../hooks/fetchUser";
import { MdOutlineNotifications } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { user } = fetchUser();
  console.log("The USER", user);
  const handleLogout = () => {
    toast.success("Logged out Successfully!");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex z-10 sticky top-0 bg-white md:p-1 items-center justify-between ">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <div className="relative" title="Notifications">
          <div className="absolute right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full " />
          <MdOutlineNotifications className="text-[#075985]" size={25} />
        </div>

        <div onClick={() => setShow(!show)} className="w-fit justify-self-end">
          <div>
            <div className="mr-3 cursor-pointer">
              <UserIcon username={user.email} />
            </div>
            {show && (
              <div onClick={() => setShow(false)} className="fixed inset-0">
                <div className="absolute top-8 right-1 mt-1 p-5  rounded-xl bg-white shadow-md shadow-black/25 border border-neutral-100">
                  <div className="flex gap-1">
                    <UserIcon username={user.firstName} />
                    <div className="text-sm">
                      <p className="font-semibold">{user.otherName}</p>
                      <p className="font-medium text-[#9C9C9C]  -mt-[5px]">
                        @{user.username}
                      </p>
                    </div>
                  </div>
                  <div className="mt-7 space-y-2">
                    <div className="hover:bg-[#E0F2FE] rounded-md cursor-pointer">
                      <Link
                        to={"/suggestions/my-suggestions"}
                        className="text-sm font-medium p-1 pl-2 pr-10 text-nowrap"
                      >
                        My Suggestions
                      </Link>
                    </div>
                    <div className="hover:bg-[#E0F2FE] rounded-md cursor-pointer w-full">
                      <p className="text-sm font-medium p-1 pl-2 pr-10 text-nowrap">
                        Settings
                      </p>
                    </div>
                    <div className="hover:bg-[#E0F2FE] rounded-md cursor-pointer">
                      <p
                        onClick={handleLogout}
                        className="text-sm font-medium p-1 pl-2 pr-10 text-nowrap"
                      >
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
    </div>
  );
};

export default Header;
