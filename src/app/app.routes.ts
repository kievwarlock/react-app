export enum RegisterPages {
    HOME = "Home",
    LOGIN = "Login",
}

export type AppRouteType = {
    url: string;
};

export type AppRoutesType = {
    [key in keyof typeof RegisterPages]: AppRouteType
};

export const APP_ROUTES: AppRoutesType = {
    HOME: {
        url: "/"
    },
    LOGIN: {
        url: "/login"
    }
};