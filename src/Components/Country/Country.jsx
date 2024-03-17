import { useState } from 'react';
import './Country.css'
const Country = ({ country,handleVisitedCountries }) => {
  // console.log(country)
  const { name, flags, population, area, cca3 } = country;
  
  const [visited, setVisited] = useState(false)
  const handleVisited = () => {
     setVisited(!visited)
   }
  // console.log(name)
  // console.log(handleVisitedCountries)
  return (
    <div className={`'box' ${visited ? 'visited':'non-visited'}`}>
      <h6 style={{color:visited? 'purple':'white'}}>Name: {name?.common}</h6>
      <img src={flags?.png} alt="" />
      <p>Population:{population}</p>
      <p>area:{area}</p>
      <p>code:{ cca3}</p>
      <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
      <br />
      <button onClick={handleVisited} >Visited</button>
      {visited && 'i have visited'}
    </div>
  );
};

export default Country;