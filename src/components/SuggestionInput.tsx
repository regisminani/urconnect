import { useForm } from "react-hook-form";
import UserIcon from "./UserIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { postSuggestion, SuggestionContent } from "../api";
import { CanceledError } from "axios";
import { useState } from "react";
import { PiSpinner } from "react-icons/pi";

const schema = z.object({
  content: z
    .string()
    .min(20, { message: "A suggestion must be at least 20 characters." }),
  tags: z
    .string()
    .array().optional(),
});

type FormData = z.infer<typeof schema>;

const SuggestionInput = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (formData: SuggestionContent) => {
    setLoading(true);
    const { request, cancel } = postSuggestion(formData);
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
  };
const tagOptions = ['Principal', 'Dean', 'HOD']
const [tagChoice, setTagChoice] = useState<string[]>([])
const [showTags, setShowTags] = useState(false)
console.log(tagChoice)
const handleTagChoice = (tag:string)=>{!tagChoice.includes(tag) && setTagChoice([...tagChoice, tag])}
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F7F7F7] shadow-md shadow-black/25 rounded-xl p-2 pl-4 pr-4">
      <div className="bg-[#038232]/20 w-fit rounded justify-self-end">
        <p className="text-[#038232] font-semibold text-[9px] p-0.5 pl-2 pr-2">
          4/5 credits left
        </p>
      </div>
      <div className="bg-white p-1 rounded-full flex items-center gap-2 mt-2">
        <UserIcon />
        <input
        {...register("content")}
          type="text"
          placeholder="Share your suggestion..."
          className="outline-none text-sm"
        />
      </div>
         {errors.content && (
              <p className="text-red-500 text-xs">{errors.content.message}</p>
            )}
      {message && <p className="text-red-500 text-xs">{message}</p>}
      <div className="mt-4 sm:flex sm:justify-between w-full">
        <div className="">
          <div className="flex items-center gap-2">
            <p className="text-[#737272] font-semibold text-sm">
              Tag authority*
            </p>
            <div className="relative bg-white rounded-full flex items-center p-1">
              <input
                type="text"
                className=" pl-2 outline-none text-xs "
                placeholder="Search..."
                onFocus={()=>setShowTags(true)}
                onBlur={()=>setShowTags(false)}                
              />
              {showTags && <div className="absolute top-7 right-0 w-full rounded-md shadow-lg p-1 bg-white border border-neutral-200">
                {tagOptions.map(tag=><p onClick={()=>handleTagChoice(tag)} className="text-xs hover:bg-blue-50 rounded-md mb-1 p-1 cursor-pointer">{tag}</p>)}
              </div>}
            </div>
            {tagChoice.map(tag=>
          <div key={tag} className="bg-neutral-300 w-fit p-1 pl-7 pr-7 rounded-full">
            <p className="text-neutral-500 font-[500] text-xs">{tag}</p>
          </div>
          )
          }
          </div>
          <p className="text-[9px] font-light mt-2 text-[#737272]">*Optional</p>
        </div>
        <div>
          <button disabled={!isValid} type="submit" className="bg-[#00628B] block mx-auto font-semibold text-xs p-1 text-white text-center  rounded-full pl-4 pr-4 active:scale-95 cursor-pointer">
          {isLoading ? <div>Posting...<PiSpinner className="w-5 animate-spin inline-block"/></div> : "Post"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SuggestionInput;
