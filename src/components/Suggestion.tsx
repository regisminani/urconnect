import { HiOutlineChat } from "react-icons/hi";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import UserIcon from "./UserIcon";
import { Link } from "react-router-dom";
import { viewSuggestion, voteSuggestion } from "../api";
import { Suggestion as S } from "../types";
import { formatDate } from "../utils/helpers";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

const  Suggestion = ({_id,by,status ,comments, content, tags,views, votes, createdAt}:S) => {
const [loading, setLoading] = useState(false)
const [message, setMessage] = useState('')
const {formattedDate, formattedTime} = formatDate(createdAt)
const { ref, inView } = useInView({
  triggerOnce: true, // Optional: Trigger only once when it comes into view
  threshold: 0.1, // Optional: Adjust visibility threshold
});

const handleVote = () => {
  setLoading(true);
 const {request, cancel} = voteSuggestion(_id, {vote:'up'})
 request
       .then((res) => {
         setMessage(res.data.message);
         setLoading(false);
       })
       .catch((err) => {
         if (err instanceof CanceledError) return;
         setMessage(err.message);
         setLoading(false);
       });
     return () => cancel();
}
const handleView = () => {
  setLoading(true);
 const {request, cancel} = viewSuggestion(_id, {view:true})
 request
       .then((res) => {
         console.log(res.data.message);
         setLoading(false);
       })
       .catch((err) => {
         if (err instanceof CanceledError) return;
         console.log(err.message);
         setLoading(false);
       });
     return () => cancel();
}

useEffect(()=>{
  inView && handleView()
}, [inView])
console.log("BY:", by)
  return (
    <div ref={ref} className="bg-[#F7F7F7] shadow-md shadow-black/25 rounded-xl p-2 pl-4 pr-4">
      <div className="flex gap-1">
        <UserIcon username={by.firstName} />
        <div className="text-sm">
          <p className="font-semibold">{by.firstName+by.otherName}</p>
          <p className="font-medium text-[#9C9C9C]  -mt-[5px]">@{by.firstName}</p>
        </div>
      </div>
      <Link to={`/suggestions/${status}/${_id}`}  className="text-sm  mt-5">
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
          {tags.map(tag=>
          <div key={tag} className="bg-neutral-300 w-fit p-1 pl-7 pr-7 rounded-full">
            <p className="text-neutral-500 font-[500] text-xs">{tag}</p>
          </div>
          )
          }
        </div>
      </div>
      <hr className="mt-2 text-neutral-300" />
      <div className="flex items-center gap-2 mt-2">
        <p className="text-sm font-[300] text-neutral-400 ml-1">
          <span className="font-bold text-black">{votes}</span> Upvotes
        </p>
        <p className="text-sm font-[300] text-neutral-400 ml-1">
          <span className="font-bold text-black">{comments}</span> Comment{comments !==1 &&'s'}
        </p>
      </div>
      <hr className="mt-2 text-neutral-300" />
      {/* Upvote/Comment */}
      <div className="flex items-center ml-5 mt-2 mb-1 gap-20">
        <button type="button" onClick={handleVote} disabled={loading}>
          <IoArrowUpCircleOutline className="w-7 h-7 text-neutral-500  active:scale-95 cursor-pointer disabled:animate-pulse disabled:scale-100" />
        </button>
        <Link to={`/suggestions/${status}/${_id}`} >
          <HiOutlineChat className="w-7 h-7 text-neutral-500 stroke-[1.5px] active:scale-95 cursor-pointer" />
        </Link>
      </div>
      {message && <p className="text-xs text-red-300">{message}</p>}
    </div>
  );
};

export default Suggestion;
