import * as React from "react";
import SecretDatabase from "./secret-database"

export const DbContext = React.createContext(SecretDatabase);
export const DbProvider = DbContext.Provider;