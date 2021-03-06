import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
import "./index.scss";
import configureStore from "./redux/configureStore";
import { LOCALHOST_GRAPHQL } from "./config.json"



const cache = new InMemoryCache();
const link = new HttpLink({
    uri: LOCALHOST_GRAPHQL
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link
});

const store = configureStore();

render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </Provider>, document.getElementById("root"));