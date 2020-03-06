import * as React from "react"
import {Layout} from "./layout.component";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import client from "@/graphql/config"
import {ApolloProvider} from "@apollo/react-hooks";
import {DbProvider} from "@/app/DbContext"
import db from "@/app/SecretDatabase"

const Loader = () => (
    <div>
        <div>loading...</div>
    </div>
);

export const App: React.FC = () => {

    return (
        <ApolloProvider client={client}>
            <DbProvider value={db}>
                <BrowserRouter>
                    <Suspense fallback={<Loader/>}>
                        <Layout/>
                    </Suspense>
                </BrowserRouter>
            </DbProvider>
        </ApolloProvider>
    )
};
