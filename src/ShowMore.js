import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleChevUp } from "react-icons/ci";

const ShowMore = ({endindex}) => {

    
    return (
        <div className="more" >
            {
                (endindex === 12) ? (
                    <CiCircleChevDown className="zoom"/>
                ) : (
                    <CiCircleChevUp className="zoom"/>
                )

            }
        </div>
    )
}
export default ShowMore;