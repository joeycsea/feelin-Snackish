// DisplayGiphy component

const DisplayGiphy = (props) => {
   return (
      <section>
         
         {
            props.giphy.length !== 0
            ? 
            <>
               <h2>GIF ME!</h2>
                  <ul className="gifs">
                     {
                        props.giphy.map((gif) => {
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
            </>
            : null
         }
         
      </section>
   )
}

export default DisplayGiphy;