import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { postComment } from "../api";
import { CommentContent } from "../types";
import { CanceledError } from "axios";
import { PiSpinner } from "react-icons/pi";

const schema = z.object({
  content: z
    .string()
    .min(2, { message: "A comment must be at least 2 characters." }),
});

type FormData = z.infer<typeof schema>;

const CommentInput = ({ id }: { id: string }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (formData: CommentContent) => {
    setMessage("");
    setLoading(true);
    const { request, cancel } = postComment(id, formData);
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
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("content")}
          id="content"
          className="w-full h-20 text-sm pl-2 ring-1 ring-blue-200 resize-none outline-none rounded-md mt-3"
          placeholder="Add your comment..."
          name="content"
        />
        {errors.content && (
          <p className="text-red-500 text-xs">{errors.content.message}</p>
        )}

        {message && <p className="text-red-500 text-xs">{message}</p>}
        {/* <button className="bg-gray-300 rounded-md p-1">{isLoading ? "Sending..." : "Send"}</button> */}
        <button
        disabled={!isValid}
                    type="submit"
                    className="bg-[#00628B]  font-semibold text-xs p-1 text-white text-center  rounded-full pl-4 pr-4 active:scale-95 cursor-pointer disabled:opacity-50 disabled:scale-100"
                  >
                    {isLoading ? (
                      <div>
                        Sending...
                        <PiSpinner className="w-5 animate-spin inline-block" />
                      </div>
                    ) : (
                      "Send"
                    )}
                  </button>
      </form>
    </div>
  );
};

export default CommentInput;
