import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState<Joke>();

  interface Joke{
    category:string;
    text:string;

  }


  useEffect(()=>{
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response)=>{
      if(!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`);
          return response.json();
        })
        .then((data) => {
          const joke = {
            category: data.category,
            text: data.joke || `${data.setup} ... ${data.delivery}`
          };
          setJoke(joke);
        })
        .catch((err)=>{
          console.error("HomePage::error: ", err);
        });

  }, []);
  return (
    
    <>
      
      {joke && (
        <div className="joke">
          <h2>Joke Category: {joke.category}</h2>
          <p>{joke.text}</p>
        </div>
      )}
      
    </>
  )
}

export default App
