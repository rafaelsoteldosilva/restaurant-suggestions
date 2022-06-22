import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import StarRating from "react-native-star-rating";

import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   FlatList,
   TouchableOpacity,
   Image,
   ImageBackground,
   SafeAreaView,
} from "react-native";
import yelp from "../api/yelp";

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

const ShowABusinessInfoScreen = ({ navigation, route }) => {
   const [results, setResults] = useState(null);
   const { id } = route.params;

   const getResults = async (id) => {
      const response = await yelp.get(`/${id}`);
      setResults(response.data);
   };

   useEffect(() => {
      getResults(id);
   }, []);

   const screenHeader = () => {
      return <Text style={styles.name}>{results.name}</Text>;
   };

   const screenFooter = () => {
      return (
         <View>
            <TouchableOpacity onPress={() => Linking.openURL(results.url)}>
               <Text style={styles.url}>Visit our Yelp Page</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginLeft: 5 }}>
               <StarRating
                  disabled={false}
                  emptyStar={"ios-star-outline"}
                  fullStar={"ios-star"}
                  halfStar={"ios-star-half"}
                  iconSet={"Ionicons"}
                  maxStars={5}
                  starSize={20}
                  rating={results.rating}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                  fullStarColor={"darkorange"}
               />
            </View>
            <Text style={styles.address}>{results.location.address1}</Text>
            <Text>{results.location.city}</Text>
         </View>
      );
   };

   if (!results) return null;
   else
      return (
         <SafeAreaView style={{ flex: 1 }}>
            <FlatList
               style={{ flex: 1 }}
               nestedScrollEnabled
               data={results.photos}
               keyExtractor={(photo) => photo}
               ListHeaderComponent={screenHeader}
               ListFooterComponent={screenFooter}
               renderItem={({ item }) => {
                  return <Image style={styles.image} source={{ uri: item }} />;
               }}
            />
         </SafeAreaView>
      );
};

const styles = StyleSheet.create({
   image: {
      height: 200,
      width: 300,
      margin: 5,
   },
   name: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 5,
   },
   url: {
      fontSize: 28,
      marginTop: 5,
      textDecorationLine: "underline",
      color: "blue",
   },
   address: {
      marginTop: 5,
   },
});

export default ShowABusinessInfoScreen;
