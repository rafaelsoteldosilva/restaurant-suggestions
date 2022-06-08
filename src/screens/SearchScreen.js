import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
   const [term, setTerm] = useState("");
   const [searchApi, results, errorMessage] = useResults();

   const filterResultsByPrice = (price) => {
      return results.filter((result) => {
         return result.price === price;
      });
   };

   return (
      <View style={{ flex: 1 }}>
         <SearchBar
            placeholder="Type your search..."
            darkTheme
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
               <ResultsList
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
               <ResultsList
                  results={filterResultsByPrice("$$")}
                  title="Bit Pricier"
               />
            </View>
            <View // Big spender
               style={{
                  marginTop: 5,
               }}
            >
               <ResultsList
                  results={filterResultsByPrice("$$$$")}
                  title="Big Spender"
               />
            </View>
         </ScrollView>
      </View>
   );
};
const styles = StyleSheet.create({});

export default SearchScreen;
