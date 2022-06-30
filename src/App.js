import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';
import Form from './Form';
import DisplayRecipies from './DisplayRecipies';
import DisplayGiphy from './DisplayGiphy';
import Footer from './Footer';

// User selects from a dropdown of 23 different types of cuisine and meal type
// User also selects their current mood
// Once they hit submit, take the values and run Axios call to Spoonacular and Giphy
// Max of 5 recipies and 2 square GIFs will appear on the page

function App() {

  const [recipies, setRecipies] = useState([]);
  const [giphy, setGiphy] = useState([]);

  // State that reps the user selection from the drop-down and is passed back up to App on form submit:
  const [ recipieChoice, setRecipieChoice ] = useState(null);
  const [ recipieTypeChoice, setRecipieTypeChoice ] = useState(null);
  const [ moodChoice, setMoodChoice ] = useState(null);


  // SPOONACULAR API
  useEffect(() => {

    if(recipieChoice && recipieTypeChoice !== "placeholder")  {
      axios ({
        url: 'https://api.spoonacular.com/recipes/complexSearch',
        method: 'GET',
        params: {
          apiKey: '7e023ad63716408fabb7225df59ccb60',
          query: recipieChoice,
          type: recipieTypeChoice,
          addRecipeInformation: true,
          addRecipeNutrition: true,
          number: 5
        }
      }).then ((apiData) => {
        // console.log(apiData);
        setRecipies(apiData.data.results);
      })
    }
  }, [recipieChoice, recipieTypeChoice]);


  // GIPHY API
  useEffect(() => {
    if(moodChoice !== "placeholder") {
      axios ({
        url: 'http://api.giphy.com/v1/gifs/search',
        method: 'GET',
        params: {
          api_key: '4BpMgTs2iCJeLAnRhfBfNYcr2iMjaRCW',
          q: moodChoice,
          rating: 'g',
          limit: 2
        }
      }).then ((apiGiphyData) => {
        // console.log(apiGiphyData);
        setGiphy(apiGiphyData.data.data);
      })
    }
  }, [moodChoice]);

  // This function will be passed as props to Form
    // When this function is called - by Form - it will update both states
  const selectRecipieAndGiphy = function(event, cuisine, mood, type) {
    event.preventDefault();
    
    setRecipieChoice(cuisine);
    setMoodChoice(mood);
    setRecipieTypeChoice(type);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Form handleSubmit={selectRecipieAndGiphy} />
        <DisplayRecipies recipiesResult={recipies}/>
        <DisplayGiphy giphyResult={giphy} />
      </div>
        <Footer />
    </div>
  );
}

export default App;
