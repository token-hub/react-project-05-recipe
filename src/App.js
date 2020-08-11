import React, {useState, useEffect} from 'react';
import Recipe from './components/Recipe';
import Axios from 'axios';
import './App.css';

function App() {

    const APP_ID = 'f400191d';
    const APP_KEY = '58118efae4fc0471efc405dc9088cf3e';

    const [recipes, setRecipes] = useState([]);

    const [recipeState, setRecipeState] = useState('');
    const [submitted, setSubmitted] = useState('chicken');

    const onChangeHandler = e => setRecipeState(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        setSubmitted(recipeState);
        setRecipeState('');
    };

    useEffect( () => {
        Axios.get(`https://api.edamam.com/search?q=${submitted}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then( response => {
            setRecipes(response.data.hits)
        } )
        .catch( error => {
            console.log(error)
        })
    }
    , [submitted] )

  return (
    <div className="App">
        <Recipe     
            submitHandler={submitHandler} 
            onChangeHandler={onChangeHandler} 
            recipeState={recipeState} 
            recipeData={recipes}
        />
    </div>
  );
}

export default App;
