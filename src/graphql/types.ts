export enum TypeNames {
    SECRET = "Secret"
}

export type SecretsType = {
    id: string;
    name: string;
    password: string;
    __typename?: TypeNames.SECRET;
};

export type StoreType = {
    secrets: SecretsType[];
}