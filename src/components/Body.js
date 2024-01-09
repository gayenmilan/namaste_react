import RestroCard from "./RestroCard";
// import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofrest, setlistofrest] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4821998&lng=88.3123894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    console.log(json);

    setlistofrest(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  // if(listofrest.length === 0){
  //   return(<Shimmer />);
  // };

  return listofrest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container-fluid">
      <div className="body_container">
        <div className="row">
          <div className="search_container">
            <button
              className="top_restro btn btn-success"
              onClick={() => {
                const filterdList = listofrest.filter(
                  (restfil) => restfil.info.avgRating > 4.1,
                );
                setlistofrest(filterdList);
              }}
            >
              Top Rated Only
            </button>
          </div>
        </div>

        <div className="row">
          {listofrest.map((resturant) => (
            <RestroCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
