import { useEffect, useState } from "react"
import BeerCard from "./BeerCard"

function Beers() {
  const [beerList, setBeerList] = useState()
  const [beerType, setBeerType] = useState("ale")
  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/${beerType}`)
      .then((response) => response.json())
      .then((beers) => setBeerList(beers))
      .catch()
  }, [beerType])
  if (!beerList) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      <button onClick={() => setBeerType("ale")}>Stouts</button>
      <button onClick={() => setBeerType("stouts")}>Ale</button>

      <ul>
        <section></section> 
        {beerList.map((beer) => (
          
          <BeerCard key ={beer.id} beer={beer}/>
        ))}
      </ul>
    </>
  )
}

export default Beers
