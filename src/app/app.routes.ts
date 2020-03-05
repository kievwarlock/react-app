export enum RegisterPages {
    HOME = "Home",
    LOGIN = "Login",
}

export type appRoutesType = {
    [key in keyof typeof RegisterPages]: { url: string }
};

export const APP_ROUTES: appRoutesType = {
    HOME: {
        url: "/"
    },
    LOGIN: {
        url: "/login"
    }
};