import { Suggestion } from "./api";

export const defaultSuggestion: Suggestion = {
    _id: '',
    content: "",
    tags: [],
    by: "",
    upvotes: 0,
    downvotes: 0,
    comments: [],
    status: "",
    reply: [
      {
        by: "",
        content: ""
      }
    ],
    createdAt: ""
  };