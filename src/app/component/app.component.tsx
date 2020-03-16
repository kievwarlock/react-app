import * as React from "react"
import {Layout} from "./layout.component";
import {BrowserRouter} from "react-router-dom";
import client from "@/shared/graphql/config"
import {ApolloProvider} from "@apollo/react-hooks";
import {DbProvider} from "@/shared/database/database-context"
import db from "@/shared/database/secret-database"
import { Provider } from "react-redux";
import { store } from "@/shared/store";

export const App: React.FC = () => {

    return (
        <ApolloProvider client={client}>
            <DbProvider value={db}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Layout/>
                    </BrowserRouter>
                </Provider>
            </DbProvider>
        </ApolloProvider>
    )
};
