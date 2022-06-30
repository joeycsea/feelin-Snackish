// Display Recipies component

const DisplayRecipies = (props) => {
   // console.log(props.recipiesResult);
   return (

      <section>
         <h2>Here are your snack options!</h2>
         {
            props.recipiesResult.length === 0 ? (
               <h3>Sorry, no recipes!</h3>
            ) : (
               <ul className="recipies">
                  {
                     props.recipiesResult.map((recipie) => {
                        // console.log(recipie);
                        return (
                           <li className="recipieContainer" key={recipie.id}>
                              <div>
                                 <h3>{recipie.title}</h3>
                                 <img src={recipie.image} alt={recipie.title}/>
                                 <p>Ready in: {recipie.readyInMinutes} minutes ⏰</p>
                                 {/* <ul>
                                    {recipie.nutrition.ingredients.map((ingredient) => {
                                       console.log(ingredient);
                                       return(
                                          <li className="ingredientList" key={ingredient.id}>{ingredient.name}</li>
                                       )
                                    })}
                                 </ul> */}
                                 <p><a href={recipie.sourceUrl} target="_blank">Click here for the full recipie 🍽</a></p>
                              </div>
                           </li>
                        )
                     })
                  }
               </ul>
            )
         }
      </section>
   )
}

export default DisplayRecipies;