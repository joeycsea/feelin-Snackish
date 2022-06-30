// Form Component
import { useState } from 'react';

const Form = (props) => {

   // changing values of the select drop downs
   const [ cuisineSelect, setCuisineSelect ] = useState("placeholder");
   const [ moodSelect, setMoodSelect ] = useState("placeholder");
   const [ cuisineTypeSelect, setCuisineTypeSelect ] = useState("placeholder");


   const handleCuisineChange = (event) => {
      setCuisineSelect(event.target.value);
   }

   const handleMoodChange = (event) => {
      setMoodSelect(event.target.value);
   }

   const handleCuisineTypeChange = (event) => {
      setCuisineTypeSelect(event.target.value);
   }


   return (
      <section>
         <form action="submit" 
            onSubmit={ (event) => {props.handleSubmit(event, cuisineSelect, moodSelect, cuisineTypeSelect)} }
         >

            <label htmlFor="recipies">Select a cuisine:</label>
               <select 
                  name="recipies" 
                  id="recipies" 
                  onChange={ handleCuisineChange } 
                  value={ cuisineSelect }
               >
                  <option value="placeholder" defaultValue disabled>Cuisine type</option>
                  <option value="african">African</option>
                  <option value="american">American</option>
                  <option value="british">British</option>
                  <option value="caribbean">Caribbean</option>
                  <option value="chinese">Chinese</option>
                  <option value="eastern european">Eastern European</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="greek">Greek</option>
                  <option value="indian">Indian</option>
                  <option value="irish">Irish</option>
                  <option value="italian">Italian</option>
                  <option value="japanese">Japanese</option>
                  <option value="korean">Korean</option>
                  <option value="latin american">Latin American</option>
                  <option value="mediterranean">Mediterranean</option>
                  <option value="mexican">Mexican</option>
                  <option value="middle eastern">Middle Eastern</option>
                  <option value="nordic">Nordic</option>
                  <option value="southern">Southern</option>
                  <option value="spanish">Spanish</option>
                  <option value="thai">Thai</option>
                  <option value="vietnamese">Vietnamese</option>
               </select>

            <label htmlFor="recipies">Select a meal type:</label>
               <select 
                  name="recipieType" 
                  id="recipieType" 
                  onChange={ handleCuisineTypeChange } 
                  value={ cuisineTypeSelect }
               >
                  <option value="placeholder" defaultValue disabled>Meal type</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="main dish">Main course</option>
                  <option value="dessert">Dessert</option>
               </select>

            <label htmlFor="giphy">For fun: How are you feeling?</label>
               <select 
                  name="giphy" 
                  id="giphy" 
                  onChange={ handleMoodChange } 
                  value={ moodSelect }
               >
                  <option value="placeholder" defaultValue disabled >Select your mood</option>
                  <option value="calm">Calm</option>
                  <option value="contempt">Contempt</option>
                  <option value="chill">Chill</option>
                  <option value="excited for food">Excited to Cook!</option>
                  <option value="excited">Excited</option>
                  <option value="grateful">Grateful</option>
                  <option value="hungry">Hungry</option>
                  <option value="hangry">HANGRY</option>
                  <option value="happy">Happy</option>
                  <option value="joyful">Joyful</option>
                  <option value="relief">Relieved</option>
                  <option value="snack">Snackish</option>
                  <option value="surprised">Surprised</option>
               </select>
               <button>It's Food Time!</button>
         </form>
      </section>
   )
}

export default Form;