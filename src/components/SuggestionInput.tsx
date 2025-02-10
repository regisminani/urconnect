import UserIcon from "./UserIcon";

const SuggestionInput = () => {
  return (
    <div className="bg-[#F7F7F7] shadow-md shadow-black/25 rounded-xl p-2 pl-4 pr-4">
      <div className="bg-[#038232]/20 w-fit rounded justify-self-end">
        <p className="text-[#038232] font-semibold text-[9px] p-0.5 pl-2 pr-2">
          4/5 credits left
        </p>
      </div>
      <div className="bg-white p-1 rounded-full flex items-center gap-2 mt-2">
        <UserIcon />
        <input
          type="text"
          placeholder="Share your suggestion..."
          className="outline-none text-sm"
        />
      </div>
      <div className="mt-4 sm:flex sm:justify-between w-full">
        <div className="">
          <div className="flex items-center gap-2">
            <p className="text-[#737272] font-semibold text-sm">
              Tag authority*
            </p>
            <div className="bg-white rounded-full flex items-center p-1">
              <input
                type="text"
                className=" pl-2 outline-none text-xs "
                placeholder="Search..."
              />
            </div>
          </div>
          <p className="text-[9px] font-light mt-2 text-[#737272]">*Optional</p>
        </div>
        <div>
          <button className="bg-[#00628B] block mx-auto font-semibold text-xs p-1 text-white text-center  rounded-full pl-4 pr-4 active:scale-95 cursor-pointer">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionInput;
