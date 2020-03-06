import * as React from "react";
import SecretDatabase from "@/app/SecretDatabase"

export const DbContext = React.createContext(SecretDatabase);
export const DbProvider = DbContext.Provider;

export default DbContext;