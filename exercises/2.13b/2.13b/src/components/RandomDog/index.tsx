import { useState, useEffect } from 'react';
import './RandomDog.css';

interface Pic {
    url: string;
}

const RandomDog = () => {
    const [pic, setPic] = useState<Pic | null>(null);

    useEffect(() => {
        fetch("https://random.dog/woof.json")
            .then((response) => {
                if (!response.ok)
                    throw new Error(
                        `fetch error : ${response.status} : ${response.statusText}`
                    );
                return response.json();
            })
            .then((data) => {
                const pic = {
                    url: data.url
                };
                setPic(pic);
            })
            .catch((err) => {
                console.error("RandomDog::error: ", err);
            });
    }, []);

    return (
        <div>
            {pic ? <img src={pic.url} alt="Random Dog" /> : <p>Loading...</p>}
        </div>
    );
};

export default RandomDog;