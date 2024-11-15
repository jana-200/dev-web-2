import { useState } from 'react';
import './index.css'
const couleurs = [
  "red",         // Rouge
  "blue",        // Bleu
  "green",       // Vert
  "yellow",      // Jaune
  "orange",      // Orange
  "purple",      // Violet
  "pink",        // Rose
  "brown",       // Marron
  "black",       // Noir
  "white",       // Blanc
  "gray",        // Gris
  "cyan",        // Cyan
  "magenta",     // Magenta
  "lime",        // Vert clair
  "teal",        // Bleu canard
  "navy",        // Bleu marine
  "gold",        // Or
  "silver",      // Argent
  "indigo",      // Indigo
  "violet"       // Violet
]; //chatgpt

function App() {
  const [couleur, setColor] = useState(0);
    const next = (couleur + 1) % couleurs.length;
  return (
    <div> 
      color changing box
      (click on it) !
      <p></p>
      <div> 
        <button style={{ backgroundColor: couleurs[couleur],border: couleurs[couleur]}}
          onClick={() => {setColor(next);}}>
            <p style={{color:couleurs[next] , textAlign:'center'}}> next color is {couleurs[next]}</p>
        </button>
      </div>  
    </div>
  )
}

export default App
