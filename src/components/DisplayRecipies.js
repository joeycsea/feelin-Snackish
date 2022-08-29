// Display Recipies component

const DisplayRecipies = (props) => {
   // console.log(props.recipiesResult);
   return (

      <section>
         {
            props.recipies.length !== 0
            ? 
            <>
               <h2>Let's get cooking!</h2>
                  <ul className="recipies">
                     {
                        props.recipies.map((recipie) => {
                           return (
                              <li className="recipieContainer" key={recipie.id}>
                                 <div>
                                    <h3>{recipie.title}</h3>
                                    <img src={recipie.image} alt={recipie.title}/>
                                    <p>Ready in: {recipie.readyInMinutes} minutes ⏰</p>
                                    <ul>
                                       {recipie.nutrition.ingredients.map((ingredient, index) => {
                                          return(
                                             <li className="ingredientList" key={`${ingredient.id}-${index}`}>{ingredient.name}</li>
                                          )
                                       })}
                                    </ul>
                                    <p><a href={recipie.sourceUrl} target="_blank">Full Recipie 🍽</a></p>
                                 </div>
                              </li>
                           )
                        })
                     }
                  </ul>
            </>
            : <p>Sorry, there are no recipies for {props.recipieChoice} {props.recipieTypeChoice}!</p>
         }
      </section>
   )
}

export default DisplayRecipies;