import gql from 'graphql-tag';
import {SecretsType, TypeNames} from "@/graphql/types"
import {SECRETS_QUERY} from "@/graphql/queries/secretQueries"
import {generateUuid} from "@/shared/utils/utils";

export const ADD_SECRET_MUTATION = gql`
    mutation AddSecret($name: String!, $password: String!) {
        addSecret(name: $name, password: $password) @client
    }
`;

export const UPDATE_SECRET_MUTATION = gql`
    mutation UpdateSecret($id: Int!) {
      updateSecret(id: $id) @client
    }
`;

//TODO: validation
//TODO: cache type
export const SecretsMutations = {
    updateSecret: (): Promise<null> => {
        return null;
    },
    addSecret: (
        _parent: {},
        {name, password}: SecretsType,
        // @ts-ignore
        {cache}
    ): Promise<null> => {
        const {secrets = []} = cache.readQuery({query: SECRETS_QUERY});

        if(!name || !password){
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