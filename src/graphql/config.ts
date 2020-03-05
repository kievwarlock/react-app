import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {typeDefs} from "./typeDefs";
import {resolvers} from "./resolvers";
import {Store} from "./Store";

const cache = new InMemoryCache({
    freezeResults: true
});

cache.writeData({
    data: Store,
});

export const client = new ApolloClient({
    cache: cache,
    typeDefs,
    resolvers,
    assumeImmutableResults: true
});

export default client;