import { createContext, useState, useEffect } from 'react';
import axios from "axios";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    
    const [allmovies, setAllMovies] = useState([]);
    const [alltv , setAllTv] = useState([]);
    
    
    const baseURL='https://api.themoviedb.org/3';
    
    useEffect(() => {

        const fetchTopmovies = async () => {
            try {
                    const response1=await axios.get(`${baseURL}/trending/all/week?api_key=35b4ee4f56b689b96edf5b7918c53cd8`);
                    const response2=await axios.get(`${baseURL}/movie/top_rated?api_key=35b4ee4f56b689b96edf5b7918c53cd8`);
                    const response3=await axios.get(`${baseURL}/discover/tv?api_key=35b4ee4f56b689b96edf5b7918c53cd8`);
                    setAllMovies([...response1.data.results, ...response2.data.results]);
                    setAllTv(response3.data.results);
                } catch(err) {
                    console.log(err.message);
            }
    }

    fetchTopmovies();

    })

    return (
        <DataContext.Provider value={{
                allmovies
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;