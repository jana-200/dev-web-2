import RandomDog from '../RandomDog';
import './App.css'
import { useState } from 'react';


function App() {
  const [key, setKey] = useState(0);

    const refreshDogs = () => {
      setKey(key => key + 1);
    };

    return (
      <>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <RandomDog key={`${key}-1`} />
        <RandomDog key={`${key}-2`} />
        <RandomDog key={`${key}-3`} />
        <button onClick={refreshDogs}>Refresh Dogs</button>
      </>
    );
  }

  export default App;


