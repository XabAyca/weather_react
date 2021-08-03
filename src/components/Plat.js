import React from 'react';

const Plat = ({platData}) => {

  return (
    <div>
      <p>{platData.meals[0].strMeal}</p>
      <img src={platData.meals[0].strMealThumb}></img>
      <a href={platData.meals[0].strYoutube}>Youtube</a>
    </div>
  )
}

export default Plat