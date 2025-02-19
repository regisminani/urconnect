import { useState } from "react";
import { HiOutlineChat } from "react-icons/hi";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import UserIcon from "../UserIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reply, setReply] = useState("");

  const handlePostReply = () => {
    if (reply.trim() === "") {
      toast.error("Reply cannot be empty!");
      return;
    }

    toast.success("Reply posted successfully!");
    setIsModalOpen(false);
    setReply(""); // Clear input after posting
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-[#F7F7F7] mx-10 mt-20 shadow-md shadow-black/25 rounded-xl p-2 pl-4 pr-4">
        <div className="flex gap-1">
          <UserIcon />
          <div className="text-sm">
            <p className="font-semibold">2220***23</p>
            <p className="font-medium text-[#9C9C9C] -mt-[5px]">@mrndi</p>
          </div>
        </div>
        <p className="text-sm mt-5">
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
            11:30PM • 14/11/2024 • <span className="font-bold text-black">120</span> Views
          </p>
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
        <div className="flex items-center ml-5 mt-2 mb-1 gap-4 sm:gap-6 md:gap-20">
  <button type="button">
    <IoArrowUpCircleOutline className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-500 active:scale-95 cursor-pointer" />
  </button>
  <button>
    <HiOutlineChat className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-500 stroke-[1.5px] active:scale-95 cursor-pointer" />
  </button>
  <button
    className="bg-green-600 w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full ml-auto text-center"
    onClick={() => setIsModalOpen(true)}
  >
    <p className="text-white font-medium text-sm sm:text-xs"> add Reply </p>
  </button>
</div>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[70%]">
            <h2 className="text-lg font-semibold mb-3">Write a Reply</h2>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply here..."
            />
            <div className="flex justify-end mt-3 gap-2">
              <button
                className="bg-[#006991] text-white px-2 py-2 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white px-2 py-2 rounded-md"
                onClick={handlePostReply}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeAdmin;
