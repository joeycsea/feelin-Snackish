// Display Recipies component

const DisplayRecipies = (props) => {
   console.log(props.recipiesResult);
   return (

      // this is to test .. check tomorrow if it works.
      <section>
         <h2>Here are your snack options!</h2>
         {
            props.recipiesResult.length === 0 ? (
               <h3>Sorry, no recipes!</h3>
            ) : (
               // <ul className="recipies">
               //    {
               //       props.recipiesResult.map((recipie) => {
               //          return (
               //             <li className="recipieContainer" key={***}>
               //                <div>
               //                   <h3>Title</h3>
               //                   <img src={gif.images.fixed_height.url} alt={gif.title}/>
               //                   <p>Summary</p>
               //                </div>
               //             </li>
               //          )
               //       })
               //    }
               // </ul>
               <h3>Yay Recipies!</h3>
            )
         }
      </section>
   )
}

export default DisplayRecipies;