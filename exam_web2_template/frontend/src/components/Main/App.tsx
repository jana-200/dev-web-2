import Header from "./Header";
import Footer from "./Footer";
import Navbar from './Navbar';
import { AuthenticatedUser, Book, BookContext, MaybeAuthenticatedUser, User } from "../../types";
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import {
  clearAuthenticatedUser,
  storeAuthenticatedUser,
} from "../../utils/session";

const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState<MaybeAuthenticatedUser>(undefined);
  const [books, setBooks] = useState<Book[]>([]);


  useEffect(() => {

    async function fetchBooks() {
      const options = {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              Authorization: authenticatedUser?.token || "",
          },
      };
  
      try {
          const response = await fetch("http://localhost:3000/books", options);
  
          if (!response.ok) {
              if (response.status === 401) {
                  throw new Error("Unauthorized: Please check your authentication token.");
              }
              throw new Error("Erreur");
          }
  
          const data = await response.json();
          console.log("test", data);
  
          setBooks(data);
      } catch (error) {
          console.error("Error fetching livres:", error);
      }
  }

    fetchBooks();
    
  }, [authenticatedUser?.token]);

  


  const loginUser = async (user: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("http://localhost:3000/auths/login", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser);
      storeAuthenticatedUser(authenticatedUser);
    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };


  const clearUser = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
  };

  
  const bookContext: BookContext = {
    books: books,
    loginUser,
    authenticatedUser,
    clearUser,
  };


  return (
    <>
      <Header>
        <Navbar />
      </Header>

      <Outlet context={bookContext}/>
      
      <Footer/>
    </>
  );
};

export default App;
