import React from "react";
import ReactDOM  from "react-dom/client";

/*
const JSXheading = () => (
    <div id="testdiv">
        <h1 id="heading">Hello World from React !</h1>
    </div>
);

const second = (
    <div>
        <p>This is my Second component</p>
        <JSXheading />
    </div>
);
*/

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="https://img.freepik.com/premium-vector/catering-quality-food-design-logo_187482-593.jpg" alt="" className="logo"/>
            </div>

            <div className="navitem">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestroCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info
    const {slaString} = resData?.info.sla
    return (        
        <div className="col-2 p-2">
            <div className="rest_card">
                <div className="image_wrapper">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} className="card_imagestyle"/>
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

const resObj = [
    {
      "info": {
        "id": "83199",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Harbour Road",
        "areaName": "Paschim Barisha",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "547",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-harbour-road-paschim-barisha-kolkata-83199",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "7907",
        "name": "Chowman",
        "cloudinaryImageId": "06d12ec700e4118d159fab6c3a7256dd",
        "locality": "Behala",
        "areaName": "Behala",
        "costForTwo": "₹700 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Thai",
          "Oriental",
          "Burmese",
          "Tibetan"
        ],
        "avgRating": 4.3,
        "parentId": "266",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "38 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹159"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chowman-behala-kolkata-7907",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "13038",
        "name": "Haji Saheb Behala",
        "cloudinaryImageId": "bedbbaa7543c3d70d7a01b02046ee86e",
        "locality": "Behala",
        "areaName": "Behala",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Chinese",
          "Mughlai"
        ],
        "avgRating": 4.3,
        "parentId": "92680",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "36 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-25 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/haji-saheb-behala-behala-kolkata-13038",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "152874",
        "name": "Wow! Momo",
        "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
        "locality": "Ghosal lane",
        "areaName": "Behala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "1776",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-25 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹175 OFF",
          "subHeader": "ABOVE ₹599",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/wow-momo-ghosal-lane-behala-kolkata-152874",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "304051",
        "name": "Mama Mia! - Italian Ice Creams & Cakes",
        "cloudinaryImageId": "d8e344ea3ab914c9a04fba6bbc0cd623",
        "locality": "Behala",
        "areaName": "Barisha",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.6,
        "parentId": "471728",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "14 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹175 OFF",
          "subHeader": "ABOVE ₹899",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mama-mia-italian-ice-creams-and-cakes-behala-barisha-kolkata-304051",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "355055",
        "name": "Machhli Baba Fries",
        "cloudinaryImageId": "qgbmghvgrbyufp0ergm3",
        "locality": "Behala",
        "areaName": "Barisha",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Bengali",
          "Street Food",
          "Rolls & Wraps",
          "Kebabs",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "4413",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "37 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹800",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/machhli-baba-fries-behala-barisha-kolkata-355055",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "42825",
        "name": "Mio Amore - The Cake Shop",
        "cloudinaryImageId": "8bf25e6cafe30c7e7c9c8f31f628fe96",
        "locality": "James Long Sarani",
        "areaName": "Behala",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "292958",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-25 21:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mio-amore-the-cake-shop-james-long-sarani-behala-kolkata-42825",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "33028",
        "name": "Hatari",
        "cloudinaryImageId": "tfsz89bqyk3kfc2nqp8m",
        "locality": " Bhupen Roy Road",
        "areaName": "Behala",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "North Indian"
        ],
        "avgRating": 4.5,
        "parentId": "4024",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hatari-bhupen-roy-road-behala-kolkata-33028",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "30155",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Opp. complex of MP Birla school",
        "areaName": "Behala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.7",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-opp-complex-of-mp-birla-school-behala-kolkata-30155",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "19119",
        "name": "Cafe Coffee Day",
        "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
        "locality": "Bhupen Roy Road",
        "areaName": "Behala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Burgers",
          "Ice Cream",
          "Bakery",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "1",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹159"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-bhupen-roy-road-behala-kolkata-19119",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "38945",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "lfs3zzjsmz8ijfe3hvlr",
        "locality": "Diamond Harbour Road",
        "areaName": "New Alipore",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 02:57:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-diamond-harbour-road-new-alipore-kolkata-38945",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "326359",
        "name": "6 Ballygunge Place",
        "cloudinaryImageId": "pzgkckwm68sg0b8ou5dl",
        "locality": "Behala",
        "areaName": "Purba Barisha",
        "costForTwo": "₹800 for two",
        "cuisines": [
          "Bengali"
        ],
        "avgRating": 4.5,
        "parentId": "1243",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-25 21:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/6-ballygunge-place-behala-purba-barisha-kolkata-326359",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "462214",
        "name": "The Brooklyn Creamery - Healthy Ice Cream",
        "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
        "locality": "BHUPEN ROY ROAD",
        "areaName": "KOLKATA MUNICIPAL CORPORATION",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Healthy Food"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "236673",
        "avgRatingString": "4.7",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-bhupen-roy-road-kolkata-municipal-corporation-kolkata-462214",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "243486",
        "name": "Haka",
        "cloudinaryImageId": "unopsyd4fj393adgugyu",
        "locality": "Behala",
        "areaName": "Behala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Seafood"
        ],
        "avgRating": 4.4,
        "parentId": "92713",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "38 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/haka-behala-kolkata-243486",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "9769",
        "name": "Koshe Kosha",
        "cloudinaryImageId": "a6gx1ejrbsqblnve95lf",
        "locality": "Behala",
        "areaName": "Behala",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Bengali"
        ],
        "avgRating": 4.5,
        "parentId": "566",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/koshe-kosha-behala-kolkata-9769",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "283326",
        "name": "Dariole",
        "cloudinaryImageId": "zoxf0tryewfgkemg65ux",
        "locality": "Behala",
        "areaName": "Behala",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "6960",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dariole-behala-kolkata-283326",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "7476",
        "name": "Aminia",
        "cloudinaryImageId": "znfoplggbv3uwy0zt0tw",
        "locality": "Behala",
        "areaName": "Behala",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "North Indian",
          "Indian",
          "Kebabs",
          "Tandoor"
        ],
        "avgRating": 4.5,
        "parentId": "3786",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "38 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/aminia-behala-kolkata-7476",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "282338",
        "name": "Mainland China",
        "cloudinaryImageId": "y3h18gzyiikssp5taqbt",
        "locality": "KOLKATA MUNICIPAL CORPORATION",
        "areaName": "Ho- Chi-Minh Sarani",
        "costForTwo": "₹1700 for two",
        "cuisines": [
          "Chinese",
          "Oriental",
          "Thai",
          "Pan-Asian",
          "Seafood",
          "Asian",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "617",
        "avgRatingString": "4.5",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "44 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mainland-china-municipal-corporation-ho-chi-minh-sarani-kolkata-282338",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "7463",
        "name": "Hao Chi",
        "cloudinaryImageId": "dpxciht75gshmdvn3hxx",
        "locality": "near Parnashree bus stop",
        "areaName": "Behala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Chinese"
        ],
        "avgRating": 4.4,
        "parentId": "2801",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "39 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-25 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hao-chi-near-parnashree-bus-stop-behala-kolkata-7463",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "421567",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Muchipara Behala",
        "areaName": "Behala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "41 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-muchipara-behala-kolkata-421567",
        "type": "WEBLINK"
      }
    }
  ];

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

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}

const rootelement = ReactDOM.createRoot(document.getElementById("root"));

rootelement.render(<AppLayout />);
