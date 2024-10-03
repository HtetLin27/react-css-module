import styles from './App.module.css'
import Title from './Title/Title'
import Background from './Background/Background'
import Grid from './Grid/Grid'
import Rocket from './Rocket/Rocket'
import Smoke from './Rocket/Smoke'

import facts from './data/NASA_facts.json'
import { useState } from 'react'



function App() {
  const [factsData,setFactsData] = useState(facts)
  const updateClicked = (id)=>{
    const updatedFacts = factsData.map((fact) => 
      fact.id === id ? { ...fact, clicked: true } : fact
    );
    setFactsData(updatedFacts);
  }
  return (
    <div className={styles.App}>
     <Title/>
     <Background/>
     <Grid facts={factsData} updateClicked={updateClicked}/>
     <Rocket/>
     <Smoke/>
    </div>
  );
}

export default App;