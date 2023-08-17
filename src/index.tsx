import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client';
let token = localStorage.getItem("token");


const client = new ApolloClient({
  
  link: createUploadLink({
  //   uri: 'https://api-dev.autobse.com/api/graphql', 
 //    uri: 'https://api.autobse.com/api/graphql', 
  uri:"http://localhost:3000/api/graphql",
    headers: {
      authorization: token ? `Bearer ${JSON.parse(token as string)}` : "",   
    }, 
  }), //  GraphQL API endpoint
 
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

