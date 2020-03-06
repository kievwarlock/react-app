import * as React from "react";
import {Switch, Route} from "react-router-dom";
import {HomePage} from "@/app/page/home-page.component";
import {LoginPage} from "@/app/page/login-page.component";
import {APP_ROUTES} from "@/app/app.routes";
import {useMutation} from "@apollo/react-hooks";
import {SecretsType} from "@/graphql/types";
import {PUT_DATA_MUTATION} from "@/graphql/mutations/sectetsMutations";
import {DbContext} from "@/app/DbContext";
import SimpleCrypto from "simple-crypto-js";

export const Layout: React.FC = () => {
    const db = React.useContext(DbContext);
    const crypto = new SimpleCrypto("my-key");
    const [putData] = useMutation<SecretsType>(PUT_DATA_MUTATION);

    const updateDataToStore = async () => {
        const secretDatabase = await db.getSecret();

        if(secretDatabase.value) {
            const decryptValue = crypto.decrypt(secretDatabase.value, true)
            console.log("Dat:", decryptValue);
            await putData({
                variables: {
                    data: decryptValue
                }
            });
        }
    };

    React.useEffect(() => {
        updateDataToStore();
    },[]);

    return (
        <div className="layout">
            <Switch>
                <Route
                    component={HomePage}
                    path={APP_ROUTES.HOME.url}
                    exact
                />
                <Route
                    component={LoginPage}
                    path={APP_ROUTES.LOGIN.url}
                />
            </Switch>
        </div>
    );
};
