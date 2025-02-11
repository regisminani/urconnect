import axios from "axios";

export interface Student {
  regNo: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  college: string;
  school: string;
  department: string;
  gender: string;
  level: number;
}

export interface StudentLogin {
  regNo: string;
  password: string;
}
export interface LoginResponse {
  message: string;
  token: string;
}

export interface Suggestion {
        _id: string,
        content: string,
        tags: string[],
        by: string,
        upvotes: number,
        downvotes: number,
        comments: string[];
        status: string,
        reply: [
          {
            by: string;
            content: string
          }
        ],
        createdAt: string;
}

export interface SuggestionContent {
  content: string;
  tags?: string[];
}

export interface SuggestionQuery {
    status: string;
  }

  export const API = axios.create({
    baseURL: "https://ur-connect.onrender.com",
  });
  
  // Attach the token to every request
  API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  });
  

  export const loginStudent = (credentials: StudentLogin) => API.post("/api/student/login", credentials);
/* export const loginStudent = (credentials: StudentLogin) =>{
    const controller = new AbortController();
    const request = API.post<LoginResponse>("/users/librarian/auth", credentials);
    return { request, cancel: () => controller.abort() };} */

    export const getSuggestions = (status?: string) => {
        const controller = new AbortController();
        const request = API.get<Suggestion[]>(`/api/suggestion/get/${status}`, { signal: controller.signal });
        return { request, cancel: () => controller.abort() };
      };
    export const postSuggestion = (suggestion: SuggestionContent) => {
        const controller = new AbortController();
        const request = API.post(`/api/suggestion`, suggestion);
        return { request, cancel: () => controller.abort() };
      };
      