import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

interface Props {
  link: string;
  Icon: IconType;
}

const SidebarRow = ({ link, Icon }: Props) => {
  const path = useLocation().pathname;
  console.log(path);
  console.log("link", link);
  return (
    <Link
      to={link}
      className={`flex items-center p-3 gap-2 rounded-xl text-[#075985] ${
        path === link && "bg-[#E0F2FE]"
      } hover:bg-[#E0F2FE] mb-2`}
    >
      <Icon size={25} />
      <p className="hidden sm:block font-semibold text-sm">
        {link.replace(
          `${link.slice(0, 2)}`,
          `${link.slice(1, 2).toUpperCase()}`
        )}
      </p>
    </Link>
  );
};

export default SidebarRow;
