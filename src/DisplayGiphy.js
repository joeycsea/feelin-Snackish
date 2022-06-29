// DisplayGiphy component

const DisplayGiphy = (props) => {
   console.log(props.giphyResult);

   return (
      <section>
         <h2>GIF ME!</h2>
         {
            props.giphyResult.length === 0 ? (
               <h3>Sorry, no GIPHs!</h3>
            ) : (
               <ul className="gifs">
                  {
                     props.giphyResult.map((gif) => {
                        return (
                           <li className="gifContainer" key={gif.id}>
                              <div>
                                 <img src={gif.images.fixed_height.url} alt={gif.title}/>
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

export default DisplayGiphy;