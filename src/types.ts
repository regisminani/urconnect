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
    success: boolean;
    token: string;
  }
  
  export interface Suggestion {
          _id: string,
          by: {
            regNo: string,
            username: string;
          },    
          content: string,
          votes: number,
          tags: string[],
          views: number,
          comments: number;
          status: string,
          replies: number,
          reports: number,
          createdAt: string;
  }
  
  export interface SuggestionContent {
    content: string;
    tags?: string[];
  }
  
  export interface SuggestionQuery {
      status: string;
    }
  
export const defaultSuggestion: Suggestion = {
    _id: '',
    content: "",
    tags: [],
    by: {
        regNo: "",
        username: ""
    },
    votes: 0,
    views: 0,
    comments: 0,
    status: "",
    replies: 0,
    reports:0,
    createdAt: ""
  };

  
  export interface CommentShape {
    by: {
        regNo: string,
        username: string;
      },    
      content: string,
  }
  export interface CommentContent {
    content: string;
  }

export interface LoggedInUser {
    id: string;
    regNo: string;
    username: string;
}

export const defaultUser: LoggedInUser = {
    id: "",
    regNo: "",
    username:"",
}

export interface Vote {
    vote: string;
}

export interface View {
    view: boolean;
}