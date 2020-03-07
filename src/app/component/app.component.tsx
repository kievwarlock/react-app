import * as React from "react"
import {Layout} from "./layout.component";
import {BrowserRouter} from "react-router-dom";
import client from "@/shared/graphql/config"
import {ApolloProvider} from "@apollo/react-hooks";
import {DbProvider} from "@/shared/database/database-context"
import db from "@/shared/database/secret-database"

export const App: React.FC = () => {

    return (
        <ApolloProvider client={client}>
            <DbProvider value={db}>
                <BrowserRouter>
                    <Layout/>
                </BrowserRouter>
            </DbProvider>
        </ApolloProvider>
    )
};
