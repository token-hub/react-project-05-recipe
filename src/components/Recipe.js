import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Recipe = ({submitHandler, recipeState, onChangeHandler, recipeData}) => {

	return(
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<input type="text" value={recipeState} onChange={onChangeHandler}  />
					<button type='submit'>Submit</button>
				</div>
			</form>
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

Recipe.propTypes = {
	submitHandler: PropTypes.func.isRequired,
	recipeState: PropTypes.string.isRequired,
	onChangeHandler: PropTypes.func.isRequired,
	recipeData: PropTypes.array.isRequired
}

export default Recipe 