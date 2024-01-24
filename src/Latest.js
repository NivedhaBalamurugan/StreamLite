import { useEffect, useState } from "react";
import axios from 'axios';
import DisplayCard from "./DisplayCard";


const Latest = ({baseURL}) => {

        const [latestMovies, setLatestMovies] = useState([]);


        useEffect(() => {

                const fetchTopmovies = async () => {
                        try {
                                const response=await axios.get(`${baseURL}/discover/tv?api_key=35b4ee4f56b689b96edf5b7918c53cd8`);
                                setLatestMovies(response.data.results);
                              
                        } catch(err) {
                                console.log(err.message);
                        }
                       
                }

                fetchTopmovies();

        })
        
        return(
                <main>
                        <div className="toptitle">Latest Tv Shows </div>
                        <div className="top-trending">
                        {
                                latestMovies.map((item) => {
                                        if(item.poster_path) {
                                        return (
                                                <DisplayCard 
                                                item={item}
                                                />
                                        )
                                        }
                        })
                        }
                        </div>
                        
                        
                </main>
        )
}
export default Latest;