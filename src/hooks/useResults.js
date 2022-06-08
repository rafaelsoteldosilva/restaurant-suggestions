import React, { useState, useEffect } from "react";

import yelp from "../api/yelp";

export default () => {
   const [results, setResults] = useState([]);
   const [errorMessage, setErrorMessage] = useState("");

   const searchApi = async (searchTerm) => {
      try {
         setErrorMessage("");
         const response = await yelp.get("/search", {
            params: {
               limit: 50,
               term: searchTerm,
               location: "santiago de chile",
            },
         });
         setResults(response.data.businesses);
      } catch (error) {
         setErrorMessage(
            "Something went wrong with the connection with yelp, please try again"
         );
      }
   };

   useEffect(() => {
      searchApi("pasta");
   }, []);

   return [searchApi, results, errorMessage];
};
