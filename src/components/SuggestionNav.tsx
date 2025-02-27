import { Link, useLocation } from "react-router-dom";

const SuggestionNav = () => {
    const path = useLocation().pathname
  const links = [
    { name: "Queue", to: "/suggestions" },
    { name: "Pending", to: "/suggestions/pending" },
    { name: "Resolved", to: "/suggestions/resolved" },
  ];

  return (
    <div className="flex items-center gap-5 text-sm mb-6 w-fit mx-auto sm:mx-0 sticky top-16 backdrop-blur-sm z-10 rounded-full pl-2 pr-2">
       {links.map((link) => (
        <Link to={link.to} key={link.name} className={`${(path.includes(`${link.name.toLocaleLowerCase()}`) || path===link.to) && 'text-[#00628B] font-bold'}`}>
          {link.name}
        </Link>
      ))} 
    </div>
  );
};

export default SuggestionNav;
