import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country";
import ('./Countries.css')

export default function Countries() {
  const [countries, setCountries] = useState([])
  const [visitedCountries,setVisitedCountries]=useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])
  
  const handleVisitedCountries = (country) => {
    // console.log('visted countries mark btn clicked')
    // console.log(country)
    
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
    console.log(visitedCountries)
  }
  
  return (
    <div >
      <h1>countries:{ countries.length}</h1>
      <div>
           <h5>Visited Countries:{ visitedCountries.length}</h5>
      <ul>
          {
            visitedCountries.map(country => <li key={country.cca3 }>{ country.name.common}</li>)
        }
      </ul>
   </div>

      <div className="countries-container">
         {
          countries.map(country => <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}></Country>)
      }
     </div>

    </div>
  )
}