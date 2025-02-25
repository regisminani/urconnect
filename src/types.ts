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
    email: string;
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
            firstName: string;
            otherName: string;
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
        username: "",
        firstName: '',
        otherName: '',
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
        regNo: string;
        username: string;
        firstName: string;
        otherName: string;
      },    
      content: string,
  }
  export interface CommentContent {
    content: string;
  }

export interface LoggedInUser {
    id: string;
    regNo: string;
    firstName: string;
    otherName: string;
    username: string;
    email: string;
}

export const defaultUser: LoggedInUser = {
    id: "",
    regNo: "",
    firstName: '',
    otherName: '',
    username:"",
    email: "",
}

export interface Vote {
    vote: string;
}

export interface View {
    view: boolean;
}