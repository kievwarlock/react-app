import gql from "graphql-tag";
import {SecretType, TypeNames} from "@/graphql/store/types"
import {SECRETS_QUERY} from "@/graphql/queries/secret-queries"
import {generateUuid} from "@/shared/utils/utils";
import {InMemoryCache} from "apollo-cache-inmemory";

export const ADD_SECRET_MUTATION = gql`
    mutation AddSecret($name: String!, $password: String!) {
        addSecret(name: $name, password: $password) @client
    }
`;

export const PUT_DATA_MUTATION = gql`
    mutation PutData($data: Array!) {
        putData(data: $data) @client
    }
`;

export const UPDATE_SECRET_MUTATION = gql`
    mutation UpdateSecret($id: Int!) {
      updateSecret(id: $id) @client
    }
`;

export type ContextType = {
    cache: InMemoryCache;
};

export const SecretsMutations = {
    updateSecret: (): Promise<null> => {
        return null;
    },
    putData: (_: {}, {data}: { data: SecretType[] }, {cache}: { cache: InMemoryCache }): Promise<null> => {
        cache.writeData({
            data: {
                secrets: [...data]
            }
        });
        return null;
    },
    addSecret: (_: {}, {name, password}: SecretType, {cache}: ContextType): Promise<null> => {
        const {secrets = []} = cache.readQuery({query: SECRETS_QUERY});

        if (!name || !password) {
            throw new Error("VALIDATION ERROR");
        }

        const newSecret = [
            ...secrets,
            {
                id: generateUuid(),
                name,
                password,
                __typename: TypeNames.SECRET
            }];
        cache.writeData({
            data: {secrets: newSecret}
        });

        return null;
    }
};