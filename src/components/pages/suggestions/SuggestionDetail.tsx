import { CgSpinner } from "react-icons/cg";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSuggestion from "../../../hooks/useSuggestion";
import UserIcon from "../../UserIcon";
import { FaRegSadTear } from "react-icons/fa";
import { formatDate } from "../../../utils/helpers";
import CommentInput from "../../CommentInput";
import CommentSection from "../../CommentSection";

const SuggestionDetail = () => {
  const { suggestionID } = useParams();
  const { loading, error, suggestion } = useSuggestion(suggestionID);
  console.log("THE SUGGESION",suggestion)
  const {
    _id,
    status,
    comments,
    content,
    tags,
    views,
    by,
    votes,
    createdAt,
  } = suggestion;

 const navigate = useNavigate();
 const {formattedDate, formattedTime} = formatDate(createdAt)
  return (
    <div
      className="bg-black/50 fixed inset-0 z-20"
    >
      <div className="bg-white overflow-scroll fixed inset-0 sm:ml-32  transition delay-150 duration-300 ease-in-out md:ml-60">
        <div className="p-5">
          <HiArrowSmallLeft
            size={26}
            className="text-[#00628B] cursor-pointer"
            onClick={() => navigate("/suggestions")}
          />
          {_id !== "" && createdAt  ? (
            <div className="mt-5 ml-10 mr-10">
              <div className="flex gap-1">
                <UserIcon username={by?.username} />

                <div className="text-sm">
                  <p className="font-semibold">{by.firstName + by.otherName}</p>
                  <p className="font-medium text-[#9C9C9C]  -mt-[5px]">
                    @{by.firstName}
                  </p>
                </div>
              </div>
              <Link
                to={`/suggestions/${status}/${_id}`}
                className="text-sm  mt-5"
              >
                {content}
              </Link>

              <div className="mt-3 flex items-center gap-12">
                <p className="text-sm font-[300] text-neutral-400 ml-1">
                  {formattedTime} • {formattedDate} •{" "}
                  <span className="text-nowrap">
                    <span className="font-bold text-black">{views}</span> Views
                  </span>
                </p>
                {/* Tags */}
                <div className="sm:flex gap-3 space-y-2 sm:space-y-0">
                  {tags  && tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-neutral-300 w-fit p-1 pl-7 pr-7 rounded-full"
                    >
                      <p className="text-neutral-500 font-[500] text-xs">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="mt-2 text-neutral-300" />
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm font-[300] text-neutral-400 ml-1">
                  <span className="font-bold text-black">
                    {/* 98 */}
                    {votes}
                  </span>{" "}
                  Upvotes
                </p>
                <p className="text-sm font-[300] text-neutral-400 ml-1">
                  <span className="font-bold text-black">
                    {comments}
                  </span>{" "}
                  Comment{comments !== 1 && "s"}
                </p>
              </div>
              <hr className="mt-2 text-neutral-300" />
              {/* Upvote/Comment */}
              <div className="flex items-center ml-5 mt-2 mb-1 gap-20">
                <button type="button">
                  <IoArrowUpCircleOutline className="w-7 h-7 text-neutral-500  active:scale-95 cursor-pointer" />
                </button>
                
              </div>
              <div className=" mt-5">
              <hr className="mt-2 text-neutral-300" />
               <CommentInput id={_id}/>
               <div>
                <CommentSection id={_id}/>
               
               </div>
              </div>
            </div>
          ) : (
            <div className="w-fit mt-52 mx-auto my-auto">
              {loading && (
                <CgSpinner size={40} className="animate-spin text-[#00628B]" />
              )}

              {!loading &&
                (error ? (
                  <p className=" text-red-500 font-semibold">{error}</p>
                ) : (
                  <p className="text-neutral-400 font-bold text-xl flex items-center gap-2">
                    <FaRegSadTear size={30} /> Suggestion not found!
                  </p>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionDetail;
