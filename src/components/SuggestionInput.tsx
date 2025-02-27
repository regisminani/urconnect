import { useForm } from "react-hook-form";
import UserIcon from "./UserIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { postSuggestion } from "../api";
import { CanceledError } from "axios";
import { useState } from "react";
import { PiSpinner } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import { SuggestionContent } from "../types";
import useRoles from "../hooks/useRoles";

const schema = z.object({
  content: z
    .string()
    .min(20, { message: "A suggestion must be at least 20 characters." }),
  tags: z.string().array().optional(),
});

type FormData = z.infer<typeof schema>;

const SuggestionInput = ({ username }: { username: String }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (formData: SuggestionContent) => {
    setMessage("");
    setLoading(true);
    formData.tags = tagChoice;
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
  const { roles, loading, error } = useRoles();
  const tagOptions =
    !error && !loading && roles ? roles : ["Principal", "Dean", "HOD"];
  const [tagChoice, setTagChoice] = useState<string[]>([]);
  const [tagSearch, setTagSearch] = useState("");

  const handleTagChoice = (tag: string) => {
    !tagChoice.includes(tag) && setTagChoice([...tagChoice, tag]);
    setTagSearch("");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#F7F7F7] shadow-md shadow-black/25 rounded-xl p-2 pl-4 pr-4"
    >
      <div className="bg-[#038232]/20 w-fit rounded justify-self-end">
        <p className="text-[#038232] font-semibold text-[9px] p-0.5 pl-2 pr-2">
          4/5 credits left
        </p>
      </div>
      <div className="bg-white p-1 rounded-full flex items-center gap-2 mt-2">
        <UserIcon username={username} />
        <input
          {...register("content")}
          type="text"
          placeholder="Share your suggestion..."
          className="outline-none text-sm w-full"
        />
      </div>
      {errors.content && (
        <p className="text-red-500 text-xs">{errors.content.message}</p>
      )}

      {message && <p className="text-red-500 text-xs">{message}</p>}
      <div className="mt-4 sm:flex sm:justify-between w-full">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-[#737272] font-semibold text-sm">
              Tag authority*
            </p>
            <div className="relative bg-white rounded-full flex items-center p-1">
              <input
                type="text"
                className=" pl-2 outline-none text-xs "
                placeholder="Search..."
                value={tagSearch}
                onChange={(e) => setTagSearch(e.target.value)}
              />
              {tagSearch && (
                <div className="absolute top-7 right-0 w-full rounded-md shadow-lg p-1 bg-white border border-neutral-200">
                  {tagOptions.filter((t) =>
                    t
                      .toLocaleLowerCase()
                      .includes(tagSearch.toLocaleLowerCase())
                  ).length > 0 ? (
                    tagOptions
                      .filter((t) =>
                        t
                          .toLocaleLowerCase()
                          .includes(tagSearch.toLocaleLowerCase())
                      )
                      .map((tag) => (
                        <p
                          key={tag}
                          onClick={() => handleTagChoice(tag)}
                          className="text-xs hover:bg-blue-50 rounded-md mb-1 p-1 cursor-pointer"
                        >
                          {tag}
                        </p>
                      ))
                  ) : (
                    <p className=" text-sm animate-pulse">...</p>
                  )}
                </div>
              )}
            </div>
            {tagChoice.map((tag) => (
              <div
                key={tag}
                className="bg-neutral-300 flex items-center w-fit p-1  pr-7 rounded-full"
              >
                <IoIosClose
                  className="text-[#00628B] active:scale-95 cursor-pointer"
                  onClick={() => {
                    setTagChoice(tagChoice.filter((t) => t !== tag));
                  }}
                />
                <p className="text-neutral-500 font-[500] text-xs pl-3">
                  {tag}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[9px] font-light mt-2 text-[#737272]">*Optional</p>
        </div>
        <div>
          <button
            disabled={!isValid}
            type="submit"
            className="bg-[#00628B] block mx-auto font-semibold text-xs p-1 text-white text-center  rounded-full pl-4 pr-4 active:scale-95 cursor-pointer disabled:opacity-50 disabled:scale-100"
          >
            {isLoading ? (
              <div>
                Posting...
                <PiSpinner className="w-5 animate-spin inline-block" />
              </div>
            ) : (
              "Post"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SuggestionInput;
