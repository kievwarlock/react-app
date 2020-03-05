import * as React from "react"
import {Layout} from "./layout.component";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import client from "@/graphql/config"
import {ApolloProvider} from "@apollo/react-hooks";

const Loader = () => (
    <div>
        <div>loading...</div>
    </div>
);

export const App: React.FC = () => {

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Suspense fallback={<Loader/>}>
                    <Layout/>
                </Suspense>
            </BrowserRouter>
        </ApolloProvider>
    )
};
