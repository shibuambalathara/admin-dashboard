import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api.autobse.com/api/graphql', // Your GraphQL API endpoint
  headers: {
    authorization: 'Bearer Fe26.2**d43287366cca23437ba401efcb407a251605226d3841d782f7324a93c814bace*bKQMbGSxtFVjQ-8VfjT9jg*LUfhxx5qEAUcN29xNOdCG3e9P7GLNoJSLHI3MQYnLH08ADmWdcdoAIoTX5prG28LiL2UJozTGrAey7tMvN-emQ*1680763360330*2e6dec3ef7525a2752d28fb5bcf935d45533b028bd6b13a6bf7546c07c94d0f0*iFGH29BRh9YpcsQR-wK4uOK7TzDp0SKqI0rWzdKXvPY',
    
  },
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
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
