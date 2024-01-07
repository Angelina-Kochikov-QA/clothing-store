import { useState } from "react";
import './App.css';
import Buttons from "./Buttons";
import Shopping from "./Shopping";
import { data } from "./data";


function Home() {
    const [clothing, setClothing] = useState(data);
  
    const chosenClothes = (searchTerm) => {
      const newClothes = data.filter(element => element.searchTerm === searchTerm);
      setClothing(newClothes);
  
    }
  
    return (<div>
      <div className='cont'>
        <h2 className='back'>Free Standard Shipping</h2>
      </div>
  
        <Buttons filteredClothes ={chosenClothes}/>
        <Shopping clothes={clothing} />
      </div>
    )
}

export default Home;