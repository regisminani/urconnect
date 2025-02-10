import { Link, useLocation } from "react-router-dom";

const SuggestionNav = () => {
    const path = useLocation().pathname
  const links = [
    { name: "Queue", to: "/suggestions" },
    { name: "Pending", to: "/suggestions/pending" },
    { name: "Resolved", to: "/suggestions/resolved" },
  ];

  return (
    <div className="flex items-center gap-5 text-sm mb-6">
       {links.map((link) => (
        <Link to={link.to} key={link.name} className={`${path===link.to && 'font-bold'}`}>
          {link.name}
        </Link>
      ))} 
    </div>
  );
};

export default SuggestionNav;
