import React from "react";
import Plat from "./Plat";

const Meal = () => {
  const [data, setData] = React.useState("")
  const [view, setView] = React.useState(false)

  const toggle = () => {
    setView(!view)
  }

  React.useEffect(
    () => {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(response => {
          setData(response);
        })
    },[view]
  )


  return (
    <div>
      <button onClick={toggle}>Me proposer une recette</button>
      {view && <Plat platData={data}/>}
    </div>
    
  )
}

export default Meal