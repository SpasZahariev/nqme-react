import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import gql from "graphql-tag";


const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:5000/graphql'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link
});

// ... above is the instantiation of the client object.
// client
//     .query({
//         query: gql`
//     query {
//         room(pin:"1111") {
//             pin
//             usernames
//             songs {
//                 title
//                 url
//                 likes
//                 company
//             }
//         }
//     }
//     `
//     })
//     .then(result => console.log(result));

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </Provider>, document.getElementById("root"));