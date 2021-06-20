import React from 'react';

const Recipe = (props) => {
	const {recipes}=props;
  return (
    <div className="card-columns">
    {recipes.map((recipe)=>(
     
    <div className="">
    <div className="card py-2 text-center">
    <img src={recipe.recipe.image} className="image-fluid w-50 mx-auto rounded-circle" alt='food-image'/>
    <div className="card-body">
   <h4>{recipe.recipe.label}</h4>
    </div>
    <ul className="list-group list-group-flush">
    {
    	recipe.recipe.ingredientLines.map(ingredient=>(
  <li className="list-group-item">{ingredient}  </li>
    		))
    }

    </ul>
    </div>
    </div>
    ))}
    </div>
  )
}

export default Recipe;
