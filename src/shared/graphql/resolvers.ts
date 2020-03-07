import {SecretsMutations} from "@/graphql/mutations/sectets-mutations";

export const resolvers = {
    Mutation: {
        ...SecretsMutations,
    }
};