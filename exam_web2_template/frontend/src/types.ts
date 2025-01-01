interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    cover: string;
  }
  
  interface BookContext {
    books: Book[];
    loginUser: (user: User) => Promise<void>;
    authenticatedUser: MaybeAuthenticatedUser;
    clearUser: () => void;
  }

  interface User {
    username: string;
    password: string;
  }
  
  interface AuthenticatedUser {
    username: string;
    token: string;
  }
  
  type MaybeAuthenticatedUser = AuthenticatedUser | undefined;



export type {
    Book,
    BookContext,
    AuthenticatedUser,
    MaybeAuthenticatedUser,
    User,
  }