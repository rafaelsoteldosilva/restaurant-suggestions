import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";

import useResults from "../hooks/useResults";
import ShowABusinessStripe from "../components/ShowABuisinessStripe";

const MainScreen = () => {
   const [term, setTerm] = useState("");
   const [searchApi, results, errorMessage] = useResults();

   const filterResultsByPrice = (price) => {
      return results.filter((result) => {
         return result.price === price;
      });
   };

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <SearchBar
            // round
            placeholder="Type your preferred food type..."
            darktheme
            onChangeText={setTerm}
            value={term}
            onEndEditing={() => searchApi(term)}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         <ScrollView>
            <View // Cheaper
               style={{
                  borderBottomColor: "lightgray",
                  borderBottomWidth: 1,
                  marginTop: 5,
                  paddingBottom: 2,
               }}
            >
               <ShowABusinessStripe
                  // This is the Cost Effective stripe
                  results={filterResultsByPrice("$")}
                  title="Cost Effective"
               />
            </View>
            <View // Bit pricier
               style={{
                  borderBottomColor: "lightgray",
                  borderBottomWidth: 1,
                  marginTop: 5,
                  paddingBottom: 2,
               }}
            >
               <ShowABusinessStripe
                  // This is the Bit Pricier stripe
                  results={filterResultsByPrice("$$")}
                  title="Bit Pricier"
               />
            </View>
            <View // Big spender
               style={{
                  marginTop: 5,
               }}
            >
               <ShowABusinessStripe
                  // This is the Big Spender stripe
                  results={filterResultsByPrice("$$$$")}
                  title="Big Spender"
               />
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({});

export default MainScreen;
