import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {typeDefs} from "./type-defs";
import {resolvers} from "./resolvers";
import {SecretStore} from "./store/secret-store";

const cache = new InMemoryCache({
    freezeResults: true
});

cache.writeData({
    data: {
        ...SecretStore
    },
});

export const client = new ApolloClient({
    cache,
    typeDefs,
    resolvers,
    assumeImmutableResults: true
});

export default client;