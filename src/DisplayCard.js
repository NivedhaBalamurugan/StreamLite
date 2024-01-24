import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from 'react';
import DataContext from './context/DataContext';

const DisplayCard = ({item}) => { 

    const {allmovies} = useContext(DataContext);


    const [isPoster, setIsPoster] = useState(true);

    return (
        <div className="trend-cont">
        
                        <img className="trend-poster" 
                            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} 
                            alt={item.original_title || item.original_name} 
                            onMouseOver={() => setIsPoster(false)}
                            onMouseOut={() => setIsPoster(true)}
                        />
                        <Link to={`http://localhost:3000/all/${item.id}`}>
                        <button className="play" >
                        Play
                        </button> </Link>
                        <div className=
                            { ( isPoster ) ? "trend-title" : "trend-body"} >    
                    
                        {
                            (isPoster) ? (
                            (item.original_name) ? item.original_name : item.original_title) 
                            :  (
                                    (item.overview.length <= 300 ) ? 
                                                (  item.overview ) :
                                              (item.overview.slice(0,300))   
                            )             
                        }
                        </div>
        </div>
    )
}
export default DisplayCard;