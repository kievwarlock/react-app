import * as React from "react";
import {Switch, Route} from "react-router-dom";
import {HomePage} from "@/app/page/home-page.component";
import {LoginPage} from "@/app/page/login-page.component";
import {APP_ROUTES} from "@/app/app.routes";

export const Layout: React.FC = () => {

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
