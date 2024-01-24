import { useEffect, useState } from "react";
import axios from 'axios';
import DisplayCard from "./DisplayCard";
import ShowMore from "./ShowMore";

const Top_rated = ({baseURL}) => {

        const [top_rated,setTop_rated] = useState([]);
        const [endindex,setEndindex] = useState(12);

        const variabale='CiCircleChevDown';
        useEffect(() => {

                const fetchTopmovies = async () => {
                        try {
                                const response=await axios.get(`${baseURL}/movie/top_rated?api_key=35b4ee4f56b689b96edf5b7918c53cd8`);
                                setTop_rated(response.data.results);
                              
                        } catch(err) {
                                console.log(err.message);
                        }
                       
                }

                fetchTopmovies();
                
        },[])

        const handleMore = () => {
                console.log("hii");
                if(endindex === 12)
                        setEndindex(top_rated.length);
                else
                        setEndindex(12);
        }        


        return(
                <main>
                        <div className="toptitle">Top Trending movies </div>
                        <div className="top-trending">
                        {
                                top_rated.slice(0,endindex).map((item) => {
                                
                                        return (
                                                <DisplayCard 
                                                item={item}
                                                />
                                        )
                                
                        })
                        }
                        </div>
                        <button onClick={handleMore}>
                                <ShowMore 
                                        endindex={endindex}
                                /> 
                        </button>
                        
                </main>
        )
}
export default Top_rated;