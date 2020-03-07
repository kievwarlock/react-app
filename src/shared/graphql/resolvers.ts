import {SecretsMutations} from "./mutations/sectets-mutations";

export const resolvers = {
    Mutation: {
        ...SecretsMutations,
    }
};