import RestroCard from "./RestroCard";
import resObj from "../utils/mockData";

const Body = () => {
    return (
        <div className="container-fluid">
            <div className="body_container">
                <div className="row">
                    <div className="search_container">
                        Search
                    </div>
                </div>

                <div className="row">
                    {/* <div className="restro_container"> */}
                        {
                            resObj.map(
                                (resturant) => (<RestroCard key={resturant.info.id} resData={resturant} />)
                            )
                        }
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Body;