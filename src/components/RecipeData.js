import React from 'react';
import PropTypes from 'prop-types';

const RecipeData = ({recipeData}) => {
	return(
		<div>
			{
				recipeData.map(recipe => (
						<div key={recipe.recipe.label}>
							<p> Title : {recipe.recipe.label} </p>
							<p> Calories : {recipe.recipe.calories} </p>
							<img src={recipe.recipe.image} alt={recipe.recipe.label} />
						</div>
					)
				)
			}
		</div>
	)
}

RecipeData.propTypes = {
	recipeData: PropTypes.array.isRequired
}

export default RecipeData