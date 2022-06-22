import React, { useState } from "react";
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
} from "react-native";

const ShowABuisinessCard = ({
   restName,
   restImage,
   restUrl,
   restRating,
   restReviews,
   restNavigation,
}) => {
   if (!restImage) {
      return null;
   }
   return (
      <View>
         <Image
            style={styles.image}
            source={{
               uri: `${restImage}`,
            }}
         />
         <View style={{ flexDirection: "row", marginLeft: 5 }}>
            <StarRating
               disabled={false}
               emptyStar={"ios-star-outline"}
               fullStar={"ios-star"}
               halfStar={"ios-star-half"}
               iconSet={"Ionicons"}
               maxStars={5}
               starSize={20}
               rating={restRating}
               selectedStar={(rating) => this.onStarRatingPress(rating)}
               fullStarColor={"darkorange"}
            />
            <Text style={styles.reviewCount}>{restReviews} Reviews</Text>
         </View>
      </View>
   );
};
const styles = StyleSheet.create({
   image: {
      width: 210,
      height: 120,
      borderRadius: 10,
      marginHorizontal: 5,
   },
   name: {
      fontWeight: "bold",
      fontSize: 16,
      marginLeft: 5,
   },
   rating: {},
   reviewCount: {
      marginLeft: 5,
   },
});

export default ShowABuisinessCard;
