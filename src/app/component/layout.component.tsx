import * as React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import {HomePage} from "@/app/page/home-page.component";
import {LoginPage} from "@/app/page/login-page.component";
import {APP_ROUTES} from "@/app/app.routes";
import {useMutation} from "@apollo/react-hooks";
import {SecretsStoreType} from "@/shared/graphql/store/types";
import {PUT_DATA_MUTATION} from "@/shared/graphql/mutations/sectets-mutations";
import {DbContext} from "@/shared/database/database-context";
import SimpleCrypto from "simple-crypto-js";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {PageLoader} from "@/shared/components/page-loader.component";
import {Suspense} from "react";

export const Layout: React.FC = () => {
    const crypto = new SimpleCrypto("my-key");
    const db = React.useContext(DbContext);
    const [putData] = useMutation<SecretsStoreType>(PUT_DATA_MUTATION);
    const location = useLocation();

    const dataFromDbToStore = async () => {
        const secretDatabase = await db.getSecret();

        if (secretDatabase.value) {
            await putData({
                variables: {
                    data: crypto.decrypt(secretDatabase.value, true)
                }
            });
        }
    };

    React.useEffect(() => {
        dataFromDbToStore();
    }, []);

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={{enter: 1000, exit: 200}}>

                <Suspense fallback={<PageLoader/>}>
                    <div className="layout">
                        <Switch location={location}>
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
                </Suspense>

            </CSSTransition>
        </TransitionGroup>
    );
};
