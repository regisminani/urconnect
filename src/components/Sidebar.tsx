import { RiLightbulbFlashFill } from "react-icons/ri";
import { MdPostAdd } from "react-icons/md";
import SidebarRow from "./SidebarRow";
import { IconType } from "react-icons";
import { IoIosChatbubbles } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import Logo from "./Logo";
import { CiStreamOn } from "react-icons/ci";
const Sidebar = () => {
  const pages: { link: string; icon: IconType }[] = [
    { link: "/posts", icon: MdPostAdd },
    { link: "/suggestions", icon: RiLightbulbFlashFill },
    { link: "/messages", icon: IoIosChatbubbles },
    { link: "/groups", icon: HiOutlineUserGroup },
    { link: "/go Live", icon: CiStreamOn },
  ];
  return (
    <div className="fixed sm:relative z-20 right-0 bottom-0 w-full sm:w-fit md:w-44 md:mt-11">
      <div className="hidden ">

        <Logo/>
      </div>
      <div className="bg-[#F3FBFF] p-2 pl-4 pr-4 rounded-2xl w-full sm:w-fit md:w-60 sm:sticky sm:top-24 flex justify-between sm:block">
        {pages.map((page) => (
          <SidebarRow key={page.link} Icon={page.icon} link={page.link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
