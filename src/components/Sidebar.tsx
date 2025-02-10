import { RiLightbulbFlashFill } from "react-icons/ri";

import SidebarRow from "./SidebarRow";
import { IconType } from "react-icons";
import { IoIosChatbubbles } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import Logo from "./Logo";
const Sidebar = () => {
  const pages: { link: string; icon: IconType }[] = [
    { link: "/suggestions", icon: RiLightbulbFlashFill },
    { link: "/messages", icon: IoIosChatbubbles },
    { link: "/groups", icon: HiOutlineUserGroup },
  ];
  return (
    <div className="hidden sm:block w-44">
        <Logo/>
      <div className="bg-[#F3FBFF] p-2 pl-4 pr-4 rounded-2xl w-fit sm:w-60">
        {pages.map((page) => (
          <SidebarRow key={page.link} Icon={page.icon} link={page.link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
