import { useState, useEffect } from 'react';
import './RandomDog.css';

interface Pic {
    url: string;
}

const RandomDog = () => {
    const [pic, setPic] = useState<Pic | null>(null);

    useEffect(() => {
        fetchDogs();
    }, []);

    const fetchDogs= async ()=>{ 
        try{
            const response = await fetch("https://random.dog/woof.json");
            if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
            const data = await response.json();
            const pic = {
                url: data.url
            };
            setPic(pic);
        } catch(err){
            console.error("RandomDog::error: ", err);
        }
    }


    return (
        <div>
            {pic ? <img src={pic.url} alt="Random Dog" /> : <p>Loading...</p>}
        </div>
    );
};

export default RandomDog;