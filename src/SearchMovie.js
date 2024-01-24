import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
import axios from "axios";
import { useContext } from 'react';
import DataContext from './context/DataContext';


const SearchMovie = ({baseURL,allmovies,setAllMovies}) => {

    const {alltv} = useContext(DataContext);

   
    const [search,setSearch] = useState('');


    return (
        <main>
                <form>
                    <input 
                        className="search"
                        autoFocus
                        type="text"
                        value={search}
                        placeholder="Search for a movie"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                <div className="toptitle">Latest Trending Movies </div>
                <div className="top-trending">
                   
                    {
                            allmovies.map((item) => {
                                    if(item.poster_path && item.original_title && item.original_title.toLowerCase().includes(search.toLowerCase())) {

                                        
                                            return (
                                                    <DisplayCard 
                                                    item={item}
                                                    />
                                            )
                                }
                    })
                    }
                </div>
                <div className="toptitle">Latest Trending Tv shows </div>
                <div className="top-trending">
                   
                {
                        alltv.map((item) => {
                            if(item.poster_path && item.original_name && item.original_name.toLowerCase().includes(search.toLowerCase())) {

                                
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
export default SearchMovie;
