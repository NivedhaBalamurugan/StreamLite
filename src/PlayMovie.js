import { useParams, Link } from "react-router-dom";
import { useContext } from 'react';
import DataContext from './context/DataContext';

const PlayMovie = () => {

    const {allmovies} = useContext(DataContext);
       
    const {id} = useParams();   //link is post:id
    const movie = allmovies.find( (movie) => {
        
        if(movie.id.toString() === id)
            return movie;
    })

    return(

        <main>
           
        {movie && (
          <>
            <h2 className="playtitle">{movie.original_name}</h2>
          </> 
        )}
      </main>
    
    )
}
export default PlayMovie;