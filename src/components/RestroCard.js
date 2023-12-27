import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info
    const {slaString} = resData?.info.sla
    return (        
        <div className="col-2 p-2">
            <div className="rest_card">
                <div className="image_wrapper">
                    <img src={CDN_URL + cloudinaryImageId} className="card_imagestyle"/>
                </div>
                <h5>{name}</h5>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating}</p>
                <p>{slaString}</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    );
};

export default RestroCard;