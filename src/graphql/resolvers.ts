import {SecretsMutations} from "@/graphql/mutations/sectetsMutations";

export const resolvers = {
    Mutation: {
        ...SecretsMutations,
    }
};