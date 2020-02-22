import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.scss";
import configureStore from "./redux/configureStore";



const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:5000/graphql'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link
});

// searchSongs("two feet");

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