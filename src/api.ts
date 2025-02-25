import axios from "axios";
import { CommentContent, CommentShape, StudentLogin, Suggestion, SuggestionContent, View, Vote } from "./types";


  export const API = axios.create({
    baseURL: "https://ur-connect.onrender.com",
  });
  
  // Attach the token to every request
  API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  });
  

export const loginUser = (credentials: StudentLogin) => API.post("/api/user/login", credentials);
/* export const loginStudent = (credentials: StudentLogin) =>{
  const controller = new AbortController();
  const request = API.post<LoginResponse>("/api/student/login", credentials);
  return { request, cancel: () => controller.abort() };} */

export const getSuggestions = (status?: string) => {
    const controller = new AbortController();
    const request = API.get<Suggestion[]>(`/api/suggestions/${status}`, { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
  };


export const getSuggestion = (id?: string) => {
    const controller = new AbortController();
    const request = API.get<Suggestion>(`/api/student/suggestions/${id}`, { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
  };


export const postSuggestion = (suggestion: SuggestionContent) => {
    const controller = new AbortController();
    const request = API.post(`/api/suggestion`, suggestion);
    return { request, cancel: () => controller.abort() };
   };
      
export const voteSuggestion = (id: string,vote:Vote)=> {
  const controller = new AbortController();
    const request = API.patch(`/api/suggestion/vote/${id}`, vote, { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
}
export const viewSuggestion = (id: string,view:View)=> {
  const controller = new AbortController();
    const request = API.patch(`/api/suggestion/view/${id}`, view, { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
}

export const postComment = (id:string,comment: CommentContent) => {
  const controller = new AbortController();
  const request = API.post(`/api/suggestion/comment/${id}`, comment);
  return { request, cancel: () => controller.abort() };
 };

 export const getComments = (id: string) => {
  const controller = new AbortController();
  const request = API.get<CommentShape[]>(`/api/suggestion/comment/${id}`, { signal: controller.signal });
  return { request, cancel: () => controller.abort() };
};

export const getRoles = () => {
  const controller = new AbortController();
  const request = API.get<string[]>(`/api/staff/roles`, { signal: controller.signal });
  return { request, cancel: () => controller.abort() };
};