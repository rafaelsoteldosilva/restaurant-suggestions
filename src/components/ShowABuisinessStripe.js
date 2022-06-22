import React, { useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   FlatList,
   TouchableOpacity,
   Image,
   ImageBackground,
} from "react-native";
import * as RootNavigation from "../helpers/rootNavigation";

import ShowABuisinessCard from "./ShowABuisinessCard";

// {
//   "total": 8228,
//   "businesses": [
//     {
//       "rating": 4,
//       "price": "$",
//       "phone": "+14152520800",
//       "id": "E8RJkjfdcwgtyoPMjQ_Olg",
//       "alias": "four-barrel-coffee-san-francisco",
//       "is_closed": false,
//       "categories": [
//         {
//           "alias": "coffee",
//           "title": "Coffee & Tea"
//         }
//       ],
//       "review_count": 1738,
//       "name": "Four Barrel Coffee",
//       "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
//       "coordinates": {
//         "latitude": 37.7670169511878,
//         "longitude": -122.42184275
//       },
//       "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
//       "location": {
//         "city": "San Francisco",
//         "country": "US",
//         "address2": "",
//         "address3": "",
//         "state": "CA",
//         "address1": "375 Valencia St",
//         "zip_code": "94103"
//       },
//       "distance": 1604.23,
//       "transactions": ["pickup", "delivery"]
//     },
//     // ...
//   ],
//   "region": {
//     "center": {
//       "latitude": 37.767413217936834,
//       "longitude": -122.42820739746094
//     }
//   }
// }

const ShowABusinessStripe = ({ title, results, navigation }) => {
   if (!results.length) return null;
   else
      return (
         <View>
            <View style={{ flexDirection: "row" }}>
               <Text style={styles.title}>{title}</Text>
               <Text style={{ paddingTop: 8, marginLeft: 10 }}>
                  (There are {results.length} locations)
               </Text>
            </View>
            <FlatList
               horizontal
               data={results}
               showsHorizontalScrollIndicator={false}
               keyExtractor={(result) => result.id}
               renderItem={({ item }) => {
                  return (
                     <TouchableOpacity
                        onPress={() =>
                           RootNavigation.navigate("ShowABusinessInfo", {
                              id: item.id,
                           })
                        }
                     >
                        <ShowABuisinessCard
                           restName={item.name}
                           restImage={item.image_url}
                           restUrl={item.url}
                           restRating={item.rating}
                           restReviews={item.review_count}
                        />
                     </TouchableOpacity>
                  );
               }}
            />
         </View>
      );
};
const styles = StyleSheet.create({
   title: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 5,
   },
});

export default ShowABusinessStripe;
