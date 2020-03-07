export enum TypeNames {
    SECRET = "Secret"
}

export type SecretType = {
    id: string;
    name: string;
    password: string;
    __typename?: TypeNames.SECRET;
};

export type SecretsStoreType = {
    secrets: SecretType[];
}