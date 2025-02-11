import { HiOutlineChat } from "react-icons/hi";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import UserIcon from "./UserIcon";

const SuggestionAlt = () => {
  return (
    <div className="bg-[#F7F7F7] shadow-md shadow-black/25 rounded-xl p-2 pl-4 pr-4">
      <div className="flex gap-1">
        <UserIcon v />
        <div className="text-sm">
          <p className="font-semibold">2220***23</p>
          <p className="font-medium text-[#9C9C9C]  -mt-[5px]">@mrndi</p>
        </div>
      </div>
      <p className="text-sm  mt-5">
        I am writing to request an increase in the monthly living allowance for
        students at the University of Rwanda from RWF 40,000 to RWF 100,000. The
        current allowance has not kept pace with the rising costs of living,
        including significant increases in food and accommodation prices, which
        have made it increasingly difficult for students to meet their basic
        needs. Many students are struggling to afford essentials, which
        negatively impacts their academic performance and overall well-being. An
        adjustment to RWF 100,000 would provide much-needed financial support,
        allowing students to focus on their studies without the burden of
        financial stress. Thank you for considering this important request.
      </p>

      <div className="mt-3 flex items-center gap-12">
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
  );
};

export default SuggestionAlt;
