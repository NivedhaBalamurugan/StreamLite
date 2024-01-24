import { useEffect, useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const HomeCard = ({movies,item,movieId}) => {

    const [newitem, setnewItem] = useState({});

    
    const handleNext = () => {
        
        let ind=-1;
        for(let i=0;i<=movieId.length-1;i++){
            if(movieId[i] === newitem.id)
            {
                ind=i+1;
                break;
            }
        }
        if(ind === movieId.length)
            ind=0;
        
        const newid=movieId[ind];
        const mynewitem=movies.find((mv) => {
            if(mv.id === newid)
                return mv;
        })
        setnewItem(mynewitem);

    }

    const handlePrev = () => {
        
        let ind=-1;
        for(let i=0;i<=movieId.length-1;i++){
            if(movieId[i] === newitem.id)
            {
                ind=i-1;
                break;
            }
        }
        if(ind === -1)
            ind=movieId.length-1;
        
        const newid=movieId[ind];
        const mynewitem=movies.find((mv) => {
            if(mv.id === newid)
                return mv;
        })
        setnewItem(mynewitem);

    }


    useEffect(() => {
        setnewItem(item);
    },[])

    let star = Math.round(newitem.vote_average * 0.5);
    let stringstr ='*'.repeat(star);


    return (
        <div className="container">
            <img className="poster" src={`https://image.tmdb.org/t/p/w300/${newitem.poster_path}`} alt={item.original_title || item.original_name} />
            <div className="title"> {(newitem.original_name) ? newitem.original_name : newitem.original_title}</div>
            <div className="details">
                <div className="stars">
                {   stringstr.split('').map(() => (
                    <FaStar  />
                    ))
                }
                </div>
                <div className="overview">{newitem.overview}</div>
                <div className="genres">
                {
                    
                }</div>
            </div>
            <div className="prev">{<CiCircleChevLeft 
                                        onClick={handlePrev}   
                                    />}</div>
            <div className="next">{<CiCircleChevRight 
                                        onClick={handleNext}
                                    />}</div>
        </div>
    )
}
export default HomeCard;