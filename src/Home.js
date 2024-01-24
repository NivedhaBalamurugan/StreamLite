import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import DisplayCard from "./DisplayCard";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import axios from 'axios';

const Home = ({baseURL}) => {

    const [movies,setMovies] = useState([]);
    const [movieId,setMovieId] = useState([]); 
    const [trendMovies,setTrendMovies] = useState([]);  
    const [startTrend,setStartTrend]= useState();

    useEffect (() => {

        const fetchMovies = async () => {
          try {
    
            const response = await axios.get(`${baseURL}/trending/all/week?api_key=35b4ee4f56b689b96edf5b7918c53cd8`);
            setMovies(response.data.results);   
            
    
          } catch(err) {
    
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
          
          }
        }
    
        fetchMovies();
    
      },[])

    useEffect(() => {

        let newmoviesid=0;
        if(movies && movies.length >0 ) {
            newmoviesid= movies.slice(0,5).map((item) => {
                        return item.id;
            })
        }
        setMovieId(newmoviesid);

        const newmovies=movies.slice(5,8).map((item) => {
            return item;
        })
        setStartTrend(5);
        setTrendMovies(newmovies);
     
    },[movies])

    const handleTrendNext = () => {
        const inc1 = 1;
        const inc2=3;
        const newstart = Math.min(startTrend + inc1 , movies.length-3);

        setStartTrend(newstart);

        const newmovies = movies.slice(newstart,newstart+3).map((item) => {
            return item;
        });

    
        setTrendMovies(newmovies);
    };
    
    const handleTrendPrev = () => {
        const inc1=1;
        const newstart=Math.max(5, startTrend-inc1);
        setStartTrend(newstart);
        const newmovies=movies.slice(newstart,newstart+3).map((item) => {
            return item;
        })
        setTrendMovies(newmovies);
    }

    return(
        <main className="list">
            
        {  
            movies.slice(0,5).map((item) => {
               if(item.original_language === "en") {

                    if(item.id === movieId[0]) {
                        
                        return (

                            <HomeCard 
                                key={item.id}
                                movies={movies}
                                item={item}
                                movieId={movieId}
                            />
                            
                        );
                    }
               }
            })
        }
        <div className="topic">trending Movies </div>
        <CiCircleChevLeft 
            className="trend-prev" 
            onClick={handleTrendPrev}
        />
        <CiCircleChevRight 
            className="trend-next"
            onClick={handleTrendNext}
        />
        <div className="top-trending">
        {
            trendMovies.map((item) => {
               
                    return (
                        <DisplayCard 
                            item={item}
                        />
                    )
               
            })
        }
        </div>
        </main>
    )
}
export default Home;