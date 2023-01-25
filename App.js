import React, { createElement as ce, useState } from "react";
import ReactDOM from "react-dom/client";
import Food_Villa_New from "./Food_Villa_New.png";

/* 
      Header
        - Logo
        - Nav Items
        - Cart
      Body
        - Search bar
        - Restaurant list
          - REstaurant card
            - Image
            - Name
            - Ratings
            - Cuisines
      Footer
        - links
        - Copyright
      */

const Title = () => {
  return (
    <a href="/">
      <img
        src={Food_Villa_New}
        width="80px"
        height="80px"
        alt="Food"
        srcSet=""
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: "yellow" }}>
      <Title />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const kwality = {
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ryzbcoban5camuwjsq0z",
  name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
  cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
  rating: "4.2",
};

const RestaurantListData = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "612602",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      uuid: "d9b2d22f-49fb-43dc-aba0-d60d6749267b",
      city: "3",
      area: "Karwan Circle No 13",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "guoy8yclwoqjglmmm5ml",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 4.599999904632568,
      slugs: {
        restaurant:
          "kwality-walls-frozen-dessert-and-ice-cream-shop-himayath-nagar-himayath-nagar-4",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "HONEY ENTERPRISES: H  NO.13-3- 595/A/6/9, Jiyaguda, Karwan Circle No 13, Hyderabad, Telangana - 500006 (HUL- I44A362P3191)",
      locality: "Circle No 13",
      parentId: 582,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹80 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹80 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5737854~p=1~eid=00000185-db17-9311-15ee-5e9600660124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "612602",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 4.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "131870",
      name: "4M Biryani House",
      uuid: "7bd4baf7-71ca-4b3d-9cbd-88cd66581615",
      city: "3",
      area: "Nallakunta & Vidyanagar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "o685uklvqias8ez1qgxz",
      cuisines: ["Biryani", "North Indian", "Chinese"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 4.599999904632568,
      slugs: {
        restaurant: "4m-biryani-house-musheerabad-nallakunta-vidyanagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Opposite Humera Hotel, Badi Masjid, Bholakpur, Musheerabad, Hyderabad",
      locality: "Nallakunta & Vidyanagar",
      parentId: 19646,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹80 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹80 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "131870",
        deliveryTime: 29,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 4.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];

/*Same as const RestaurantCard = (props) => {
  const RestaurantDetails = props.RestaurantDetails;
  Destructuring the object
}
const RestaurantCard = ({ restaurantDetail }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurantDetail;
  const CLOUD_IMG_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="card">
      <img src={CLOUD_IMG_URL + cloudinaryImageId} alt="Rest" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};*/

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // Works with line 350 #2 const { name, cuisines, avgRating, cloudinaryImageId } = restaurantDetail;
  const CLOUD_IMG_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="card">
      <img src={CLOUD_IMG_URL + cloudinaryImageId} alt="Rest" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

/** 
 * Spread Operator
 * <RestaurantCard
              name={data?.data.name}
              cloudinaryImageId={data?.data.cloudinaryImageId}
              cuisines={data?.data.cuisines}
              avgRating={data?.data.avgRating}
              key={index}
            />
             is same as 
           <RestaurantCard
              {...data?.data}
              key={index}
            /> 
            no key < index key (use ONLY if you don't have anything)< unique key (Best practice)
            */
const RestaurantList = () => {
  {
    console.log("RestaurantList", RestaurantListData);
  }
  return (
    <div className="restaurant-list">
      {RestaurantListData.map((res, index) => {
        //console.log("Restaurant", res),
        return <RestaurantCard {...res?.data} key={res?.data.id} />;
        /**Same as {RestaurantCard(RestaurantDetail)} 
            
            or 
           2. <RestaurantCard
              name={res?.data.name}
              cloudinaryImageId={res?.data.cloudinaryImageId}
              cuisines={res?.data.cuisines}
              avgRating={res?.data.cuisines}
              key={index}
            />*/
      })}
    </div>
  );
};

const Body = () => {
  return <RestaurantList />;
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayOut = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
